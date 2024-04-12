import { useState } from 'react';

function Fetch({ url }: { url: string }) {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [greeting, setGreeting] = useState('');

  const fetchGreeting = (url: string) => {
    setButtonClicked(true);
    const randomTime = Math.random() * 3000;
    setTimeout(() => setGreeting('hello there'), randomTime);
  };

  return (
    <>
      <button onClick={() => fetchGreeting(url)} disabled={buttonClicked}>
        Load Greeting
      </button>
      {greeting && <h1>{greeting}</h1>}
    </>
  );
}

export default Fetch;
