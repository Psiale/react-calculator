import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick(buttonName) {
    const { total, next, operation } = this.state;
    const calculator = {
      total,
      next,
      operation,
    };

    const calculated = calculate(calculator, buttonName);

    this.setState({
      total: calculated.total,
      next: calculated.next,
      operation: calculated.operation,
    });
  }

  render() {
    return (
      <>
        <Display result="999" />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}
App.defaultProps = {
  total: null,
  next: null,
  operation: null,
};

export default App;
