import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Foo extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.name === this.props.name) {
      return false;
    }
    return true;
  }
  render() {
    console.log('Foo render');
    return null;
  }
}
class Demo extends Component {
  state = {
    count: 0,
    person: {
      age: 18
    }
  }
  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>add</button>
        <Foo />
      </div >
    )
  }
}

ReactDOM.render(<Demo />, document.querySelector('#root'));
