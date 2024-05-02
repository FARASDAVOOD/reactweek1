import React,{useState} from 'react'

function Demo(){
  let [style,coundState]=useState({backgroundColor:"",num:0});

  function change(){
    if(style.num%2==0){
      
    coundState({backgroundColor:"green",num:style.num+1})

}else{
  coundState({backgroundColor:"white",num:style.num+1})

}
  }
    
return (
  <div style={style}>
    <h1>machaneee evide

      njan  and ente age :  </h1>
      <button onClick={change}>Switch Theme </button>
  </div>

)
}
export default Demo;
