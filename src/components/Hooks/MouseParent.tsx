import React, { useState } from 'react'
import MouseMoveClass from './MouseMoveClass'
import MouseMoveHook from './MouseMoveHook'

const MouseParent = () => {

    const [toggle, setToggle] = useState(true)

  return (
    <div>
        {toggle ? <MouseMoveHook /> : <h1>Something else...</h1>}

        <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </div>
  )
}

export default MouseParent