import React from 'react';
import ReactDOM from 'react-dom';
let memoizedState = [];
let index = 0;
function useState(initialState) {
  memoizedState[index] = memoizedState[index] || initialState;
  let currentIndex = index;
  function setState(newState) {
    memoizedState[currentIndex] = newState;
    render();
  }
  return [memoizedState[index++], setState];
}
function Counter() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState('时间戳');
  return (
    <>
      <p>{number} : {name}</p>
      <button onClick={() => setNumber(number + 1)}>+</button>
      <button onClick={() => setName(`时间戳${Date.now()}`)}>改名称</button>
    </>
  )
};

function render() {
  index = 0;
  ReactDOM.render(<Counter />, document.querySelector('#root'));
}
render();