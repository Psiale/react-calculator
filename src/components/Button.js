import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ name, clickHandler }) => {
  const handleClick = name => {
    console.log(`this is the name passed from button: ${name}`);
    (clickHandler(name));
  };
  return (
    <>
      <button onClick={() => handleClick({ name })} type="button">{name}</button>
    </>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
