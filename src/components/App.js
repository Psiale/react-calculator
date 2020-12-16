import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

const App = ({ handleClick }) => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  return (
    <>
      <Display result={total || next} />
      <ButtonPanel clickHandler={handleClick} />
    </>
  );
};

App.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default App;
