import React from 'react';
import { shallow } from 'enzyme';

import ContractorNumber from './index';

describe('<ContractorNumber />', () => {
  it('renders passed props correctly', () => {
    const props = {
      disabled: true,
      identifier: 'identifier',
      label: 'label',
      name: 'name',
      placeholder: 'placeholder',
      value: 1,
    };
    const component = shallow(<ContractorNumber {...props}/>);
    expect(component.find('.contractor-number--disabled')).toHaveLength(1);

    const labelComponent = component.find('.contractor-number__label');
    expect(labelComponent).toHaveLength(1);
    expect(labelComponent.props().htmlFor).toEqual(`contractor-number-${props.identifier}`);

    const inputComponent = component.find('.contractor-number__input');
    expect(inputComponent).toHaveLength(1);
    expect(inputComponent.props().id).toEqual(`contractor-number-${props.identifier}`);
  });

  it('calls handleChange on input change event', () => {
    const onChange = jest.fn();
    const props = {
      identifier: 'identifier',
      label: 'label',
      name: 'name',
      placeholder: 'placeholder',
      value: 1,
      onChange: onChange,
    };
    const component = shallow(<ContractorNumber {...props}/>);
    const inputComponent = component.find('.contractor-number__input');
    inputComponent.simulate('change', {
      target: {
        value: 10,
      },
    });
    expect(onChange).toHaveBeenCalledWith(10);
  });
});
