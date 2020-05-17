import React from 'react';
import { shallow } from 'enzyme';

import FormContractorRow from './form-row';
import FormRowGroup from './form-row-group';

describe('<FormRowGroup />', () => {
  it('renders passed props correctly', () => {
    const props = {
      label: 'label',
      name: 'name',
      formFieldData: {
        fields: [
          {
            name: 'name',
            type: 'textfield',
          },
          {
            name: 'name',
            type: 'textfield',
          },
        ],
      }
    };
    const component = shallow(<FormRowGroup {...props} />);
    expect(component.find(`.contractor-group--${props.name}`)).toHaveLength(1);
    expect(component.find(FormContractorRow)).toHaveLength(props.formFieldData.fields.length);
  });

  it('calls event handlers for change events', () => {
    const onChange = jest.fn();
    const onRowDataChange = jest.fn();
    const props = {
      label: 'label',
      name: 'name',
      formFieldData: {
        name: 'name',
        fields: [
          {
            name: 'name',
            type: 'textfield',
          },
          {
            name: 'name',
            type: 'textfield',
          },
        ],
      },
      formValues: {
        value: 'value',
      },
      onChange,
      onRowDataChange,
    };
    const component = shallow(<FormRowGroup {...props} />);
    component.find(FormContractorRow).first().props().onChange('name', 'value');

    expect(onChange).toHaveBeenCalledWith(
      props.formFieldData.name,
      {
        ...props.formValues,
        name: 'value',
      }
    );

    component.find(FormContractorRow).first().props().onRowDataChange();
    expect(onRowDataChange).toHaveBeenCalled();
  });
});
