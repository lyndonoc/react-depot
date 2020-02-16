import Checkbox from '../components/form-components/checkbox';
import Number from '../components/form-components/number';
import Radio from '../components/form-components/radio';
import Select from '../components/form-components/select';
import Switch from '../components/form-components/switch';
import Textarea from '../components/form-components/textarea';
import TextField from '../components/form-components/textfield';
import Button from '../components/form-components/button';

export default {
  button: {
    component: Button,
    noValue: true,
  },
  checkbox: {
    component: Checkbox,
    defaultValue: [],
  },
  number: {
    component: Number,
    defaultValue: 0,
  },
  radio: {
    component: Radio,
    defaultValue: (field) => {
      return Array.isArray(field.options)
        ? (field.options[0] || {}).value || ''
        : '';
    }
  },
  select: {
    component: Select,
    defaultValue: (field) => {
      return Array.isArray(field.options)
        ? (field.options[0] || {}).value || ''
        : '';
    },
  },
  switch: {
    component: Switch,
    defaultValue: false,
  },
  textarea: {
    component: Textarea,
    defaultValue: '',
  },
  text: {
    component: TextField,
    defaultValue: '',
  },
};
