import React from 'react';
import { shallow } from 'enzyme';

import ContractorSwitch from './index';

describe('<ContractorSwitch />', () => {
  it('renders passed props correctly', () => {
    const props = {
      disabled: true,
      identifier: 'identifier',
      label: 'label',
      name: 'name',
      value: true,
    };
    const component = shallow(<ContractorSwitch {...props}/>);
    expect(component.find('.contractor-switch--disabled')).toHaveLength(1);
    expect(component.find('.contractor-switch__visual')).toHaveLength(1);

    const labelComponent = component.find('.contractor-switch__label');
    expect(labelComponent).toHaveLength(1);
    expect(labelComponent.props().htmlFor).toEqual(`contractor-switch-${props.identifier}`);
  });

  it('does not import style and render custom styles', () => {
    const props = {
      useBuiltInStyle: false,
    };
    const component = shallow(<ContractorSwitch {...props}/>);
    expect(component.find('.contractor-switch__visual')).toHaveLength(0);
  });

  it('calls handleChange on input change event', () => {
    const onChange = jest.fn();
    const props = {
      identifier: 'identifier',
      label: 'label',
      name: 'name',
      value: true,
      onChange: onChange,
    };
    const component = shallow(<ContractorSwitch {...props}/>);

    const inputComponent = component.find('.contractor-switch__input');
    inputComponent.simulate('change', {
      target: {
        checked: !props.value,
      },
    });
    expect(onChange).toHaveBeenCalledWith(ContractorSwitch.defaultProps.values.off);
  });
});
