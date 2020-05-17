import {
  generateFormGroupData,
  generateFormValues,
  getDefaultFieldValue,
  getDefaultValueFromComponentMap,
  sanitizeFormData,
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

  it('generates form values for a given data with multiple fields', () => {
    const groupDataGenerator = jest.fn(() => ({
      testt: '',
      testtt: '',
      testttt: '',
    }));
    const defaultGetter = jest.fn(() => 'asdf');
    const formData = [
      {
        label: 'Test',
        name: 'test',
        fields: [
          {
            label: 'Test',
            name: 'testt',
            type: 'textfield',
          },
          {
            label: 'Test',
            name: 'testtt',
            type: 'textfield',
          },
          {
            label: 'Test',
            name: 'testtt',
            type: 'textfield',
          },
        ],
      },
    ];
    const formValues = generateFormValues(
      formData,
      defaultComponentsMap,
      groupDataGenerator,
      defaultGetter,
    );

    expect(formValues).toEqual({
      test: {
        testt: '',
        testtt: '',
        testttt: '',
      },
    });
    expect(groupDataGenerator).toHaveBeenCalledTimes(1);
    expect(groupDataGenerator).toHaveBeenCalledWith(formData[0].fields, defaultComponentsMap);
    expect(defaultGetter).toHaveBeenCalledTimes(0);
  });

  it('does not generate a value if `noValue` is true for a given field', () => {
    const groupDataGenerator = jest.fn(() => ({
      testt: '',
      testtt: '',
      testttt: '',
    }));
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
      {
        ...defaultComponentsMap,
        textfield: {
          noValue: true,
        },
      },
      groupDataGenerator,
      defaultGetter,
    );

    expect(formValues).toEqual({});
    expect(groupDataGenerator).toHaveBeenCalledTimes(0);
    expect(defaultGetter).toHaveBeenCalledTimes(0);
  });

  it('generates form values for a form group', () => {
    const formGroup = [
      {
        label: 'Test',
        name: 'test',
        type: 'textfield',
      },
      {
        label: 'Test',
        name: 'testt',
        type: 'textfield',
      },
      {
        label: 'Test',
        name: 'testtt',
        type: 'textfield',
      },
    ];
    const groupDataGenerator = jest.fn();
    const defaultGetter = jest.fn(() => 'asdf');

    const formValues = generateFormGroupData(
      formGroup,
      defaultComponentsMap,
      groupDataGenerator,
      defaultGetter,
    );

    expect(formValues).toEqual({
      test: 'asdf',
      testt: 'asdf',
      testtt: 'asdf',
    });
    expect(groupDataGenerator).toHaveBeenCalledTimes(0);
    expect(defaultGetter).toHaveBeenCalledTimes(formGroup.length);
  });

  it('generates form values for a form group with multiple fields', () => {
    const formGroup = [
      {
        label: 'Test',
        name: 'test',
        fields: [
          {
            label: 'Test',
            name: 'testt',
            type: 'textfield',
          },
          {
            label: 'Test',
            name: 'testtt',
            type: 'textfield',
          },
          {
            label: 'Test',
            name: 'testtt',
            type: 'textfield',
          },
        ],
      },
    ];
    const groupDataGenerator = jest.fn(() => ({
      testt: 'asdf',
      testtt: 'asdf',
    }));
    const defaultGetter = jest.fn(() => 'asdf');

    const formValues = generateFormGroupData(
      formGroup,
      defaultComponentsMap,
      groupDataGenerator,
      defaultGetter,
    );

    expect(formValues).toEqual({
      test: {
        testt: 'asdf',
        testtt: 'asdf',
      },
    });
    expect(groupDataGenerator).toHaveBeenCalledTimes(1);
    expect(defaultGetter).toHaveBeenCalledTimes(0);
  });

  it('does not generate a value if `noValue` is true for a given form group', () => {
    const formGroup = [
      {
        label: 'Test',
        name: 'test',
        type: 'textfield',
      },
    ];
    const groupDataGenerator = jest.fn(() => ({
      testt: 'asdf',
      testtt: 'asdf',
    }));
    const defaultGetter = jest.fn(() => 'asdf');

    const formValues = generateFormGroupData(
      formGroup,
      {
        ...defaultComponentsMap,
        textfield: {
          noValue: true,
        },
      },
      groupDataGenerator,
      defaultGetter,
    );

    expect(formValues).toEqual({});
    expect(groupDataGenerator).toHaveBeenCalledTimes(0);
    expect(defaultGetter).toHaveBeenCalledTimes(0);
  });

  it('returns default value for a given field', () => {
    const formData = {};
    const defaultGetter = jest.fn(() => ({}));

    const defaultValue = getDefaultFieldValue(
      formData,
      defaultComponentsMap,
      defaultGetter,
    );

    expect(defaultValue).toEqual(defaultValue);
    expect(defaultGetter).toHaveBeenCalledTimes(1);
    expect(defaultGetter).toHaveBeenCalledWith(formData, defaultComponentsMap);
  });

  it('returns default value for a given field without checking component map', () => {
    const formData = {
      defaultValue: 'asdf',
    };
    const defaultGetter = jest.fn();

    const defaultValue = getDefaultFieldValue(
      formData,
      defaultComponentsMap,
      defaultGetter,
    );

    expect(defaultValue).toEqual(formData.defaultValue);
    expect(defaultGetter).toHaveBeenCalledTimes(0);
  });

  it('calls a function in components map to get a default value for a given form type', () => {
    const formData = {
      type: 'textfield',
    };
    const defaultGetter = jest.fn(() => 'asdf');
    const _componentsMap = {
      ...defaultComponentsMap,
      textfield: {
        defaultValue: defaultGetter,
      },
    };

    const defaultValue = getDefaultValueFromComponentMap(
      formData,
      _componentsMap,
    );

    expect(defaultValue).toEqual('asdf');
    expect(defaultGetter).toHaveBeenCalledTimes(1);
    expect(defaultGetter).toHaveBeenCalledWith(formData);
  });

  it('gets a default value from a components map for a given form type', () => {
    const formData = {
      type: 'textfield',
    };
    const _componentsMap = {
      ...defaultComponentsMap,
      textfield: {
        defaultValue: 'asdf',
      },
    };

    const defaultValue = getDefaultValueFromComponentMap(
      formData,
      _componentsMap,
    );

    expect(defaultValue).toEqual('asdf');
  });

  it('sanitized form data so that the app does not break', () => {
    const formData = [
      {
        label: 'Test',
        type: 'textfield',
      },
    ];
    const sanitizer = jest.fn();

    const sanitized = sanitizeFormData(
      formData,
      sanitizer,
    );

    expect(sanitized).toEqual([
      {
        ...formData[0],
        name: formData[0].label.toLowerCase(),
      },
    ]);
    expect(sanitizer).toHaveBeenCalledTimes(0);
  });

  it('sanitized form data recursively so that the app does not break', () => {
    const formData = [
      {
        label: 'Test',
        name: 'test',
        fields: [
          {
            label: 'Test',
            name: 'testt',
            type: 'textfield',
          },
          {
            label: 'Test',
            name: 'testtt',
            type: 'textfield',
          },
          {
            label: 'Test',
            name: 'testtt',
            type: 'textfield',
          },
        ],
      },
    ];
    const sanitizer = jest.fn(() => ({}));

    const sanitized = sanitizeFormData(
      formData,
      sanitizer,
    );

    expect(sanitized).toEqual([
      {
        ...formData[0],
        name: formData[0].label.toLowerCase(),
        fields: {},
      },
    ]);
    expect(sanitizer).toHaveBeenCalledTimes(formData.length);
    expect(sanitizer).toHaveBeenCalledWith(formData[0].fields);
  });
});
