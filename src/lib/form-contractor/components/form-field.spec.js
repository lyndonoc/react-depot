import React from 'react';
import { shallow } from 'enzyme';

import FormField from './form-field';

describe('<FormField />', () => {
  it('renders passed props correctly', () => {
    const onChange = jest.fn();
    const props = {
      componentsMap: {
        textfield: {
          component: () => null,
        },
      },
      formFieldData: {
        name: 'name',
        type: 'textfield',
      },
      value: 'name',
      onChange,
    };
    const component = shallow(<FormField {...props}/>);
    const fieldComponent = component.find(props.componentsMap.textfield.component);
    expect(fieldComponent).toHaveLength(1);

    fieldComponent.props().onChange(props.name);
    expect(onChange).toHaveBeenCalledWith(props.formFieldData.name, props.name);
  });
});
