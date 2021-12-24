/*
 * @Description:
 * @Author: 华松林
 * @Date: 2021-08-11 17:46:48
 * @LastEditors: 华松林
 * @LastEditTime: 2021-12-24 17:17:37
 * @FilePath: /hsl-ui/packages/form/src/hooks/useForm.ts
 */
import { nextTick, ref, unref, watch } from 'vue'
import { getDynamicProps } from '@hsl-ui/utils/index'
import type { FormSchema } from '../types/form'

export function useForm(props: any) {
  const fromRef = ref(null)
  const loadedRef = ref(false)

  async function getForm() {
    const form = unref(fromRef)
    // if (!form) {
    //   console.error(
    //     'The form instance has not been obtained, please make sure that the form has been rendered when performing the form operation!'
    //   )
    // }
    await nextTick()
    return form as any
  }

  function register(instance: any) {
    if (unref(loadedRef) && instance === unref(fromRef)) return

    fromRef.value = instance
    loadedRef.value = true

    watch(
      () => props,
      () => {
        props && instance.setProps(getDynamicProps(props))
      },
      {
        immediate: true,
        deep: true,
      }
    )
  }

  const methods: any = {
    setProps: async (formProps: any): Promise<any> => {
      const form = await getForm()
      form.setProps(formProps)
    },
    validate: async (nameList: any): Promise<any> => {
      const form = await getForm()
      return form.validate(nameList)
    },
    setFieldsValue: async <T>(values: T): Promise<any> => {
      const form = await getForm()
      return form.setFieldsValue(values)
    },
    resetSchema: async (data: Partial<FormSchema> | Partial<FormSchema>[]) => {
      const form = await getForm()
      form.resetSchema(data)
    },
    resetFields: async () => {
      getForm().then(async (form) => {
        await form.resetFields()
      })
    },
    submit: async (): Promise<any> => {
      const form = await getForm()
      return form.submit()
    },
    getAllFieldsValue: async (): Promise<any> => {
      const form = await getForm()
      return form?.getAllFieldsValue()
    },
    clearValidate: async (name?: string | string[]) => {
      const form = await getForm()
      form.clearValidate(name)
    },
  }

  return [register, methods]
}
