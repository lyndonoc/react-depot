import * as React from 'react';

interface ComponentsMap {
  [key: string]: {
    component: React.ReactNode,
  }
}

interface FormFieldType {
  defaultValue?: any
  disabled: boolean
  label: string[] | string
  name: string
  options: Array<{
    label: string
    value: any
  }>
  useBuiltInStyle: boolean
  type: string
}

interface FormDataType extends FormFieldType {
  fields: Array<FormFieldType>
}

interface FormValuesType {
  [key: string]: string | FormValuesType
}

interface ReactFormContractorProps {
  classNames: string[] | string
  componentsMap: ComponentsMap
  emitChangeOnLoad: boolean
  formData: FormDataType
  useBuiltInStyle: boolean
  onChange: (FormValuesType) => void
  onFormDataChange: (FormDataType) => void
  onSubmit: (FormValuesType) => void
}

export default interface ReactFormContractor {
  (props: ReactFormContractorProps): JSX.Element
}
