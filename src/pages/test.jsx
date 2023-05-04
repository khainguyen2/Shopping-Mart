import React, { useState, useEffect } from 'react';

function Counter(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted');
    return () => {
      console.log('Component will unmount');
    };
  }, []);

  useEffect(() => {
    console.log('Component updated');
    if (count >= 10) {
      props.onMaxCountReached();
    }
  }, [count]);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  console.log('Component rendered');

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleButtonClick}>Increment</button>
    </div>
  );
}

export default Counter;