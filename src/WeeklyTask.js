import React, { useState } from 'react'
import {Button,Container,Navbar,Nav} from 'react-bootstrap';

const Week = () => {

  const[value,setValue]=useState([])

  const[newValue,setNawValue]=useState('')


  const addButton=()=>{
    if (newValue.trim() !== '') {
      setValue([...value, newValue]);
      setNawValue(''); // Clear the input field
    } else {
      alert('Task cannot be empty');
    }
  };
  
  
  const deleteValue=(index)=>{
    setValue(value.filter((value,int)=>{
      return int !== index
    }))

  }

  return (
    <div>
       <div>
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
       </div>




      <div  style={{marginLeft:"200px"}}>


        <input type='text' placeholder='item'  value={newValue} onChange={(e)=>setNawValue(e.target.value)}/>


        <Button variant="primary" onClick={addButton}>Add</Button>
      </div>
      <div>
       <ul  style={{marginLeft:"200px"}}>
        {value.map((value, index) => (
          <li style={{marginTop:"10px"}} key={index}>{value}

            <Button variant="success"  style={{marginLeft:"30px"}} onClick={()=>deleteValue(index)}>Remove</Button>
           
          </li>
        ))}
       </ul>

      </div>


           
    </div>
  )
}

export default Week;
