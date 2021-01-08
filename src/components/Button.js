import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ name, clickHandler, color }) => {
  const handleClick = name => {
    (clickHandler(name));
  };
  return (
    <div className="button-container" id={name === '0' ? 'buttonZeroContainer' : null}>
      <button
        style={{
          backgroundColor: color,
        }}
        onClick={() => handleClick({ name })}
        type="button"
      >
        {name}
      </button>
    </div>
  );
};
Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  color: PropTypes.string,
};

Button.defaultProps = {
  color: '#e0e0e0;',
};

export default Button;
