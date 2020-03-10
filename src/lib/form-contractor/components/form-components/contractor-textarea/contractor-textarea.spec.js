import React from 'react';
import { shallow } from 'enzyme';

import ContractorTextArea from './';

describe('<ContractorTextArea />', () => {
  it('renders passed props correctly', () => {
    const props = {
      disabled: true,
      identifier: 'identifier',
      label: 'label',
      name: 'name',
      placeholder: 'placeholder',
      value: 'value',
    };
    const component = shallow(<ContractorTextArea {...props}/>);
    expect(component.find('.contractor-textarea--disabled')).toHaveLength(1);

    const labelComponent = component.find('.contractor-textarea__label');
    expect(labelComponent).toHaveLength(1);
    expect(labelComponent.props().htmlFor).toEqual(`contractor-textarea-${props.identifier}`);
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
    const component = shallow(<ContractorTextArea {...props}/>);

    const inputComponent = component.find('.contractor-textarea__textarea');
    inputComponent.simulate('change', {
      target: {
        value: 'value',
      },
    });
    expect(onChange).toHaveBeenCalledWith('value');
  });
});
