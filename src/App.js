import './App.css';
import {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Exercise from './components/Exercise'
import Muscles from './components/Muscles'
import Form from './components/Form'
function App() {

  const [routines, setRoutines] = useState([]);

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
      <Routes>
        <Route exact path="/" element={<Home routines={routines} />} />
        <Route exact path="/muscle/:workout" element={<Muscles />} />
        <Route exact path="/muscle/:workout/:muscle/exercise" element={<Exercise />} />
        <Route exact path="/exercises/new" element={<Form setRoutines={setRoutines}/>} />
      </Routes>
    </div>
  );
}

export default App;
