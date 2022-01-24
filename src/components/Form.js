
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = ({ setRoutines }) => {
  const [newExercise, setNewExercise] = useState({
    movement: "",
    name: "",
    muscle: "",
    description: "",
    reps: "",
    sets: "",
  });
  const history = useNavigate();
  const handleChange = (e) => {
    setNewExercise({ ...newExercise, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      'http://localhost:3000/routines',
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newExercise),
      }
    )
      .then((resp) => resp.json())
      .then((data) =>
        setRoutines((currentworkouts) => [...currentworkouts, data])
      );
    setNewExercise({
      name: "",
      muscle: "",
      description: "",
      reps: "",
      sets: "",
    });
    history("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Create Account</h1>

        <label>
          Movement:
          <select name="movement" onChange={handleChange} required>
            <option value="">select one</option>
            <option value="push">push</option>
            <option value="pull">pull</option>
            <option value="legs">legs</option>
          </select>
        </label>

        <label>
          Name:
          <input
            name="name"
            type="text"
            value={newExercise.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Muscle:
          <select name="movement" onChange={handleChange} required>
            <option value="">select one</option>
            <option value="push">push</option>
            <option value="pull">pull</option>
            <option value="legs">legs</option>
          </select>
        </label>
        <br />
        <label>
          Description:
          <input
            name="description"
            type="text"
            value={newExercise.description}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Reps:
          <input
            name="reps"
            type="text"
            value={newExercise.reps}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Sets:
          <input
            name="sets"
            type="text"
            value={newExercise.sets}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};
export default Form;
