import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';

const ContractorSelect = ({
  disabled,
  identifier,
  label,
  name,
  options,
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
    'contractor-select',
    {
      'contractor-select--disabled': disabled,
    }
  );
  const id = `contractor-select-${identifier}`;

  return (
    <div className={containerClassNames}>
      <label
        className="contractor-select__label"
        htmlFor={id}
      >
        {label}
      </label>
      <select
        className="contractor-select__select"
        disabled={disabled}
        name={name}
        id={id}
        value={value}
        onChange={handleChange}
      >
        {options.map((option, optionIndex) => {
          return (
            <option
              key={`contractor-select__select--option--${optionIndex}`}
              className="contractor-select__select--option"
              value={option.value}
            >
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

ContractorSelect.propTypes = {
  disabled: PropTypes.bool,
  identifier: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
  })),
  value: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
  ]),
  onChange: PropTypes.func,
};

ContractorSelect.defaultProps = {
  disabled: false,
  identifier: '',
  label: '',
  name: '',
  options: [],
  value: '',
  onChange: () => {},
};

export default ContractorSelect;
