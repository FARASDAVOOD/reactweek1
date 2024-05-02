import React,{useRef,useState} from 'react'

const Fetchevent = () => {
    let look=useRef();
const [playerS,setplayerS]=useState(false);
const player=()=>{
    if(playerS===false){
        setplayerS(true);
    }else{
        setplayerS(false);
    }
     }
  return (
    <div>
     <h1 ref={look}>poli muthwee</h1> 
     <button onClick={player}>click</button>
    </div>
  )
}

export default Fetchevent;


