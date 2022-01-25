import React from "react";
import { useLocation } from "react-router-dom";
import Button from "./Button";
function Muscles() {
  const location = useLocation();
  console.log(location);
  const allMuscles = location.state.data;

  console.log(allMuscles);

  const muscleNames = allMuscles.map((workout) => workout.muscle);
  const uniqueNames = Array.from(new Set(muscleNames));

  return (
    <div>
      {uniqueNames.map((name) => (
        <Button
          data={allMuscles}
          path={`${location.pathname}/${name}/exercise`}
        >
          {name} exercises
        </Button>
      ))}
    </div>
  );
}

export default Muscles;
