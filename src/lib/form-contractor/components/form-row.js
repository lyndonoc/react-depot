import PropTypes from 'prop-types';
import React, { useCallback } from 'react';

import FormRowGroup from './form-row-group';
import FormField from './form-field';
import {
  formComponentMapShape,
  formDataShape,
  formFieldDataShape
} from '../constants/shapes';
import FormArrayGroup from './form-array-group';

const FormContractorRow = ({
  componentsMap,
  formData,
  formFieldData,
  formValues,
  formRowData,
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
        onChange={onChange}
        onRowDataChange={onRowDataChange}
      />
    )
    : Array.isArray(formFieldData.fields) && Boolean(formFieldData.fields.length)
      ? formFieldData.isArray ? (
        <FormArrayGroup
          componentsMap={componentsMap}
          formData={formData}
          formFieldData={formFieldData}
          formValues={formFieldData.name
            ? formValues[formFieldData.name]
            : formValues
          }
          formRowData={formFieldData}
          onChange={onChange}
          onRowDataChange={handleRowDataChange}
        />
      ) : (
        <FormRowGroup
          componentsMap={componentsMap}
          formData={formData}
          formFieldData={formFieldData}
          formValues={formFieldData.name
            ? formValues[formFieldData.name]
            : formValues
          }
          formRowData={formFieldData}
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
  onChange: PropTypes.func,
  onRowDataChange: PropTypes.func
};

FormContractorRow.defaultProps = {
  componentsMap: {},
  formData: [],
  formFieldData: {},
  formValues: {},
  formRowData: {},
  onChange: () => {
  },
  onRowDataChange: () => {
  }
};

export default FormContractorRow;
