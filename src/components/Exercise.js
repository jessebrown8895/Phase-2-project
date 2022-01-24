import React from "react";
import { useLocation, Link } from "react-router-dom";
const Exercise = () => {
  const location = useLocation();
  
  return (
    <div>
      <Link to="/">Back to home</Link>
      {location.state.data.map((exercise) => (
        <div>
          <h2>{exercise.name}</h2>
          <p>{exercise.description}</p>
          <h3>{exercise.reps} </h3>
          <h3>{exercise.sets}</h3>
        </div>
      ))}
    </div>
  );
};

export default Exercise;
