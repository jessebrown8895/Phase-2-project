import React from "react";
import { useLocation, Link } from "react-router-dom";
import '../components/exercise.css'
const Exercise = () => {
  const location = useLocation();

  return (
    <div>
      <Link to="/">Back to home</Link>
      {location.state.data.map((exercise) => (
        <div className="container">
          <h2>{exercise.name}</h2>
          <p>{exercise.description}</p>
          <h3>Reps: {exercise.reps}</h3>
          <h3>Sets: {exercise.sets}</h3>
        </div>
      ))}
    </div>
  );
};

export default Exercise;
