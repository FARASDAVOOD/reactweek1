import React,{useEffect, useState} from 'react'
import Logged from './Logged'
import NotLogged from './notLogged'

const Main = ({isLoggedin}) => {
  const [count,setCount]=useState(0)
  useEffect(()=>{
    console.log("Mounting..."
    +count);
   return ()=>{console.log('clean up'+count );}
    }
  ,[count])
  
  return (
    <div>
      <button onClick={()=>{setCount(count+1)}}>increment</button>
     <h1>2nd Componet {count}</h1>
    </div>
  )
}

export default Main
