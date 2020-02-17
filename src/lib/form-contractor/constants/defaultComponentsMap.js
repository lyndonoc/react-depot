import {
  ContractorButton,
  ContractorCheckbox,
  ContractorRadio,
  ContractorSelect,
  ContractorSubmit,
  ContractorSwitch,
  ContractorTextArea,
  ContractorTextField,
  ContractorNumber,
} from '../components/form-components';

export default {
  button: {
    component: ContractorButton,
    noValue: true,
  },
  checkbox: {
    component: ContractorCheckbox,
    defaultValue: [],
  },
  number: {
    component: ContractorNumber,
    defaultValue: 0,
  },
  radio: {
    component: ContractorRadio,
    defaultValue: (field) => {
      return Array.isArray(field.options)
        ? (field.options[0] || {}).value || ''
        : '';
    }
  },
  select: {
    component: ContractorSelect,
    defaultValue: (field) => {
      return Array.isArray(field.options)
        ? (field.options[0] || {}).value || ''
        : '';
    },
  },
  submit: {
    component: ContractorSubmit,
    noValue: true,
  },
  switch: {
    component: ContractorSwitch,
    defaultValue: false,
  },
  textarea: {
    component: ContractorTextArea,
    defaultValue: '',
  },
  textfield: {
    component: ContractorTextField,
    defaultValue: '',
  },
};
