import React, { Component, PureComponent } from 'react';
import ReactDOM from 'react-dom';

// 局限性：值类型的发生变化才触发渲染（第一级）
// 传入内联函数每次都会触发渲染
class Foo extends PureComponent {
  render() {
    console.log('Foo render');
    return <div>
      {this.props.person.age}
    </div>;
  }
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
        <Foo person={person}/>
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
