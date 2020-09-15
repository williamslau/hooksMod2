import React, { Component, PureComponent } from 'react';
import ReactDOM from 'react-dom';

class Foo extends PureComponent {
  render() {
    console.log('Foo render');
    return null;
  }
}
class Demo extends Component {
  state = {
    count: 0
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
