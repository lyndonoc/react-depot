import React from 'react';
import { shallow } from 'enzyme';

import FormContractor from './form-contractor';
import FormContractorRow from './components/form-row';
import {
  generateFormValues,
  sanitizeFormData,
} from './lib/data-utils';
import { isFormDataValid } from './lib/data-validator';
import defaultComponentsMap from './constants/defaultComponentsMap';

jest.mock('./lib/data-utils');
jest.mock('./lib/data-validator');

describe('<FormContractor />', () => {
  it('renders passed props correctly', () => {
    const props = {
      formData: [
        {
          label: 'label',
          name: 'name',
        },
        {
          label: 'label',
          name: 'name',
        },
        {
          label: 'label',
          name: 'name',
        },
      ],
    };
    generateFormValues.mockImplementationOnce((formData) => {
      expect(formData).toEqual(props.formData);
      return {};
    });
    sanitizeFormData.mockImplementationOnce((formData) => {
      expect(formData).toEqual(props.formData);
      return formData;
    });
    isFormDataValid.mockImplementationOnce((formData) => {
      expect(formData).toEqual(props.formData);
      return true;
    });
    const component = shallow(<FormContractor {...props} />);
    expect(component.find(FormContractorRow)).toHaveLength(3);
  });

  it('calls event handlers for change events', () => {
    const props = {
      componentsMap: defaultComponentsMap,
      formData: [
        {
          label: 'label',
          name: 'name',
        },
      ],
      onChange: jest.fn(),
    };
    generateFormValues.mockImplementationOnce((formData) => {
      expect(formData).toEqual(props.formData);
      return {};
    });
    sanitizeFormData.mockImplementationOnce((formData) => {
      expect(formData).toEqual(props.formData);
      return formData;
    });
    isFormDataValid.mockImplementationOnce((formData) => {
      expect(formData).toEqual(props.formData);
      return true;
    });

    const component = shallow(<FormContractor {...props} />);
    component.find(FormContractorRow).first().props().onChange(
      'name',
      {
        newdata: 'newdata',
      },
    );

    expect(generateFormValues).toHaveBeenCalledWith(props.formData, props.componentsMap);
    expect(props.onChange).toHaveBeenCalledWith({
      name: {
        newdata: 'newdata',
      },
    });
  });
});
