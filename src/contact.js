import React from "react";
function Contact(props){
    console.log(props)
    var nm=props.name.toUpperCase()
  var st={color:"green",textAlign:"center" }
    
    return (
        <div style={props.st}  className="test">
            <p >{props.id[1]}</p>
            <h1 >{nm} contact page</h1>
            <label >Email ID</label>
            <input type="text" />
            <label >Message</label>
            <textarea></textarea>
            <button>Send</button>
        </div>
    )

}

export default Contact;