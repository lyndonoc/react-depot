import PropTypes from 'prop-types';
import React from 'react';

import { invalidLog } from '../lib/data-validator';
import {
  formComponentMapShape,
  formDataShape,
  formFieldDataShape,
  formFieldShape
} from '../constants/shapes';

const FormContractorField = ({
  componentsMap,
  formData,
  formFieldData,
  formValues,
  formRowData,
  onChange,
  onRowDataChange,
}) => {
  const componentMap = componentsMap[formFieldData.type || 'text'];
  if (!componentMap || !componentMap.component) {
    invalidLog(`no component provided for ${formFieldData.type}.`);
    return null;
  }

  const FieldComponent = componentMap.component;
  const handleFieldChange = (fieldValue) => {
    onChange(formFieldData.name, fieldValue);
  };
  const handleRowDataChange = (newRowData) => {
    onRowDataChange(newRowData);
  };

  const fieldProps = {
    disabled: Boolean(formFieldData.disabled),
    id: `form-item-${formFieldData.name}`,
    label: formFieldData.label,
    name: formFieldData.name,
    value: formValues && formValues.hasOwnProperty(formFieldData.name)
      ? (formFieldData.type === 'text'
        ? formValues[formFieldData.name].toString()
        : formValues[formFieldData.name])
      : '',
    onChange: handleFieldChange,
    onRowDataChange: handleRowDataChange,
    ...(formFieldData.props || {}),
    ...(componentMap.props || {}),
    ...(formFieldData.options && {
      options: formFieldData.options,
    }),
  };

  return (
    <FieldComponent
      formData={formData}
      formFieldData={formFieldData}
      formRowData={formRowData}
      {...fieldProps}
    />
  );
};

FormContractorField.propTypes = {
  componentsMap: formComponentMapShape,
  fieldIndex: PropTypes.number,
  formData: formDataShape,
  formFieldData: formFieldShape,
  formValues: PropTypes.object,
  formRowData: formFieldDataShape,
  isArray: PropTypes.bool,
  onChange: PropTypes.func,
  onRowDataChange: PropTypes.func,
};

FormContractorField.defaultProps = {
  componentsMap: {},
  fieldIndex: 0,
  formData: [],
  formFieldData: {},
  formValues: {},
  formRowData: {},
  isArray: false,
  onChange: () => {},
  onRowDataChange: () => {},
};

export default FormContractorField;
