import React, { useEffect, useRef } from 'react'

const FocusInput:React.FC = () => {

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(()=>{
    inputRef.current?.focus();
  }, [])

  return (
    <div>Email address: <input 
    ref={inputRef}
     type="text" />
      Password: <input type="password" name="" id="" />
    </div>
  )
}

export default FocusInput