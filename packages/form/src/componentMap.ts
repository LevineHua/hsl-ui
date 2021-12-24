/*
 * @Description:
 * @Author: 华松林
 * @Date: 2021-08-12 17:13:14
 * @LastEditors: 华松林
 * @LastEditTime: 2021-12-24 17:20:19
 * @FilePath: /hsl-ui/packages/form/src/componentMap.ts
 */
import {
  ElInput,
  ElSelect,
  ElRadioGroup,
  ElCheckbox,
  ElCheckboxGroup,
  // ElAutoComplete,
  ElCascader,
  ElDatePicker,
  ElInputNumber,
  ElSwitch,
  ElTimePicker,
  // ElTreeSelect,
  ElSlider,
  ElRate,
  ElRadio,
  ElOption,
  ElColorPicker,
  ElTimeSelect,
} from 'element-plus'
// import { CbUpload } from '../../upload'
// import { CbEditor } from '../../editor'
import ApiSelect from './components/ApiSelect.vue'
import type { Component } from 'vue'
import type { ComponentType } from './types/index'

const componentMap = new Map<ComponentType, Component>()

componentMap.set('Input', ElInput)
componentMap.set('InputNumber', ElInputNumber)
// componentMap.set('AutoComplete', ElAutoComplete)

componentMap.set('Select', ElSelect)
componentMap.set('Option', ElOption)
// componentMap.set('ApiSelect', ElApiSelect)
// componentMap.set('TreeSelect', ElTreeSelect)
// componentMap.set('ApiTreeSelect', ElApiTreeSelect)
componentMap.set('Switch', ElSwitch)
// componentMap.set('RadioButtonGroup', ElRadioButtonGroup)
componentMap.set('Radio', ElRadio)
componentMap.set('RadioGroup', ElRadioGroup)
componentMap.set('Checkbox', ElCheckbox)
componentMap.set('CheckboxGroup', ElCheckboxGroup)
componentMap.set('Cascader', ElCascader)
componentMap.set('Slider', ElSlider)
componentMap.set('Rate', ElRate)

componentMap.set('DatePicker', ElDatePicker)
componentMap.set('TimePicker', ElTimePicker)
componentMap.set('TimeSelect', ElTimeSelect)

componentMap.set('ColorPicker', ElColorPicker)
// componentMap.set('StrengthMeter', ElStrengthMeter)
// componentMap.set('IconPicker', ElIconPicker)
// componentMap.set('InputCountDown', ElCountdownInput)

// componentMap.set('Upload', CbUpload)
// componentMap.set('Editor', CbEditor)
componentMap.set('ApiSelect', ApiSelect)

export function add(compName: ComponentType, component: Component) {
  componentMap.set(compName, component)
}

export function del(compName: ComponentType) {
  componentMap.delete(compName)
}

export { componentMap }
