
import React from 'react'

function home() {
  
function clickMe(l){
  document.write("faras polich")
}
  
function double(f){
  document.write(f)
}

  return (
  
    <div>
  let f=<h1 style={{backgroundColor:"green",color:"white"}}>Learn React evetns</h1>
   <button onClick={clickMe}>Click Me</button>
   <h1 onDoubleClick={()=>double("faras")}>Double Click</h1>
    </div>
  )
}

export default home;
