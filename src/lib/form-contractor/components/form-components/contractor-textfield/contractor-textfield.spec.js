import React from 'react';
import { shallow } from 'enzyme';

import ContractorTextField from './';

describe('<ContractorTextField />', () => {
  it('renders passed props correctly', () => {
    const props = {
      disabled: true,
      identifier: 'identifier',
      label: 'label',
      name: 'name',
      placeholder: 'placeholder',
      value: 'value',
    };
    const component = shallow(<ContractorTextField {...props}/>);
    expect(component.find('.contractor-textfield--disabled')).toHaveLength(1);

    const labelComponent = component.find('.contractor-textfield__label');
    expect(labelComponent).toHaveLength(1);
    expect(labelComponent.props().htmlFor).toEqual(`contractor-textfield-${props.identifier}`);
  });

  it('calls handleChange on input change event', () => {
    const onChange = jest.fn();
    const props = {
      identifier: 'identifier',
      label: 'label',
      name: 'name',
      placeholder: 'placeholder',
      value: 'value',
      onChange: onChange,
    };
    const component = shallow(<ContractorTextField {...props}/>);

    const inputComponent = component.find('.contractor-textfield__input');
    inputComponent.simulate('change', {
      target: {
        value: 'value',
      },
    });
    expect(onChange).toHaveBeenCalledWith('value');
  });
});
