import React, {useState} from 'react'

export default function Form(props) {
    const handleUpClick = ()=>{
       // console.log("button was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","success")
    }
    const handleLwClick = ()=>{
      // console.log("button was clicked" + text)
       let newText = text.toLowerCase();
       setText(newText)
       props.showAlert("Converted to Lowerercase","success")
   }

   const handleClClick = ()=>{
    // console.log("button was clicked" + text)
     let newText = '';
     setText(newText)
     props.showAlert("clear text","success")
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
      props.showAlert("Copy To Clipboard","success")
    }

    const handleExtraSpaces = ()=> {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Remove Extra Spaces","success")
      }
    

    const[text, setText] = useState('');
    
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <buttom className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</buttom>
        <buttom className="btn btn-primary mx-1 my-1" onClick={handleLwClick}>Convert to Lowercase</buttom>
        <buttom className="btn btn-primary mx-1 my-1" onClick={handleClClick}>Clear</buttom>
        <buttom className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</buttom>
        <buttom className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</buttom>
        
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
      <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
      <h2>preview</h2>
      <p>{text.length>0?text:"Enter something in textbox to preview it here"}</p>
    </div>
    </>

  )
}
