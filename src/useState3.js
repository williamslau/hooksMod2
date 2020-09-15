import React from 'react';
import ReactDOM from 'react-dom';
let firstWorkInProgressHooks = {
  memoizedState: null,
  next: null,
}
// {值：引用地址（指向下一个链）}
// let thirdHooks = {
//   state:3,
//   next:null,
// }
// let nextHooks = {
//   state: 2,
//   next: thirdHooks,
// };
// let firstHooks = {
//   state: 1,
//   next: nextHooks
// };
let workInProgressHook = firstWorkInProgressHooks;
function useState(initialState) {
  let currentHook = workInProgressHook.next ? workInProgressHook.next : { memoizedState: initialState, next: null };
  function setState(newState) {
    currentHook.memoizedState = newState;
    render();
  }
  if (workInProgressHook.next) {
    workInProgressHook = workInProgressHook.next;
  } else {

    workInProgressHook.next = currentHook;
    workInProgressHook = currentHook;
  }
  return [currentHook.memoizedState, setState];
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
  workInProgressHook = firstWorkInProgressHooks;
  ReactDOM.render(<Counter />, document.querySelector('#root'));
}
render();