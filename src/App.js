import './App.css';
import {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Exercise from './components/Exercise'
import Muscles from './components/Muscles'
function App() {

  const [routines, setRoutines] = useState({});
  
  useEffect(() => {
    fetchRoutines()
  }, [])
  console.log(routines)
  function fetchRoutines() {
    fetch("http://localhost:3000/routines")
    .then(resp=> resp.json())
    .then(data => setRoutines(data))
  }
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home routines={routines} />} />
        <Route exact path="/muscle/:workout" element={<Muscles />} />
        <Route exact path="/muscle/exercise" element={<Exercise />} />
      </Routes>
    </div>
  );
}

export default App;
