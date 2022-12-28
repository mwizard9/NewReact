import React, {useState} from 'react'

export default function Form(props) {
    const handleUpClick = ()=>{
       // console.log("button was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLwClick = ()=>{
      // console.log("button was clicked" + text)
       let newText = text.toLowerCase();
       setText(newText)
   }
    const handleOnChange = (event)=>{
       // console.log("On change")
        setText(event.target.value)
    }
    

    const[text, setText] = useState('Enter text here');
    
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
        </div>
        <buttom className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</buttom>
        <buttom className="btn btn-primary mx-1" onClick={handleLwClick}>Convert to Lowercase</buttom>
    </div>
    <div className="container my-3">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words, {text.length} characters</p>
      <p>{0.008* text.split(" ").length} minutes to read</p>
      <h2>preview</h2>
      <p>{text}</p>
    </div>
    </>

  )
}
