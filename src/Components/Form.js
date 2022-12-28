import React, {useState} from 'react'

export default function Form(props) {
    const handleUpClick = ()=>{
       // console.log("button was clicked" + text)
        let newText = text.toUpperCase();
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
        <buttom className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</buttom>
    </div>
    <div className="container my-3">
      <h1>Your text summary</h1>
      <p>622 words, 1730 characters</p>
    </div>
    </>

  )
}
