export const generateFormGroupData = (
  formGroupFields = [],
  componentsMap = {},
  groupDataGenerator = generateFormGroupData,
  defaultGetter = getDefaultFieldValue,
) => {
  return formGroupFields.reduce(
    (acc, curr) => {
      const noValue = componentsMap[curr.type] && componentsMap[curr.type].noValue;
      return {
        ...acc,
        ...(!noValue && {
          [curr.name]: Array.isArray(curr.fields)
            ? groupDataGenerator(curr.fields, componentsMap)
            : defaultGetter(curr, componentsMap),
        }),
      };
    },
    {}
  );
};

export const generateFormValues = (
  data,
  componentsMap = {},
  groupDataGenerator = generateFormGroupData,
  defaultGetter = getDefaultFieldValue,
) => {
  return data.reduce(
    (acc, curr) => {
      const noValue = componentsMap[curr.type] && componentsMap[curr.type].noValue;
      const formGroupData = curr.name
        ? {
          ...(!noValue && {
            [curr.name]: Array.isArray(curr.fields)
              ? groupDataGenerator(curr.fields, componentsMap)
              : defaultGetter(curr, componentsMap),
          }),
        }
        : groupDataGenerator(curr.fields);
      return {
        ...acc,
        ...formGroupData
      };
    },
    {}
  );
};

export const getDefaultFieldValue = (
  field,
  componentsMap,
  defaultGetter = getDefaultValueFromComponentMap,
) => {
  return field.defaultValue
    ? field.defaultValue
    : defaultGetter(field, componentsMap)
};

export const getDefaultValueFromComponentMap = (
  field,
  componentsMap,
) => {
  const defaultValue = componentsMap[field.type].defaultValue;

  return typeof defaultValue === 'function'
    ? defaultValue(field)
    : defaultValue;
};

export const sanitizeFormData = (
  formData = [],
  sanitizer = sanitizeFormData,
) => {
  return formData.map((data) => {
    return {
      ...data,
      name: data.name || data.label.toLowerCase().replace(/ /g, '_'),
      ...(Array.isArray(data.fields) && {
        fields: sanitizer(data.fields)
      })
    };
  });
};
