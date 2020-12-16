import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = ({ name }) => {
    (clickHandler(name));
  };
  return (
    <>
      <div>
        <Button clickHandler={handleClick} name="AC" />
        <Button clickHandler={handleClick} name="+/-" />
        <Button clickHandler={handleClick} name="%" />
        <Button clickHandler={handleClick} name="÷" />
      </div>

      <div>
        <Button clickHandler={handleClick} name="7" />
        <Button clickHandler={handleClick} name="8" />
        <Button clickHandler={handleClick} name="9" />
        <Button clickHandler={handleClick} name="X" />
      </div>
      <div>
        <Button clickHandler={handleClick} name="4" />
        <Button clickHandler={handleClick} name="5" />
        <Button clickHandler={handleClick} name="6" />
        <Button clickHandler={handleClick} name="-" />
      </div>
      <div>
        <Button clickHandler={handleClick} name="1" />
        <Button clickHandler={handleClick} name="2" />
        <Button clickHandler={handleClick} name="3" />
        <Button clickHandler={handleClick} name="+" />
      </div>
      <div>
        <Button clickHandler={handleClick} name="0" />
        <Button clickHandler={handleClick} name="." />
        <Button clickHandler={handleClick} name="=" />
      </div>
    </>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;

// Group 1: AC, +/-, %, ÷
// Group 2: 7, 8, 9, X
// Group 3: 4, 5, 6, -
// Group 4: 1, 2, 3, +
// Group 5: 0, ., =