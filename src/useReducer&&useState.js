
import React from 'react';
import ReactDOM from 'react-dom';
let initalArg = 0;
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
function reducer(state, action) {
  switch (action.type) {
    case INCREMENT:
      return { number: state.number + 1 };
    case DECREMENT:
      return { number: state.number - 1 };
    default:
      return state;
  }
}
function init(initalArg) {
  return { number: initalArg };
}
/**
 * useReducer是useState的内部实现
 * 改变状态逻辑复杂的时候，或者下一个状态依赖前一个状态的时候可以使用useReducer
 */
let memoizedState;
function useReducer(reducer, initalArg, init) {
  let initialState = 0;
  if (typeof init != 'undefined') {
    initialState = init(initalArg);
  } else {
    initialState = initalArg;
  }
  memoizedState = memoizedState || initialState;
  function dispatch(action) {
    memoizedState = reducer(memoizedState, action);
    render();
  }
  return [memoizedState, dispatch];
}
function useState(initialState) {
  return useReducer((oldState, newState) => newState, initialState);
}
function Counter() {
  // state = { number: 0 };
  // let [state, dispatch] = useReducer(reducer, initalArg, init);
  let [number, setNumber] = useState(0);

  return (
    <>
      <p>{number}</p>
      <button onClick={() => setNumber(number + 1)}>+</button>
      <button onClick={() => setNumber(number - 1)}>-</button>
    </>
  )
};

function render() {
  ReactDOM.render(<Counter />, document.querySelector('#root'));
}
render();