import * as React from 'react';

export interface ComponentsMapType {
  [key: string]: {
    component: React.ReactNode,
  }
}

export interface FormFieldType {
  defaultValue?: any
  disabled?: boolean
  label: string[] | string
  name: string
  options?: Array<{
    label: string
    value: any
  }>
  useBuiltInStyle?: boolean
  type: string
}

export interface FormFieldComponentProps extends FormFieldType {
  identifier: string
  placeholder: string
  value: string | string[] | FormValuesType
  onChange: (FormValuesType) => void
  onFormDataChange: (FormDataType) => void
}

export interface FormDataType extends FormFieldType {
  fields?: Array<FormFieldType>
  placeholder?: string
  props?: FormValuesType
  required?: boolean
}

export interface FormValuesType {
  [key: string]: any
}

export interface ReactFormContractorProps {
  classNames?: string[] | string
  componentsMap?: ComponentsMapType
  emitChangeOnLoad?: boolean
  formData?: FormDataType[]
  useBuiltInStyle?: boolean
  onChange?: (values: FormValuesType) => void
  onFormDataChange?: (data: FormDataType[]) => void
  onSubmit?: (values: FormValuesType) => void
}

declare function ReactFormContractor(props: ReactFormContractorProps): JSX.Element

export default ReactFormContractor;
