import React, { useState } from 'react'
import Child from './Child'

const Parent:React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(true);
  return (
    <div>
      <h2>Parent</h2>
      { toggle ? <Child /> : <h4>Something else...</h4> }
      <button type='button' onClick={()=>setToggle(!toggle)}>Toggle</button>
    </div>
  )
}

export default Parent