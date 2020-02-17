import PropTypes from 'prop-types';
import React from 'react';

const ContractorSubmit = ({
  label,
}) => {
  return (
    <button
      className="contractor-submit"
      type="submit"
    >
      {label}
    </button>
  );
};

ContractorSubmit.propTypes = {
  label: PropTypes.string,
};

ContractorSubmit.defaultProps = {
  label: 'Submit',
};

export default ContractorSubmit;
