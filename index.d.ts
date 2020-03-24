import * as React from 'react';

export interface ComponentsMap {
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
  placeholder?: string
  fields?: Array<FormFieldType>
  required?: boolean
}

export interface FormValuesType {
  [key: string]: string | FormValuesType
}

export interface ReactFormContractorProps {
  classNames?: string[] | string
  componentsMap?: ComponentsMap
  emitChangeOnLoad?: boolean
  formData?: FormDataType[]
  useBuiltInStyle?: boolean
  onChange?: (FormValuesType) => void
  onFormDataChange?: (FormDataType) => void
  onSubmit?: (FormValuesType) => void
}

declare function ReactFormContractor(props: ReactFormContractorProps): JSX.Element

export default ReactFormContractor
