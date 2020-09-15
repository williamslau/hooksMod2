import React, { useState, useMemo, memo, useCallback } from 'react';
import ReactDOM from 'react-dom';

const Counter = memo((props) => {
  console.log('从新渲染');
  return (<div>{props.double}</div>)
});
/**
 * useMemo返回一个值
 * useCallback返回一个函数
 * useCallback(fn) === useMemo(()=>fn);
 * useCallback不会阻止创建新的函数，但这个函数不一定会被返回
 * 很可能这个函数直接抛弃不用了
 * 解决的问题是传入子组件的函数过度变化，导致子组件过度渲染
 * 
 * useMemo useCallback仅仅是一种优化性能的方法，当依赖变化时，useMemo,useCallback一定从新执行，即使依赖不变化，不能保证不从新执行，也可能从新执行，也可能不执行，这是考虑内存优化的结果
 * 
 * 仅仅把它当作优化代码的手段，不可以依赖他是否触发从新渲染。（react没有打包票）和defauleUpdate一样
 * 
 */
const Demo = () => {
  const [count, setCount] = useState(0);
  const [fnCount, setFnCount] = useState(0);
  const double = useMemo(() => {
    return count * 2
  }, [count === 3]); // 变成false在多计算一次才会消除
  const CounterFn = () => {
    console.log('随便写点代码，不会打印');
  };
  // const CounterFn = useMemo(() => {
  //   return () => {
  //     console.log('随便写点代码，不会打印');
  //   }
  // }, []);
  // const CounterFn = useCallback(() => {
  //   console.log('随便写点代码，不会打印');
  //   setFnCount(fnCount + 1);
  // }, [fnCount]);
  // 另一种useState的用法
  // const CounterFn = useCallback(() => {
  //   console.log('随便写点代码，不会打印');
  //   setFnCount((fnCount) => fnCount + 1);
  // }, []);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>btn</button>
      <div>count{count}</div>
      <Counter double={double} fn={CounterFn}></Counter>
    </div>
  )
}

ReactDOM.render(<Demo />, document.querySelector('#root'));