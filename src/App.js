import './App.css';
import Navbar from './Components/Navbar';
import Form from './Components/Form';
import About from './Components/About';


function App() {
  return (
    <>
<Navbar title="MwizarDon" About="About Us" Home="Home"/>
<div className="container my-3">
<Form heading="Enter the text to Analyze"/>
<About/>
</div>
    </>
  );
}

export default App;
