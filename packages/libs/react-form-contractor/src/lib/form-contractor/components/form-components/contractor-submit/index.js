import PropTypes from 'prop-types';
import React from 'react';

const ContractorSubmit = ({
  disabled,
  label,
}) => {
  return (
    <button
      className="contractor-submit"
      disabled={disabled}
      type="submit"
    >
      {label}
    </button>
  );
};

ContractorSubmit.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
};

ContractorSubmit.defaultProps = {
  disabled: false,
  label: 'Submit',
};

export default ContractorSubmit;
