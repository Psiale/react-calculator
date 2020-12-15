import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = name => (clickHandler(name));
  return (
    <>
      <div>
        <Button clickHandler={clickHandler('AC')} name="AC" />
        <Button clickHandler={clickHandler('+/-')} name="+/-" />
        <Button clickHandler={clickHandler('%')} name="%" />
        <Button clickHandler={clickHandler('÷')} name="÷" />
      </div>

      <div>
        <Button clickHandler={clickHandler('7')} name="7" />
        <Button clickHandler={clickHandler('8')} name="8" />
        <Button clickHandler={clickHandler('9')} name="9" />
        <Button clickHandler={clickHandler('X')} name="X" />
      </div>
      <div>
        <Button clickHandler={clickHandler('4')} name="4" />
        <Button clickHandler={clickHandler('5')} name="5" />
        <Button clickHandler={clickHandler('6')} name="6" />
        <Button clickHandler={clickHandler('-')} name="-" />
      </div>
      <div>
        <Button clickHandler={clickHandler('1')} name="1" />
        <Button clickHandler={clickHandler('2')} name="2" />
        <Button clickHandler={clickHandler('3')} name="3" />
        <Button clickHandler={clickHandler('-')} name="-" />
      </div>
      <div>
        <Button clickHandler={clickHandler('0')} name="0" />
        <Button clickHandler={clickHandler('.')} name="." />
        <Button clickHandler={clickHandler('=')} name="=" />
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
