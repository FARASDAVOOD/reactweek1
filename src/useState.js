import React,{useState} from 'react'

function UseState(){
  function click(evt){
   
    console.log("i am being clicked",evt.target.value);

  }
  return( 
    <>
    <a href='#test' onClick={click}>click here</a>
    </>
   
  )
}
export default UseState;
