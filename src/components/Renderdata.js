import React, { useState } from "react";

export const Renderdata = ({ exercise }) => {
  const [repCount, setCount] = useState(exercise.reps);
  const [setCounts, setSetCounts] = useState(exercise.reps);

  const handleSetCount = (e) => {
       e.target.name === "+" ? setSetCounts((currentCount) => currentCount + 1)
       : setSetCounts((currentCount) => currentCount - 1);
  };
  const handleCount = (e) => {
    e.target.name === "+" ? setCount((currentCount) => currentCount + 1)
    : setCount((currentCount) => currentCount - 1);
    };
  
  return (
    <div id={exercise.id}>
      <div className="container">
        <h2>{exercise.name}</h2>
        <p>{exercise.description}</p>
        <h3>{" "}reps: {repCount}{" "}<button name="+" onClick={handleCount}>+</button>{" "}
          <button name="-" onClick={handleCount}>-</button>
        </h3>
        <h3>Sets: {setCounts}{" "}<button name="+" onClick={handleSetCount}>+</button>{" "}
          <button name="-" onClick={handleSetCount}>-</button>
        </h3>
      </div>
    </div>
  );
};
