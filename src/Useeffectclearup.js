import React, { useState } from 'react'
import Counter from './Counter'
const Useeffectclearup = () => {
  const[state,setState]=useState(false)
  return (
    <div>
      <h1 onClick={()=>setState(!state)}>Show/Hide</h1>
      {state&&<Counter/>}
    </div>
  )
}

export default Useeffectclearup;

