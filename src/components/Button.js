import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ name }) => (
  <>
    <button type="button">{name}</button>
  </>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
