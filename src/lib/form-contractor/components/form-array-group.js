import PropTypes from 'prop-types';
import React, {
  useCallback,
} from 'react';

import FormContractorArray from './form-array';
import {
  formComponentMapShape,
  formDataShape,
  formFieldDataShape,
} from '../constants/shapes';

const FormArrayGroup = ({
  componentsMap,
  formData,
  formFieldData,
  formValues,
  onChange,
  onRowDataChange,
}) => {
  const handleChange = useCallback(
    (name, value) => {
      console.log("asdjkldasjkldasjkl - array", {
        name,
        value,
        formValues,
        formFieldData,
        finalData: value,
      });
      onChange(
        formFieldData.name || name,
        value,
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
      {formFieldData.fields.map((field, fieldIndex) => {
        return  (
          <FormContractorArray
            key={formFieldData.name + field.name}
            componentsMap={componentsMap}
            fieldIndex={fieldIndex}
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

FormArrayGroup.propTypes = {
  componentsMap: formComponentMapShape,
  formData: formDataShape,
  formFieldData: formFieldDataShape,
  formValues: PropTypes.object,
  formRowData: formFieldDataShape,
  onChange: PropTypes.func,
  onRowDataChange: PropTypes.func,
};

FormArrayGroup.defaultProps = {
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

export default FormArrayGroup;
