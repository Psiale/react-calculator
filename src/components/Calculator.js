import React, { useState } from 'react';
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
    <div className="home-container">
      <NavBar />
      <div className="calculator-container">
        <div className="calculator-title">
          <h3> Let us do some math! </h3>

        </div>
        <div className="calculator">
          <Display result={total || next} />
          <ButtonPanel clickHandler={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
