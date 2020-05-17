import PropTypes from 'prop-types';

export const formValueShape = PropTypes.oneOfType([
  PropTypes.array,
  PropTypes.bool,
  PropTypes.number,
  PropTypes.object,
  PropTypes.string,
]);

export const formBaseFieldShape = {
  defaultValue: formValueShape,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: formValueShape,
  })),
  useBuiltInStyle: PropTypes.bool,
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
