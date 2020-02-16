import PropTypes from 'prop-types';
import React from 'react';

const Button = ({
  children,
  className,
  onClick,
  ...props
}) => {
  return (
    <button
      className='waves-effect waves-light btn'
      // onClick={onClick}
      onClick={() => {
        props.onRowDataChange({
          ...props.formRowData,
          fields: [
            ...props.formRowData.fields,
            {
              name: 'Asdf',
              label: 'asdf',
              type: 'text',
            },
          ]
        })
      }}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string
  ]),
  onClick: PropTypes.func
};

Button.defaultProps = {
  children: 'Button',
  onClick: () => {}
};

export default Button;
