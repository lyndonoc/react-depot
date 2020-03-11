# React Form Contractor

WAI-ARIA compliant form generator for React.js

```jsx
import FormContractor from 'react-form-contractor'

<FormContractor
  componentsMap={componentsMap}
  emitChangeOnLoad
  formData={formData}
  useBuiltInStyle
  onChange={handleFormChange}
  onFormDataChange={handleFormDataChange}
  onSubmit={handleSubmit}
/>
```

Check out the [live demo](https://lyndonoc.github.io/react-form-contractor/).

## Install

```bash
npm install react-form-contractor
```

## API

### Props

#### `componentsMap: object` (required)

A map of additional components. This will be merged with the library's [default components map](https://github.com/lyndonoc/react-form-contractor/blob/master/src/lib/form-contractor/constants/defaultComponentsMap.js). You can provide additional components via `componentsMap`, and those components will be made available for form fields whose `type` value is in the components map.

#### `emitChangeOnLoad: boolean`

Determines whether or not to execute `onChange` prop when the form builder initially loads.
Defaults: `false`

#### `formData: object` (required)

JSON representation of the form to generate.

Schema:
- `label: string` (required): Text value that represents a form field, used in `label` and `legend` tag.
- `name: string`: key value that represents value of a field within a form.
- `type: string`: represents what component to use from `componentsMap`. if a value is set to this field, `fields` field will be ignored.
- `fields: array of formData`: an array of `formData` to use for a given `name` field within a form, which will build a nested object structure for your form.
- `options: array`: an array of options to be passed to form components that display multiple options to choose from. this field will be ignored if `fields` is set with a non-empty array.

You can find an example form data in the [live demo](https://lyndonoc.github.io/react-form-contractor/).

#### `useBuiltInStyle: bool`

Determines whether or not to use the library's built-in styles.
Defaults: `true`

#### `onChange: function`

Event handler when any values in the form changes. The most up-to-date form values will be passed as an argument.

#### `onFormDataChange: function`

Event handler when one of the form components modifies `formData`. The most up-to-date modified `formData` values will be passed as an argument.

#### `onSubmit: function`

Event handler when the form is submitted. The most up-to-date form values will be passed as an argument.
