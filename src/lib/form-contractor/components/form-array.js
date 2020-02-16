import PropTypes from 'prop-types';
import React, {
  useCallback
} from 'react';

import FormArrayGroup from './form-array-group';
import FormField from './form-field';
import {
  formComponentMapShape,
  formDataShape,
  formFieldDataShape
} from '../constants/shapes';
import FormRowGroup from './form-row-group';

const FormContractorArray = ({
  componentsMap,
  fieldIndex,
  formData,
  formFieldData,
  formValues,
  formRowData,
  onChange,
  onRowDataChange
}) => {
  const handleChange = useCallback(
    (name, newValue) => {
      console.log("asdjkldasjkldasjkl", { formFieldData, fieldIndex, formValues, name, newValue });
      console.log(name, formValues.map((formValue, valueIndex) => {
        return valueIndex === fieldIndex
          ? typeof formValue === 'object'
            ? {
              ...formValue,
              ...newValue,
            }
            : newValue
          : formValue;
      }));
      onChange(name, formValues.map((formValue, valueIndex) => {
        return valueIndex === fieldIndex
          ? typeof formValue === 'object'
            ? {
              ...formValue,
              ...newValue,
            }
            : newValue
          : formValue;
      }))
    },
    [
      fieldIndex,
      formValues,
      onChange,
    ],
  );

  return formFieldData.type && typeof formFieldData.type === 'string'
      ? (
      <FormField
        componentsMap={componentsMap}
        formData={formData}
        formFieldData={formFieldData}
        formValues={
          formValues[fieldIndex] && formValues[fieldIndex][formFieldData.name]
            ? formValues[fieldIndex][formFieldData.name]
            : formValues[fieldIndex]}
        formRowData={formRowData}
        onChange={handleChange}
        onRowDataChange={onRowDataChange}
      />
    )
    : Array.isArray(formFieldData.fields) && Boolean(formFieldData.fields.length)
      ? formFieldData.isArray ? (
        <FormArrayGroup
          componentsMap={componentsMap}
          formData={formData}
          formFieldData={formFieldData}
          formValues={
            formValues[fieldIndex] && formValues[fieldIndex][formFieldData.name]
              ? formValues[fieldIndex][formFieldData.name]
              : formValues[fieldIndex]
          }
          formRowData={formFieldData}
          onChange={onChange}
          onRowDataChange={onRowDataChange}
        />
      ) : (
        <FormRowGroup
          componentsMap={componentsMap}
          formData={formData}
          formFieldData={formFieldData}
          formValues={
            formValues[fieldIndex] && formValues[fieldIndex][formFieldData.name]
              ? formValues[fieldIndex][formFieldData.name]
              : formValues[fieldIndex]
          }
          formRowData={formFieldData}
          onChange={handleChange}
          onRowDataChange={onRowDataChange}
        />
      )
      : null;
};

FormContractorArray.propTypes = {
  componentsMap: formComponentMapShape,
  fieldIndex: PropTypes.number,
  formData: formDataShape,
  formFieldData: formFieldDataShape,
  formValues: PropTypes.object,
  formRowData: formFieldDataShape,
  onChange: PropTypes.func,
  onRowDataChange: PropTypes.func
};

FormContractorArray.defaultProps = {
  componentsMap: {},
  fieldIndex: 0,
  formData: [],
  formFieldData: {},
  formValues: {},
  formRowData: {},
  onChange: () => {
  },
  onRowDataChange: () => {
  }
};

export default FormContractorArray;
