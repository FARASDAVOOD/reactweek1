import React, { useEffect, useState } from 'react'

const Use = () => {
  const[posts,setPosts]=useState([]);
  const[count,setCount]=useState(0);
  useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(posts=>setPosts(posts.splice(0,10)))
    console.log(posts);
  },[count])



  return (
    <div >
      <h1 style={{color:"white",backgroundColor:"blue",textAlign:"center"}}>Fetch Api Data</h1>
      
      {posts.map((post)=>
      <div key={post.id} style={{backgroundColor:"black"}}>
        <h1 style={{textAlign:"center",color:"white"}}><span style={{color:"green"}}>{post.id}</span><br/> {post.title}</h1>
        <p style={{color:"lightblue",textAlign:"center"}}>{post.body}</p></div>
      )}
      <button onClick={()=>setCount(count+1)}>update</button>
    </div>
  )
}

export default Use
