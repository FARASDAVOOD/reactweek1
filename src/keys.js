import React,{useState} from 'react'
const products=[
{name:"Laptop",brand:"Dell",qty:1,id:1},
{name:"Laptop",brand:"HP",qty:1,id:2},
{name:"Laptop",brand:"Lenovo",qty:1,id:3}
]




const Keys = () => {
  const[items,setItem]=useState(products)

const changeQty=(id)=>{

 const newItem=items.map((item)=>
  item.id===id?{...item,qty:item.qty+1}:item
 );
 setItem(newItem)
}
  return (
    <div>
      {items.map((product)=>(
        <div key={product.id} style={{color:"white",backgroundColor:"green",textAlign:"center"
        }}>
      <h1>{product.name}</h1>
      <h3>Barnd:{product.brand}</h3>
      <h4>Qty:{product.qty}</h4>
      <button onClick={()=>changeQty(product.id)}>+</button></div>
      ))}
      
    </div>
  )
}

export default Keys;
