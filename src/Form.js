import React, { useRef, useState } from 'react'

const Form = () => {
    const[input,setInput]=useState({
      name:'',
      firstName:''
    })
     const inpRef=useRef('')    
  const handleChange=(e)=>{
    const {name,value}=e.target
    setInput({
      ...input,
      [name]:value
    });
  }

const handleSubmit=(e)=>{
e.preventDefault()
if (input.firstName === '' || input.name.length < 5) {
  alert('Please fill');
}else{
  alert('success')
}

setInput({
  name:'',
  firstName:''
})

}
 
const handleSub=()=>{
  inpRef.current.innerHTML=`This guy name is ${input.name}`
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label>name:</label>
     <input
      type='text'
      name='name'
     
      value={input.name}
      onChange={handleChange}/>
      <h1>{input.name}</h1>
      <div>
      <label>First Name:</label>
     <input
      type='text'
      name="firstName"
      
      value={input.firstName}
      onChange={handleChange}/>
      <h1>{input.firstName}</h1>
      <button type='submit' onClick={handleSub}>Submit</button>
      <div ref={inpRef}></div>
      </div>
      </form>
    </div>
  )
}

export default Form;

