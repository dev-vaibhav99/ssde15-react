import React, { useState } from 'react'
import Child from './Clild'

const Parent = () => {

    function greet(param: string){
        console.log("Message form child: ", param);
    }

  return (
    <Child props={greet}/>
  )
}

export default Parent