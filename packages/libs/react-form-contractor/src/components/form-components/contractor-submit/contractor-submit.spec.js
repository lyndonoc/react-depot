import React from 'react';
import { shallow } from 'enzyme';

import ContractorSubmit from './index';

describe('<ContractorSubmit />', () => {
  it('renders passed props correctly', () => {
    const props = {
      name: 'name',
    };
    const component = shallow(<ContractorSubmit {...props}/>);
    const btnComponent = component.find('.contractor-submit');

    expect(btnComponent).toHaveLength(1);
    expect(btnComponent.props().disabled).toBe(false);
    expect(btnComponent.props().type).toEqual('submit');
  });
});
