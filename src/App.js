import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import Home from './components/Home';
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
      <Home routines={routines}/>
     
    </div>
  );
}

export default App;
