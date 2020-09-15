import React, { useMemo, useState } from 'react';
import ReactDOM from 'react-dom';
function Demo() {
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(10);
  const getNum = useMemo(() => {
    return count + count2;
  }, [count])

  const double = useMemo(() => {
    return count * 2
  }, [count === 3]);
  return <div>
    {getNum}
    <button onClick={() => setCount(count + 1)}>count</button>
    <button onClick={() => setCount2(count2 + 1)}>count2</button>
  </div>
}

ReactDOM.render(<Demo />, document.querySelector('#root'));
