import PropTypes from 'prop-types';
import React, {
  useCallback,
} from 'react';

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
  identifier,
  onChange,
  onRowDataChange,
}) => {
  const componentMap = componentsMap[formFieldData.type || 'text'];
  if (!componentMap || !componentMap.component) {
    invalidLog(`no component provided for ${formFieldData.type}.`);
  }

  const handleFieldChange = useCallback(
    (fieldValue) => {
      onChange(formFieldData.name, fieldValue);
    },
    [
      onChange,
      formFieldData,
    ],
  );
  const handleRowDataChange = useCallback(
    (newRowData) => {
      onRowDataChange(newRowData);
    },
    [
      onRowDataChange,
    ],
  );

  const FieldComponent = componentMap.component;
  const fieldProps = {
    disabled: Boolean(formFieldData.disabled),
    identifier,
    label: formFieldData.label,
    name: formFieldData.name,
    value: formValues && formValues.hasOwnProperty(formFieldData.name)
      ? (formFieldData.type === 'text'
        ? formValues[formFieldData.name].toString()
        : formValues[formFieldData.name])
      : '',
    ...(formFieldData.props || {}),
    ...(componentMap.props || {}),
    ...(formFieldData.options && {
      options: formFieldData.options,
    }),
    onChange: handleFieldChange,
    onRowDataChange: handleRowDataChange,
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
  formData: formDataShape,
  formFieldData: formFieldShape,
  formValues: PropTypes.object,
  formRowData: formFieldDataShape,
  identifier: PropTypes.string,
  onChange: PropTypes.func,
  onRowDataChange: PropTypes.func,
};

FormContractorField.defaultProps = {
  componentsMap: {},
  formData: [],
  formFieldData: {},
  formValues: {},
  formRowData: {},
  identifier: '',
  onChange: () => {},
  onRowDataChange: () => {},
};

export default FormContractorField;
