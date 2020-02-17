export const isFormDataValid = (formData, componentsMap) => {
  if (
    !formData ||
    !Array.isArray(formData) ||
    formData.filter((data) => typeof data !== 'object').length > 0
  ) {
    invalidLog('formData must be an array of objects.');
    return false;
  }

  for (let i = 0; i < formData.length; i++) {
    const isDataValid = isFormRowValid(formData[i], componentsMap);

    if (!isDataValid) {
      return false;
    }
  }

  return true;
};

export const isFormRowValid = (row = {}, componentsMap = {}) => {
  const allowed = [
    'defaultValue',
    'disabled',
    'label',
    'name',
    'options',
    'fields',
    'type',
  ];
  const keys = Object.keys(row);

  if (keys.length < 1) {
    invalidLog('one of the items in formData is an empty object.');
    return false;
  }

  for (let i = 0; i < keys.length; i++) {
    if (!allowed.includes(keys[i])) {
      invalidLog(`${keys[i]} field is not allowed in formData.`);
      return false;
    }
  }

  if (row.hasOwnProperty('fields')) {
    if (row.hasOwnProperty('type')) {
      invalidLog(`items in formData can only have either 'fields' or 'type' field, not both.`);
      return false;
    }
    // TODO: put this back
    // if (row.hasOwnProperty('validator')) {
    //   invalidLog(`items in formData can only have either 'fields' or 'validator' field, not both.`);
    //   return false;
    // }
  }

  if (
    typeof row.label !== 'string' ||
    (
      row.hasOwnProperty('name') &&
      typeof row.name !== 'string'
    )
  ) {
    invalidLog('\'label\' and \'name\' must be string type.');
    return false;
  }

  // TODO: put this back
  // if (row.hasOwnProperty('validator') && typeof row.validator !== 'function') {
  //   invalidLog('validator must be a function.');
  //   return false;
  // }

  if (row.hasOwnProperty('type') && !componentsMap.hasOwnProperty(row.type)) {
    invalidLog(`no component provided for ${row.type}.`);
    return false;
  }

  if (row.hasOwnProperty('fields') && !Array.isArray(row.fields)) {
    invalidLog('\'fields\' must be an array.');
    return false;
  }

  for (let i = 0; i < row.fields; i++) {
    const isFieldsValid = isFormRowValid(row.fields[i], componentsMap);

    if (!isFieldsValid) {
      return false;
    }
  }

  return true;
};

export const invalidLog = (msg) => {
  if (msg) {
    const baseMsg = 'react-form-contractor warning: ';
    console.error(`${baseMsg}${msg}`);
  }
};
