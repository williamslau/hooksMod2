import React, { useState, useMemo, memo, useCallback } from 'react';
import ReactDOM from 'react-dom';

const Counter = memo((props) => {
  console.log('从新渲染');
  return (<div>{props.double}</div>)
});
const Demo = () => {
  const [count, setCount] = useState(0);
  const double = useMemo(() => {
    return count * 2
  }, [count === 3]); // 变成false在多计算一次才会消除

  // 不要循环依赖（性能吃不消）
  // const half = useMemo(() => {
  //     console.log('half'); // useMemo可以监听useMemo
  // }, [double])
  const addFn = () => {
    setCount(count + 1);
  }
  return (
    <div>
      <button onClick={addFn}>btn</button>
      <div>count{count}</div>
      <div>double{double}</div>
      <Counter double={double}></Counter>
    </div>
  )
}

ReactDOM.render(<Demo />, document.querySelector('#root'));