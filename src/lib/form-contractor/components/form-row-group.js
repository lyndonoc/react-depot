import PropTypes from 'prop-types';
import React, {
  useCallback,
} from 'react';

import FormContractorRow from './form-row';
import {
  formComponentMapShape,
  formDataShape,
  formFieldDataShape,
} from '../constants/shapes';

const FormRowGroup = ({
  componentsMap,
  formData,
  formFieldData,
  formValues,
  name,
  onChange,
  onRowDataChange,
}) => {
  const handleChange = useCallback(
    (name, value) => {
      onChange(
        formFieldData.name || name,
        formFieldData.name
          ? {
            ...formValues,
            [name]: value,
          }
          : value,
      );
    },
    [
      formFieldData,
      formValues,
      onChange,
    ],
  );

  return (
    <fieldset className={`contractor-group--${name}`}>
      <legend>{formFieldData.label}</legend>
      {formFieldData.fields.map((field) => {
        return (
          <FormContractorRow
            key={formFieldData.name + field.name}
            componentsMap={componentsMap}
            formData={formData}
            formFieldData={field}
            formValues={formValues}
            formRowData={formFieldData}
            name={`${name}.${field.name}`}
            onChange={handleChange}
            onRowDataChange={onRowDataChange}
          />
        );
      })}
    </fieldset>
  );
};

FormRowGroup.propTypes = {
  componentsMap: formComponentMapShape,
  formData: formDataShape,
  formFieldData: formFieldDataShape,
  formValues: PropTypes.object,
  formRowData: formFieldDataShape,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onRowDataChange: PropTypes.func,
};

FormRowGroup.defaultProps = {
  componentsMap: {},
  formData: [],
  formFieldData: {},
  formValues: {},
  formRowData: {},
  name: '',
  onChange: () => {},
  onRowDataChange: () => {},
};

export default FormRowGroup;
