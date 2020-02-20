import {
  generateFormValues,
} from './data-utils';
import defaultComponentsMap from '../constants/defaultComponentsMap';

describe('generates form values', () => {
  it('generates form values for a given form data and components map', () => {
    const dataGenerator = jest.fn();
    const defaultGetter = jest.fn(() => 'asdf');
    const formData = [
      {
        label: 'Test',
        name: 'test',
        type: 'textfield',
      },
    ];
    const formValues = generateFormValues(
      formData,
      defaultComponentsMap,
      dataGenerator,
      defaultGetter,
    );

    expect(formValues).toEqual({
      test: 'asdf',
    });
    expect(dataGenerator).toHaveBeenCalledTimes(0);
    expect(defaultGetter).toHaveBeenCalledTimes(1);
  });
});
