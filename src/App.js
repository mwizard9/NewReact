import './App.css';
import Navbar from './Components/Navbar';
import Form from './Components/Form';
import { useState } from 'react';
//import About from './Components/About';


function App() {
  const [mode, setMode] = useState('light');
  return (
    <>
<Navbar title="MwizarDon" About="About Us" Home="Home" mode={mode}/>
<div className="container my-3">
<Form heading="Enter the text to Analyze"/>
{/* <About/> */}
</div>
    </>
  );
}

export default App;
