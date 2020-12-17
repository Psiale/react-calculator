import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ name, clickHandler }) => {
  const handleClick = name => {
    (clickHandler(name));
  };
  return (
    <div className={name === '0' ? 'buttonZeroContainer' : 'button-container'}>
      <button onClick={() => handleClick({ name })} type="button">{name}</button>
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
