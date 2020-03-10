import React from 'react';
import { shallow } from 'enzyme';

import ContractorSelect from './';

describe('<ContractorSelect />', () => {
  it('renders passed props correctly', () => {
    const props = {
      disabled: false,
      identifier: 'identifier',
      label: 'label',
      options: [
        {
          label: 'Value',
          value: 'value',
        },
        {
          label: 'Value one',
          value: 'value_one',
        },
        {
          label: 'Value two',
          value: 'value_two',
        },
      ],
      name: 'name',
      placeholder: 'placeholder',
      value: 'value',
    };
    const component = shallow(<ContractorSelect {...props}/>);
    expect(component.find('.contractor-select')).toHaveLength(1);
    expect(component.find('.contractor-select__select').props().value).toEqual(props.value);
    expect(component.find('.contractor-select__select--option')).toHaveLength(props.options.length);

    const labelComponent = component.find('.contractor-select__label');
    expect(labelComponent).toHaveLength(1);
    expect(labelComponent.props().htmlFor).toEqual(`contractor-select-${props.identifier}`);
  });

  it('calls handleChange on input change event', () => {
    const onChange = jest.fn();
    const props = {
      disabled: false,
      identifier: 'identifier',
      label: 'label',
      options: [
        {
          label: 'Value',
          value: 'value',
        },
        {
          label: 'Value one',
          value: 'value_one',
        },
        {
          label: 'Value two',
          value: 'value_two',
        },
      ],
      name: 'name',
      placeholder: 'placeholder',
      value: 'value',
      onChange,
    };
    const component = shallow(<ContractorSelect {...props}/>);

    const inputComponent = component.find('.contractor-select__select');
    inputComponent.simulate('change', {
      target: {
        value: props.options[props.options.length - 1].value,
      },
    });
    expect(onChange).toHaveBeenCalledWith(props.options[props.options.length - 1].value);
  });
});
