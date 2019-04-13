import React, {useEffect, useState} from 'react'

export default function HooksLife() {
  const [count, setCount] = useState(0) 
  useEffect(() => {
    document.title = `its ${count} clicked`
  });
  return (
    <div>
      <h1>hooks</h1>
      <h5>{count}</h5>
      <button onClick={() => setCount(count+1)}>+</button>
    </div>
  )
}
