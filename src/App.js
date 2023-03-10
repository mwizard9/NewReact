import './App.css';
import Navbar from './Components/Navbar';
import Form from './Components/Form';
import Alert from './Components/Alert';
import { useState } from 'react';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


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

  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }

  const toggleMode = (cls)=>{
    console.log();
    document.body.classList.add('bg-'+cls)
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
<Router>
<Navbar title="MwizarDon" About="About Us" Home="Home" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>

<div className="container my-3">
<Routes>
  <Route exact path="/about" element={<About />}>
  </Route>
  <Route exact path="/" element={<Form heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
  </Route>
</Routes>
</div>
</Router>
</>
  );
}

export default App;
