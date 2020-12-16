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
      operation: null, // eslint-disable-line react/no-unused-state
    };
  }

  handleClick(buttonName) {
    const { total, next, operation } = this.state;
    const results = calculate({ total, next, operation }, buttonName);
    this.setState({
      total: results.total,
      next: results.next,
      operation: results.operation,
    });
  }

  render() {
    const { total, next } = this.state;
    return (
      <>
        <Display result={total || next} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}
App.defaultProps = {
  total: '999',
  next: '1',
  operation: '+',
};

export default App;
