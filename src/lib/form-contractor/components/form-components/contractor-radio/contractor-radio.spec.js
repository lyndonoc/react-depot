import React from 'react';
import { mount } from 'enzyme';

import ContractorRadio from './';

describe('<ContractorRadio />', () => {
  it('renders passed props correctly', () => {
    const props = {
      disabled: true,
      identifier: 'identifier',
      label: 'label',
      name: 'name',
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
      value: 'value',
    };
    const component = mount(<ContractorRadio {...props}/>);
    expect(component.find('.contractor-checkbox--disabled')).toHaveLength(1);

    const labelComponent = component.find('.contractor-checkbox__group__item');
    expect(labelComponent).toHaveLength(props.options.length);
    labelComponent
      .forEach((node, nodeIndex) => {
        const expectedId = `contractor-checkbox__item--${props.identifier}--${nodeIndex}`;
        const nodeProps = node.props();

        expect(nodeProps.htmlFor).toEqual(expectedId);
      });

    component
      .find('.contractor-checkbox__group__item--input')
      .forEach((node, nodeIndex) => {
        const nodeProps = node.props();

        expect(Boolean(nodeProps.checked)).toBe(nodeProps.value === props.value);
        expect(nodeProps.value).toEqual(props.options[nodeIndex].value);
      });
  });

  it('calls handleChange on input change event', () => {
    const onChange = jest.fn();
    const props = {
      identifier: 'identifier',
      label: 'label',
      name: 'name',
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
      value: 'value',
      onChange,
    };
    const component = mount(<ContractorRadio {...props}/>);

    const inputComponent = component.find('.contractor-checkbox__group__item--input').at(2);
    inputComponent.simulate('change', {
      target: {
        value: props.options[2].value,
      },
    });
    expect(onChange).toHaveBeenCalledWith(props.options[2].value);
  });
});
