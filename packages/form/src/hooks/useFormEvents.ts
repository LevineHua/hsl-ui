/*
 * @Description:
 * @Author: 华松林
 * @Date: 2021-08-13 15:10:13
 * @LastEditors: 华松林
 * @LastEditTime: 2021-12-24 17:17:46
 * @FilePath: /hsl-ui/packages/form/src/hooks/useFormEvents.ts
 */

import { nextTick, toRaw, unref } from 'vue'
import { dateUtil } from '@hsl-ui/utils/dateUtil'
import { isFunction, isObject, isArray } from '@hsl-ui/utils/is'
import { dateItemType, handleFormItemValue } from '../helper'
import type { ComputedRef, Ref } from 'vue'
import type { FormSchema } from '../types/form'

interface UseFormActionContext {
  emit: any
  getProps: ComputedRef<any>
  getSchema: ComputedRef<any>
  formModel: any
  defaultValueRef: Ref
  formElRef: Ref
  handleFormValues: Function
  schemaRef: Ref<FormSchema[]>
}

export function useFormEvents({
  emit,
  getProps,
  formModel,
  getSchema,
  defaultValueRef,
  formElRef,
  handleFormValues,
  schemaRef,
}: UseFormActionContext) {
  async function resetFields(): Promise<void> {
    const { resetFunc, submitOnReset } = unref(getProps)
    resetFunc && isFunction(resetFunc) && (await resetFunc())

    const formEl = unref(formElRef)
    if (!formEl) return

    Object.keys(formModel).forEach((key) => {
      formModel[key] = defaultValueRef.value[key]
    })
    clearValidate()
    emit('reset', toRaw(formModel))
    submitOnReset && handleSubmit()
  }
  // set form vlaue
  async function setFieldsValue(values: any): Promise<void> {
    const fields = unref(getSchema)
      .map((item: any) => item.field)
      .filter(Boolean)

    const validKeys: string[] = []
    Object.keys(values).forEach((key) => {
      const schema = unref(getSchema).find((item: any) => item.field === key)
      let value = values[key]

      const hasKey = Reflect.has(values, key)
      // console.log(schema)

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      if (schema) {
        value = handleFormItemValue(schema, value)
      }

      if (hasKey && fields.includes(key)) {
        if (itemIsDateType(key)) {
          if (Array.isArray(value)) {
            const arr: any[] = []
            for (const ele of value) {
              arr.push(ele ? dateUtil(ele) : null)
            }
            formModel[key] = arr
          } else {
            const { componentProps } = schema || {}
            let _props = componentProps as any
            if (typeof componentProps === 'function') {
              _props = _props({ formModel })
            }
            formModel[key] = value
              ? _props?.valueFormat
                ? value
                : dateUtil(value)
              : null
          }
        } else {
          formModel[key] = value
        }
        validKeys.push(key)
      }
    })
    validateFields(validKeys).catch((_) => {})
  }

  // 是否为时间类型
  function itemIsDateType(key: string) {
    return unref(getSchema).some((item: any) => {
      return item.field === key ? dateItemType.includes(item.component) : false
    })
  }

  function getFieldsValue() {
    const formEl = unref(formElRef)
    if (!formEl) return {}
    return handleFormValues(unref(formModel))
  }

  function getAllFieldsValue() {
    const schemas = unref(getSchema)
    const fields: any = {}

    schemas.forEach((item: any) => {
      const { field } = item
      fields[field] = handleFormItemValue(item, item.defaultValue)
    })
    return { ...fields, ...getFieldsValue() }
  }

  async function validateFields(nameList?: string[] | undefined) {
    return unref(formElRef)?.validateFields(nameList)
  }

  async function validate(nameList?: any) {
    // console.log(unref(formElRef))

    const ref = await unref(formElRef)?.validate(nameList)
    if (ref) {
      return getAllFieldsValue()
    }
    return false
  }

  async function clearValidate(name?: string | string[]) {
    nextTick(async () => {
      await unref(formElRef)?.clearValidate(name)
    })
  }

  async function resetSchema(
    data: Partial<FormSchema> | Partial<FormSchema>[]
  ) {
    let updateData: Partial<FormSchema>[] = []

    if (isObject(data)) {
      updateData.push(data as FormSchema)
    }
    if (isArray(data)) {
      updateData = [...data]
    }

    const hasField = updateData.every(
      (item) => Reflect.has(item, 'field') && item.field
    )

    if (!hasField) {
      console.error(
        'All children of the form Schema array that need to be updated must contain the `field` field'
      )
      return
    }
    schemaRef.value = updateData as FormSchema[]
  }

  // 提交
  async function handleSubmit(e?: any): Promise<void> {
    e && e.preventDefault()
    const { submitFunc } = unref(getProps)
    if (submitFunc && isFunction(submitFunc)) {
      const values = await validate()
      const res = handleFormValues(values)
      await submitFunc(res)
      return
    }
    const formEl = unref(formElRef)
    if (!formEl) return
    try {
      const values = await validate()
      const res = handleFormValues(values)

      emit('submit', res)
    } catch (error: any) {
      throw new Error(error)
    }
  }

  return {
    setFieldsValue,
    validateFields,
    handleSubmit,
    resetFields,
    clearValidate,
    validate,
    getAllFieldsValue,
    resetSchema,
  }
}
