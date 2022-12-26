import logo from './logo.svg';
import './App.css';

let name="Manish";
function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    <div className="container">
      <h1>Hello {name}</h1>
     
    </div>
    </>
  );
}

export default App;
