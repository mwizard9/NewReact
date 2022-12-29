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

   const handleClClick = ()=>{
    // console.log("button was clicked" + text)
     let newText = '';
     setText(newText)
 }
    const handleOnChange = (event)=>{
       // console.log("On change")
        setText(event.target.value)
    }

    const handleCopy = ()=> {
      let text = document.getElementById("myBox");
      text.select();
      text.setSelectionRange(0,9999);
      navigator.clipboard.writeText(text.value);
    }

   
    

    const[text, setText] = useState('');
    
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <buttom className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</buttom>
        <buttom className="btn btn-primary mx-1" onClick={handleLwClick}>Convert to Lowercase</buttom>
        <buttom className="btn btn-primary mx-1" onClick={handleClClick}>Clear</buttom>
        <buttom className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</buttom>
        
    </div>
    <div className="container my-3">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words, {text.length} characters</p>
      <p>{0.008* text.split(" ").length} minutes to read</p>
      <h2>preview</h2>
      <p>{text}</p>
    </div>
    </>

  )
}
