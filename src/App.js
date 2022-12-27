import './App.css';
import Navbar from './Components/Navbar';
import Form from './Components/Form';


function App() {
  return (
    <>
<Navbar title="MwizarDon" About="About Us" Home="Home"/>
<div className="container">
<Form heading="Enter the text to Analyze"/>
</div>
    </>
  );
}

export default App;
