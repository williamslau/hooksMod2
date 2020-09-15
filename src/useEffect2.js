import React from 'react';
import ReactDOM from 'react-dom';
/**
 * 在函数主题中，不能写具有副作用的逻辑，订阅，定时器修改DOM
 * useEffect给函数组件添加了操作副作用的方法
 * 相当于 DidMount DidUpdate WillUnmount
 * 
 */
// useState
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
// useEffect
function useEffect(callback, dependencies) {
  if (!dependencies) {
    index++;
    return callback();
  }
  let lastDependencies = memoizedState[index];
  let changed = lastDependencies ? !dependencies.every((item, index) => item === lastDependencies[index]) : true;
  if (changed) {
    callback();
    memoizedState[index] = dependencies;
  }
  index++;
};
function Counter() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState('时间戳');
  useEffect(() => {
    console.log('number', number);
  }, [number]);

  useEffect(() => {
    console.log('number2', number);
  }, [number, name]);

  useEffect(() => {
    console.log('number3', number);
  }, []);
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