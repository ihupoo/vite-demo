import React, { useState } from 'react'


/**
 * Blend two colrs teher.
 * @param {
 */
function Counter(props) {
  const [count, setCount] = useState(0)


  return (
    <button onClick={() => setCount((count) => count + 1)}>
      Couner: {count}

	  {props.children}
    </button>
  )
}

export { Counter }
