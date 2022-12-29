import './App.css';
import Navbar from './Components/Navbar';
import Form from './Components/Form';
import Alert from './Components/Alert';
import { useState } from 'react';
//import About from './Components/About';


function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled","success");
      document.title = "Mwizard-Dark Mode";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled","success");
      document.title = "Mwizard-Light Mode";
    }
  }
  return (
    <>
<Navbar title="MwizarDon" About="About Us" Home="Home" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
<Form heading="Enter the text to Analyze" showAlert={showAlert} mode={mode}/>
{/* <About/> */}
</div>
    </>
  );
}

export default App;
