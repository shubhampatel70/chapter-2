import React, {useState} from 'react'

export default function Event() {

    let initialCount = 0;

    const [counter, setCounter] = useState(0);

    const handleReset = () => {
        setCounter(initialCount);
    };

  return (
    <>
        <h1 style={{ color: 'crimson' }}>Task-d</h1>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
        <p>Count: {counter}</p>
    </>
  )
}
