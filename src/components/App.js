import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

const App = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = buttonName => {
    const results = calculate({ total, next, operation }, buttonName);

    setTotal(results.total);
    setNext(results.next);
    setOperation(results.operation);
  };
  return (
    <>
      <Display result={total || next} />
      <ButtonPanel clickHandler={handleClick} />
    </>
  );
};

export default App;
