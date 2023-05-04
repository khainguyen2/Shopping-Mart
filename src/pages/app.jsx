import React, { useState } from 'react';
import Counter from './test';

function App() {
  const [showCounter, setShowCounter] = useState(true);

  function handleMaxCountReached(){
    alert('Max count reached');
    setShowCounter(false);
  };

  return (
    <div>
      <Counter onMaxCountReached={handleMaxCountReached()}></Counter>
    </div>
  );
}

export default App;
