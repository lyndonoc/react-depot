import {
  isFormDataValid,
  isFormRowValid,
} from './data-validator';

describe('validates form data', () => {
  it('should return false if form data are an empty array', () => {
    const mockValidator = jest.fn();
    const validation = isFormDataValid(
      [],
      {},
      mockValidator,
    );

    expect(validation).toBe(false);
    expect(mockValidator).toHaveBeenCalledTimes(0);
  });

  it('should return false if items in form data array is not object', () => {
    const mockValidator = jest.fn();
    const validation = isFormDataValid(
      [
        1,
        2,
        3,
      ],
      {},
      mockValidator,
    );

    expect(validation).toBe(false);
    expect(mockValidator).toHaveBeenCalledTimes(0);
  });

  it('should return false if any item in form data array is invalid', () => {
    const formItem = {};
    const formData = [
      formItem,
      formItem,
    ];
    const componentsMap = {};
    const mockValidator = jest.fn(() => false);
    const validation = isFormDataValid(
      formData,
      componentsMap,
      mockValidator,
    );

    expect(validation).toBe(false);
    expect(mockValidator).toHaveBeenCalledTimes(1);
    expect(mockValidator.mock.calls[0][0]).toBe(formData[0]);
    expect(mockValidator.mock.calls[0][1]).toBe(componentsMap);
  });

  it('should return true if all items in form data array are invalid', () => {
    const formItem = {};
    const formData = [
      formItem,
      formItem,
    ];
    const componentsMap = {};
    const mockValidator = jest.fn(() => true);
    const validation = isFormDataValid(
      formData,
      componentsMap,
      mockValidator,
    );

    expect(validation).toBe(true);
    expect(mockValidator).toHaveBeenCalledTimes(formData.length);
    expect(mockValidator.mock.calls[0][0]).toBe(formData[0]);
    expect(mockValidator.mock.calls[0][1]).toBe(componentsMap);
    expect(mockValidator.mock.calls[1][0]).toBe(formData[0]);
    expect(mockValidator.mock.calls[1][1]).toBe(componentsMap);
  });
});

describe('validates form row data', () => {
  it('returns false if a row data is an empty object', () => {
    const validation = isFormRowValid({});

    expect(validation).toBe(false);
  });

  it('returns false if a row data contains invalid field', () => {
    const validation = isFormRowValid({
      asdf: 'asdf',
    });

    expect(validation).toBe(false);
  });

  it('returns false if a row has both fields and type field in it', () => {
    const validation = isFormRowValid({
      'fields': null,
      'type': null,
    });

    expect(validation).toBe(false);
  });

  it('returns false if label or name is not string', () => {
    const validation = isFormRowValid({
      'label': 1,
      'name': 3,
    });

    expect(validation).toBe(false);
  });

  it('returns false if a component for a given type does not exist', () => {
    const validation = isFormRowValid({
      'label': '',
      'name': '',
      'type': 'asdf',
    });

    expect(validation).toBe(false);
  });

  it('returns false if a field is not an array', () => {
    const validation = isFormRowValid(
      {
        'label': '',
        'fields': {},
      },
      {
        'asdf': '',
      },
    );

    expect(validation).toBe(false);
  });

  it('recursively calls for each item in field array', () => {
    const mockValidator = jest.fn(() => true);
    const validation = isFormRowValid(
      {
        'label': 'label',
        'fields': [
          {},
          {},
        ],
      },
      {
        'asdf': '',
      },
      mockValidator,
    );

    expect(validation).toBe(true);
    expect(mockValidator).toHaveBeenCalledTimes(2);
  });
});
