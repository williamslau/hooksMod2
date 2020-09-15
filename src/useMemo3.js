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
  // const CounterFn = () => {
  //   console.log('随便写点代码，不会打印');
  // };
  const CounterFn = useMemo(() => {
    return () => {
      console.log('随便写点代码，不会打印');
    }
  }, []);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>btn</button>
      <div>count{count}</div>
      <Counter double={double} fn={CounterFn}></Counter>
    </div>
  )
}

ReactDOM.render(<Demo />, document.querySelector('#root'));