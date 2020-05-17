import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';

const ContractorTextField = ({
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
    'contractor-textfield',
    {
      'contractor-textfield--disabled': disabled,
    }
  );
  const id = `contractor-textfield-${identifier}`;

  return (
    <div className={containerClassNames}>
      <label
        className="contractor-textfield__label"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="contractor-textfield__input"
        disabled={disabled}
        id={id}
        name={name}
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={handleChange}
        {...props}
      />
    </div>
  );
};

ContractorTextField.propTypes = {
  disabled: PropTypes.bool,
  identifier: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  props: PropTypes.object,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

ContractorTextField.defaultProps = {
  disabled: false,
  identifier: '',
  label: '',
  name: '',
  placeholder: '',
  props: {},
  value: '',
  onChange: () => {},
};

export default ContractorTextField;
