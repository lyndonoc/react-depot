import PropTypes from 'prop-types';
import React, { useCallback } from 'react';

import FormRowGroup from './form-row-group';
import FormField from './form-field';
import {
  formComponentMapShape,
  formDataShape,
  formFieldDataShape
} from '../constants/shapes';

const FormContractorRow = ({
  componentsMap,
  formData,
  formFieldData,
  formValues,
  formRowData,
  name,
  onChange,
  onRowDataChange
}) => {
  const handleRowDataChange = useCallback(
    (newData) => {
      if (formRowData.name === newData.name) {
        onRowDataChange(newData);
      } else {
        onRowDataChange({
          ...formRowData,
          fields: formRowData.fields.map((rowData) => {
            return rowData.name === newData.name ? {
              ...newData
            } : {
              ...rowData
            };
          })
        });
      }
    },
    [
      formRowData,
      onRowDataChange
    ]
  );

  return formFieldData.type && typeof formFieldData.type === 'string'
    ? (
      <FormField
        componentsMap={componentsMap}
        formData={formData}
        formFieldData={formFieldData}
        formValues={formValues}
        formRowData={formRowData}
        identifier={name}
        onChange={onChange}
        onRowDataChange={onRowDataChange}
      />
    )
    : Array.isArray(formFieldData.fields) && formFieldData.fields.length > 0
      ? (
        <FormRowGroup
          componentsMap={componentsMap}
          formData={formData}
          formFieldData={formFieldData}
          formValues={
            formFieldData.name
              ? formValues[formFieldData.name]
              : formValues
          }
          formRowData={formFieldData}
          name={name}
          onChange={onChange}
          onRowDataChange={handleRowDataChange}
        />
      )
      : null;
};

FormContractorRow.propTypes = {
  componentsMap: formComponentMapShape,
  formData: formDataShape,
  formFieldData: formFieldDataShape,
  formValues: PropTypes.object,
  formRowData: formFieldDataShape,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onRowDataChange: PropTypes.func
};

FormContractorRow.defaultProps = {
  componentsMap: {},
  formData: [],
  formFieldData: {},
  formValues: {},
  formRowData: {},
  name: '',
  onChange: () => {},
  onRowDataChange: () => {}
};

export default FormContractorRow;
