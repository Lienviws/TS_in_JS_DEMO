import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'

export type VueComponentOptions = <
  Data = object,
  Methods = object,
  Computed = object,
  Props = object
  >(options?: ThisTypedComponentOptionsWithRecordProps<Vue, Data, Methods, Computed, Props>)
  => object