import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import FormContractorRow from './components/form-row';
import defaultComponentsMap from './constants/defaultComponentsMap';
import {
  formComponentMapShape,
  formDataShape,
} from './constants/shapes';
import {
  generateFormValues,
  sanitizeFormData,
} from './lib/data-utils';
import { isFormDataValid } from './lib/data-validator';

const FormContractor = ({
  classNames,
  componentsMap,
  emitChangeOnLoad,
  formData,
  useBuiltInStyle,
  onChange,
  onFormDataChange,
  onSubmit,
}) => {
  const _componentsMap = useMemo(
    () => {
      const allKeys = Array.from(
        new Set(
          Object
            .keys(defaultComponentsMap)
            .concat(Object.keys(componentsMap)),
        ),
      );
      return allKeys.reduce(
        (acc, curr) => {
          return {
            ...acc,
            [curr]: {
              ...(defaultComponentsMap[curr] || {}),
              ...(componentsMap[curr] || {}),
            },
          };
        },
        {},
      );
    },
    [
      componentsMap,
    ],
  );

  const containerClassNames = useMemo(
    () => {
      const _classNames = Array.isArray(classNames)
        ? classNames
        : [
          classNames,
        ];

      return ClassNames(
        'contractor-form',
        ..._classNames,
      );
    },
    [
      classNames,
    ],
  );
  const [
    _formData,
    setFormData,
  ] = useState(sanitizeFormData(
    isFormDataValid(formData, _componentsMap)
      ? formData
      : [],
  ));
  const [
    formValues,
    setFormValues,
  ] = useState(generateFormValues(
    _formData,
    _componentsMap,
  ));

  useEffect(() => {
    if (emitChangeOnLoad) {
      onChange(formValues);
    }
  });

  useEffect(
    () => {
      setFormData(sanitizeFormData(
        isFormDataValid(formData, _componentsMap)
          ? formData
          : [],
      ));
    },
    [
      _componentsMap,
      formData,
    ],
  );

  const handleFieldChange = useCallback(
    (name, value) => {
      const formValue = {
        ...formValues,
        [name]: value,
      };
      setFormValues(formValue);
      onChange(formValue);
    },
    [
      formValues,
      onChange,
    ],
  );

  const handleContractChange = useCallback(
    (newData) => {
      const _newData = _formData.map((formRow) => {
        return formRow.name === newData.name ? {
          ...newData,
        } : {
          ...formRow,
        };
      });
      const newFormData = sanitizeFormData(_newData);

      setFormData(newFormData);
      onFormDataChange(newFormData);
    },
    [
      _formData,
      onFormDataChange,
    ],
  );

  const handleFormSubmit = useCallback(
    (event) => {
      if (event && typeof event.preventDefault === 'function') {
        event.preventDefault();
      }

      onSubmit(formValues);
    },
    [
      formValues,
      onSubmit,
    ],
  );
  const _baseProps = {
    componentsMap: _componentsMap,
    formData: _formData,
    formValues,
    onChange: handleFieldChange,
    onRowDataChange: handleContractChange,
  };

  return (
    <form
      className={containerClassNames}
      onSubmit={handleFormSubmit}
    >
      {_formData.map((field) => {
        return (
          <FormContractorRow
            {..._baseProps}
            key={field.name}
            formFieldData={field}
            formRowData={field}
            name={field.name}
            useBuiltInStyle={useBuiltInStyle}
          />
        );
      })}
    </form>
  );
};

FormContractor.propTypes = {
  classNames: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  componentsMap: formComponentMapShape,
  emitChangeOnLoad: PropTypes.bool,
  formData: formDataShape,
  useBuiltInStyle: PropTypes.bool,
  onChange: PropTypes.func,
  onFormDataChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

FormContractor.defaultProps = {
  classNames: '',
  componentsMap: {},
  emitChangeOnLoad: false,
  formData: [],
  useBuiltInStyle: true,
  onChange: () => {},
  onFormDataChange: () => {},
  onSubmit: () => {},
};

export default FormContractor;
