import React, { useState } from "react";

function Task3() {
  const [count, setCount] = useState(0);

  const increment = () => {            
    if (count < 10) {
      setCount(count + 1); // stop at 10 
      console.log("increment" + count);
    } else {
      setCount(count);
      console.log("last value: " + count);
    }
  };

  const decrement = () => {
    if (count > 0) {
    setCount(count - 1);// stop at 0
    }
    else{
        setCount(count);
    };
  };
  return (
    <div>
      <h3>React Hooks</h3>
      <p>Count = {count}</p>
      <button onClick={increment}>Counter +</button>{" "}
      <button onClick={decrement}>Counter -</button>
    </div>
  );
}

export default Task3;
