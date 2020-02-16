import PropTypes from 'prop-types';

const formLabelShape = PropTypes
  .oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ])
  .isRequired;

const formValueShape = PropTypes.oneOfType([
  PropTypes.array,
  PropTypes.bool,
  PropTypes.number,
  PropTypes.object,
  PropTypes.string,
]);

const formBaseFieldShape = {
  defaultValue: formValueShape,
  label: formLabelShape,
  name: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: formLabelShape,
    value: formValueShape,
  })),
  type: PropTypes.string,
};

export const formFieldShape = PropTypes.shape(formBaseFieldShape);

export const formFieldDataShape = PropTypes.shape({
  ...formBaseFieldShape,
  fields: PropTypes.arrayOf(formFieldShape),
});

export const formDataShape = PropTypes.arrayOf(formFieldDataShape);

export const formComponentMapShape = PropTypes.shape({
  [PropTypes.string]: PropTypes.shape({
    component: PropTypes.node,
  }),
});
