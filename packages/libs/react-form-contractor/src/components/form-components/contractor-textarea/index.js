import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';

const ContractorTextArea = ({
  disabled,
  identifier,
  label,
  name,
  placeholder,
  props,
  value,
  onChange,
}) => {
  const handleChange = useCallback(
    (event) => {
      onChange(event.target.value);
    },
    [
      onChange,
    ]
  );
  const containerClassNames = ClassNames(
    'contractor-textarea',
    {
      'contractor-textarea--disabled': disabled,
    }
  );
  const id = `contractor-textarea-${identifier}`;

  return (
    <div className={containerClassNames}>
      <label
        className="contractor-textarea__label"
        htmlFor={id}
      >
        {label}
      </label>
      <textarea
        className="contractor-textarea__textarea"
        disabled={disabled}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        {...props}
      />
    </div>
  );
};

ContractorTextArea.propTypes = {
  disabled: PropTypes.bool,
  identifier: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  props: PropTypes.object,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

ContractorTextArea.defaultProps = {
  disabled: false,
  identifier: '',
  label: '',
  name: '',
  placeholder: '',
  props: {},
  value: '',
  onChange: () => {},
};

export default ContractorTextArea;
