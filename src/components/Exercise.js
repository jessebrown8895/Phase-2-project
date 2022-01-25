import React from "react";
import { useLocation, Link } from "react-router-dom";
import '../components/exercise.css'
import { Renderdata } from "./Renderdata";
const Exercise = () => {
  const location = useLocation();
  
  return (
    <div>
      <Link to="/">Back to home</Link>
      {location.state.data.map((exercise) => (
        <Renderdata exercise={exercise}/>
      ))}
    </div>
  );
};

export default Exercise;
