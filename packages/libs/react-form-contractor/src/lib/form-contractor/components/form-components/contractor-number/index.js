import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';

const ContractorNumber = ({
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
    'contractor-number',
    {
      'contractor-number--disabled': disabled,
    }
  );
  const id = `contractor-number-${identifier}`;

  return (
    <div className={containerClassNames}>
      <label
        className="contractor-number__label"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="contractor-number__input"
        disabled={disabled}
        id={id}
        name={name}
        placeholder={placeholder}
        type="number"
        value={value}
        onChange={handleChange}
        {...props}
      />
    </div>
  );
};

ContractorNumber.propTypes = {
  disabled: PropTypes.bool,
  identifier: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  props: PropTypes.object,
  value: PropTypes.number,
  onChange: PropTypes.func,
};

ContractorNumber.defaultProps = {
  disabled: false,
  identifier: '',
  label: '',
  name: '',
  placeholder: '',
  props: {},
  value: 0,
  onChange: () => {},
};

export default ContractorNumber;
