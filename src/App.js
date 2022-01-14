import './App.css';
import {useState, useEffect} from 'react'
import Home from './components/Home';
import {Routes, Route} from 'react-router-dom'
import Muscles from './components/Muscles';
import Exercise from './components/Exercise';
import Form from './components/Form'
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
      <Form setRoutines={setRoutines}/>
      <Routes>
        <Route exact path="/" element={<Home routines={routines} />} />
        <Route exact path="/:id/muscles" element={<Muscles />} />
        <Route
          exact
          path="/:id/muscles/:muscle/exercise"
          element={<Exercise />}
        />
      </Routes>
    </div>
  );
}

export default App;
