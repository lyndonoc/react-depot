import React from 'react';
import { shallow } from 'enzyme';

import FormRow from './form-row';
import FormField from './form-field';
import FormRowGroup from './form-row-group';

describe('<FormRow />', () => {
  it('renders passed props correctly', () => {
    const component = shallow(<FormRow
      formFieldData={{
        name: 'name',
        type: 'textfield',
      }}
    />);
    expect(component.find(FormField)).toHaveLength(1);

    const componentTwo = shallow(<FormRow
      formFieldData={{
        fields: [
          {
            name: 'name',
            type: 'textfield',
          },
          {
            name: 'name',
            type: 'textfield',
          },
        ]
      }}
    />);
    expect(componentTwo.find(FormRowGroup)).toHaveLength(1);
  });

  it('calls event handlers for change events', () => {
    const onChange = jest.fn();
    const onRowDataChange = jest.fn();
    const component = shallow(<FormRow
      formFieldData={{
        name: 'name',
        type: 'textfield',
      }}
      onChange={onChange}
      onRowDataChange={onRowDataChange}
    />);

    component.props().onChange();
    component.props().onRowDataChange();
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onRowDataChange).toHaveBeenCalledTimes(1);
  });
});
