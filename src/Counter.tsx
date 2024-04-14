import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    // TODO
  }

  return (
    <>
      <span>count is {count}</span>
      <br />
      <button aria-label="increase" onClick={handleClick}>➕</button>
    </>
  );
}

export default Counter;
