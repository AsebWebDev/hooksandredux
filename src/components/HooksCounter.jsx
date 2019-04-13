import React, {useState} from 'react';

const HooksCounter = () => {

  const [count,setCountUp] = useState(0) // initial State 

  return (
    <div>
        <h1>I am a hooks counter.</h1>
        <h1>{count}</h1>
        <button onClick={() => setCountUp(count+1)}>+</button>
    </div>
  )
}

export default HooksCounter;