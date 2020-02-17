import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import './style.scss';

const ContractorSwitch = ({
  disabled,
  identifier,
  label,
  name,
  value,
  values,
  onChange,
}) => {
  const handleChange = (evt) => {
    onChange(
      evt.target.checked
        ? values.on
        : values.off
    );
  };

  const switchClasses = ClassNames(
    'contractor-switch',
    {
      'contractor-switch--disabled': disabled,
    },
  );
  const id = `contractor-switch-${identifier}`;

  return (
    <div className={switchClasses}>
      <label
        className="contractor-switch__label"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="contractor-switch__input"
        checked={value === values.on}
        disabled={disabled}
        id={id}
        name={name}
        type='checkbox'
        onChange={handleChange}
      />
      <div className="contractor-switch__visual">
        <div className="contractor-switch__indicator"/>
      </div>
    </div>
  );
};

ContractorSwitch.propTypes = {
  disabled: PropTypes.bool,
  identifier: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.bool,
  values: PropTypes.shape({
    on: PropTypes.bool.isRequired,
    off: PropTypes.bool.isRequired,
  }),
  onChange: PropTypes.func,
};

ContractorSwitch.defaultProps = {
  disabled: false,
  label: '',
  name: '',
  value: false,
  values: {
    on: true,
    off: false,
  },
  onChange: () => {},
};

export default ContractorSwitch;
