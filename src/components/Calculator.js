import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';
import NavBar from './Navbar';
import '../App.css';

const Calculator = () => {
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
    <div className="main-container">
      <NavBar />
      <div className="calculator-container">
        <Display result={total || next} />
        <ButtonPanel clickHandler={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;
