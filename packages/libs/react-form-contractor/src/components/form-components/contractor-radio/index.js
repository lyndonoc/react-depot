import React from 'react';

import CheckboxList from '../contractor-checkbox';

const ContractorRadio = (props) => {
  return (
    <CheckboxList
      {...props}
      inputType='radio'
    />
  );
};

export default ContractorRadio;
