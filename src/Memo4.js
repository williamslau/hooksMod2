import React, { Component, memo } from 'react';
import ReactDOM from 'react-dom';

// const Foo = memo(function (props) {
//   console.log('Foo render');
//   return <div>{props.person.age}</div>
// });
function Foo(props) {
  console.log('Foo render');
  return <div>{props.person.age}</div>
}

class Demo extends Component {
  state = {
    count: 0,
    person: {
      age: 18,
    }
  }
  render() {
    const { person, count } = this.state;
    return (
      <div>
        {person.age}
        <button onClick={() => {
          person.age++;
          this.setState({
            person
          })
        }}>add</button>
        <Foo person={person} />
        {/* <button onClick={() => {
          person.age++;
          this.setState({
            count: count+1
          })
        }}>add</button>
        <Foo person={person} cb={() => { }} /> */}
      </div >
    )
  }
}

ReactDOM.render(<Demo />, document.querySelector('#root'));
