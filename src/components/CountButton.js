import React from 'react'

export default function CountButton({count,setCount}) {
  function handleInc() {
    setCount(count+1)
  }
  return (
    <div>
      <button onClick={handleInc}>+</button>
    </div>
  )
}
