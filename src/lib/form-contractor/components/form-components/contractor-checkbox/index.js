import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const compareChecker = (type, value, optionValue) => {
  if (typeof value === 'string') {
    return value === optionValue;
  }

  if (type === 'checkbox') {
    return value.find((v) => v === optionValue);
  }

  return optionValue === value;
};

const ContractorCheckbox = ({
  disabled,
  identifier,
  inputType,
  label,
  name,
  options,
  useBuiltInStyle,
  value,
  onChange
}) => {
  if (useBuiltInStyle) {
    require('./style.scss');
  }
  const handleChange = (e) => {
    const {
      value: inputValue,
    } = e.target;

    if (inputType === 'radio') {
      return onChange(inputValue);
    }

    const valIndex = value.findIndex((v) => v === inputValue);
    if (valIndex === -1) {
      onChange([...value, inputValue]);
    } else {
      onChange([
        ...value.slice(0, valIndex),
        ...value.slice(valIndex + 1),
      ]);
    }
  };

  const containerClassNames = ClassNames(
    'contractor-checkbox',
    {
      'contractor-checkbox--disabled': disabled,
    },
  );

  return (
    <div className={containerClassNames}>
      {label && (
        <div
          className="contractor-checkbox__group-label"
        >
          {label}
        </div>
      )}
      <div className="contractor-checkbox__list">
        {options.map((option, optionIndex) => {
          const id = `contractor-checkbox__item--${identifier}--${optionIndex}`;

          return (
            <label
              className='contractor-checkbox__group__item'
              htmlFor={id}
              key={id}
            >
              <input
                className="contractor-checkbox__group__item--input"
                checked={compareChecker(inputType, value, option.value)}
                disabled={disabled}
                id={id}
                name={name}
                type={inputType}
                value={option.value}
                onChange={handleChange}
              />
              <span className="contractor-checkbox__group__item--text">
                {option.label}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

ContractorCheckbox.propTypes = {
  disabled: PropTypes.bool,
  identifier: PropTypes.string,
  inputType: PropTypes.oneOf([
    'checkbox',
    'radio',
  ]),
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired
  })),
  useBuiltInStyle: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
  ]),
  onChange: PropTypes.func
};

ContractorCheckbox.defaultProps = {
  disabled: false,
  identifier: '',
  inputType: 'checkbox',
  label: '',
  name: '',
  options: [],
  useBuiltInStyle: true,
  value: [],
  onChange: () => {},
};

export default ContractorCheckbox;
