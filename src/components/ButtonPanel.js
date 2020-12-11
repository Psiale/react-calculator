import React from 'react';
import Button from './Button';

const ButtonPanel = () => (
  <>
    <div>
      <Button name="AC" />
      <Button name="+/-" />
      <Button name="%" />
      <Button name="÷" />
    </div>

    <div>
      <Button name="7" />
      <Button name="8" />
      <Button name="9" />
      <Button name="X" />
    </div>
    <div>
      <Button name="4" />
      <Button name="5" />
      <Button name="6" />
      <Button name="-" />
    </div>
    <div>
      <Button name="1" />
      <Button name="2" />
      <Button name="3" />
      <Button name="-" />
    </div>
    <div>
      <Button name="0" />
      <Button name="." />
      <Button name="=" />
    </div>
  </>
);

export default ButtonPanel;

// Group 1: AC, +/-, %, ÷
// Group 2: 7, 8, 9, X
// Group 3: 4, 5, 6, -
// Group 4: 1, 2, 3, +
// Group 5: 0, ., =
