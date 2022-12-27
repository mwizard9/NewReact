import React, {useState} from 'react'

export default function Form(props) {
    const handleUpClick = ()=>{
        console.log("button was clicked")
        setText("You have clicked on handleUpClick")
    }
    const handleOnChange = (event)=>{
        console.log("On change")
        setText(event.target.value)
    }
    

    const[text, setText] = useState('Enter text here');
    
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
        </div>
        <buttom className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</buttom>
    </div>
  )
}
