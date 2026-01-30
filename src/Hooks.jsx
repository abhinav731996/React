import React from 'react'

function Hooks() {
    // let count = 1;      // variable ....state
    const [count, setCount] = useState(1)
    const handleCountClick = ()=>{
        count++;        // state change
        console.log(count);
        return count;
        
    }

  return (
    <div>
      React Hooks <br />
      Count = {count}
      <button onClick={handleCountClick}>Counter</button>
    </div>
  )
}

export default Hooks
