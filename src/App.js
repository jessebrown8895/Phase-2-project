import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'

function App() {
  const [routines, setRoutines] = useState({});
 
  useEffect(() => {
    fetchRoutines()
  }, [])
  
  function fetchRoutines() {
    fetch("http://localhost:3000/routines")
    .then(resp=> resp.json())
    .then(data => setRoutines(data))
  }
  return (
    <div className="App">
      <h1>Hello world</h1>
     
    </div>
  );
}

export default App;
