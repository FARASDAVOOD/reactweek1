import React,{useRef, useRefll,useState} from 'react'

const UseReff = () => {
const inputRef=useRef();
 

  return (
    <div>
      <input type='text' ref={inputRef}/>
        
    
    </div>
  )
}

export default UseReff
