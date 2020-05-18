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
  useBuiltInStyle,
  onChange,
  onRowDataChange,
}) => {
  const componentMap = componentsMap[formFieldData.type || 'textfield'];

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

  if (!componentMap || !componentMap.component) {
    invalidLog(`no component provided for ${formFieldData.type}.`);
    return null;
  }

  const FieldComponent = componentMap.component;
  const fieldProps = {
    disabled: Boolean(formFieldData.disabled),
    identifier,
    label: formFieldData.label,
    name: formFieldData.name,
    placeholder: formFieldData.placeholder,
    value: formValues && formValues.hasOwnProperty(formFieldData.name)
      ? (formFieldData.type === 'textfield'
        ? formValues[formFieldData.name].toString()
        : formValues[formFieldData.name])
      : '',
    props: {
      ...(formFieldData.props || {}),
    },
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
      useBuiltInStyle={useBuiltInStyle}
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
  useBuiltInStyle: PropTypes.bool,
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
  useBuiltInStyle: true,
  onChange: () => {},
  onRowDataChange: () => {},
};

export default FormContractorField;
