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
  onChange,
  onRowDataChange,
}) => {
  const handleChange = useCallback(
    (name, value) => {
      console.log("asdjkldasjkldasjkl - row", {
        name,
        value,
        formValues,
        formFieldData,
        finalData: formFieldData.name
          ? {
            ...formValues,
            [name]: value,
          }
          : value,
      });
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
    <fieldset>
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
  onChange: PropTypes.func,
  onRowDataChange: PropTypes.func,
};

FormRowGroup.defaultProps = {
  componentsMap: {},
  formData: [],
  formFieldData: {},
  formValues: {},
  formRowData: {},
  onChange: () => {
  },
  onRowDataChange: () => {
  },
};

export default FormRowGroup;
