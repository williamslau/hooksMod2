import React, { useState} from 'react';
import ReactDOM from 'react-dom';
/**
 * 在函数主题中，不能写具有副作用的逻辑，订阅，定时器修改DOM
 * useEffect给函数组件添加了操作副作用的方法
 * 相当于 DidMount DidUpdate WillUnmount
 * 副作用时机 Mount之后
            Update之后
            Unmount之前
   每次渲染都会执行render
    第一次渲染相当于componentDidMount
    后面的渲染都相当于componentDidUpdate
 */
let lastDependencies;
function useEffect(callback, dependencies) {
  if (!dependencies) return callback();
  let changed = lastDependencies ? !dependencies.every((item, index) => item === lastDependencies[index]) : true;
  if (changed){
    callback();
    lastDependencies = dependencies;
  }
};
function Counter() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState('时间戳');
  useEffect(() => {
    console.log('number', number);
  }, [number]);
  return (
    <>
      <p>{number} : {name}</p>
      <button onClick={() => setNumber(number + 1)}>+</button>
      <button onClick={() => setName(`时间戳${Date.now()}`)}>改名称</button>
    </>
  )
};

function render() {
  ReactDOM.render(<Counter />, document.querySelector('#root'));
}
render();