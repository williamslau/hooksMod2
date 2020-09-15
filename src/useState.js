import React from 'react';
import ReactDOM from 'react-dom';
/**
 * - 不能变更顺序
   - 不能两次渲染组件次数不一样(固定的次数和数量)
   - 所以useState必须在组件的顶层使用，不能用在条件语句中，循环中使用
   - useState(()=>{
      return props.defaultCount || 0
   })//默认值可以传函数只在第一次渲染时执行后面不执行
 */
let memoizedState;
function useState(initialState) {
  memoizedState = memoizedState || initialState;
  function setState(newState){
    memoizedState = newState;
    render();
  }
  return [memoizedState, setState];
}
function Counter() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <p>{number}</p>
      <button onClick={() => setNumber(number + 1)}>+</button>
    </>
  )
};

function render() {
  ReactDOM.render(<Counter />, document.querySelector('#root'));
}
render();