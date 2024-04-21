import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    // TODO
  }

  return (
    <>
      <div className="counter">count is {count}</div>
      <br />
      <button aria-label="increase" onClick={handleClick}>➕</button>
    </>
  );
}

export default Counter;
