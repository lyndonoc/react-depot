import React from 'react';
import { shallow } from 'enzyme';

import ContractorSubmit from './';

describe('<ContractorSubmit />', () => {
  it('renders passed props correctly', () => {
    const props = {
      disabled: true,
      identifier: 'identifier',
      label: 'label',
      name: 'name',
      placeholder: 'placeholder',
      value: true,
    };
    const component = shallow(<ContractorSubmit {...props}/>);
  });
});
