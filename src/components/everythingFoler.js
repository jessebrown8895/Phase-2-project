// button
// import React from "react";
// import { useNavigate } from "react-router-dom";

// export const Button = (props) => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate(props.path, { state: { data: props.data } });
//   };
//   return (
//     <button onClick={handleClick} style={{ backgroundColor: props.color }}>
//       {props.children}
//     </button>
//   );
// };
//Home

// import React from 'react'
// import { Button } from './Button';

// const Home = (props) => {
    
//     const legs = props.routines.legs 
//     const push = props.routines.push
//     const pull = props.routines.pull
//     return (
//       <div>
//         <Button path="push/muscles" data={push}  color="red">push routine</Button>
//         <Button path="pull/muscles" data={pull} color="green">pull routine</Button>
//         <Button path="legs/muscles" data={legs}  color="purple">legs routine </Button>
//       </div>
//     );
// }

// export default Home


//Exercise
// import React from "react";
// import { useLocation } from "react-router-dom";
// const Exercise = () => {
//   const location = useLocation();
//   console.log(location);
//   return (
//     <div>
//       {location.state.data.map((exercise) => (
//         <div>
//           <h2>{exercise.name}</h2>
//           <p>{exercise.description}</p>
//           <h3>{exercise.reps} </h3>
//           <h3>{exercise.sets}</h3>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Exercise;

//Form
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Form = ({ setRoutines }) => {
//   const [newExercise, setNewExercise] = useState({
//     movement: "",
//     name: "",
//     muscle: "",
//     description: "",
//     reps: "",
//     sets: "",
//   });
//   const history = useNavigate();
//   const handleChange = (e) => {
//     setNewExercise({ ...newExercise, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetch(
//       `http://localhost:3000/routines/${
//         newExercise.movement
//       }/muscle/${newExercise.muscle.toLowerCase()}`,
//       {
//         method: "post",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newExercise),
//       }
//     )
//       .then((resp) => resp.json())
//       .then((data) =>
//         setRoutines((currentworkouts) => [...currentworkouts, data])
//       );
//     setNewExercise({
//       name: "",
//       muscle: "",
//       description: "",
//       reps: "",
//       sets: "",
//     });
//     history("/");
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <h1>Create Account</h1>

//         <label>
//           Movement:
//           <select name="movement" onChange={handleChange} required>
//             <option value="">select one</option>
//             <option value="push">push</option>
//             <option value="pull">pull</option>
//             <option value="legs">legs</option>
//           </select>
//         </label>

//         <label>
//           Name:
//           <input
//             name="name"
//             type="text"
//             value={newExercise.name}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Muscle:
//           <input
//             name="muscle"
//             type="text"
//             value={newExercise.muscle}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Description:
//           <input
//             name="description"
//             type="text"
//             value={newExercise.description}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Reps:
//           <input
//             name="reps"
//             type="text"
//             value={newExercise.reps}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Sets:
//           <input
//             name="sets"
//             type="text"
//             value={newExercise.sets}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <br />
//         <input type="submit" value="submit" />
//       </form>
//     </div>
//   );
// };
// export default Form;


// Muscles

//import React from 'react'
// import {useLocation} from 'react-router-dom'
// import {Button} from './Button'
// const Muscles = () => {
//     const location = useLocation()
    
//     let allMuscles = Object.entries(location.state.data.muscle)

  
//     return (
//       <div>
//         {allMuscles.map((workout) => (
//           <Button data={workout[1]} 
//           path={`${location.pathname}/${workout[0]}/exercise`}>
//               {workout[0]} exercises</Button>
//         ))}
//       </div>
//     );
// }

// export default Muscles

//app.js
// import "./App.css";
// import { useState, useEffect } from "react";
// import { Routes, Route } from "react-router-dom";

// function App() {
//   const [routines, setRoutines] = useState({});

//   useEffect(() => {
//     fetchRoutines();
//   }, []);

//   function fetchRoutines() {
//     fetch("http://localhost:3000/routines")
//       .then((resp) => resp.json())
//       .then((data) => setRoutines(data));
//   }
//   return (
//     <div className="App">
//       <Form setRoutines={setRoutines} />
//       <Routes>
//         <Route exact path="/" element={<Home routines={routines} />} />
//         <Route exact path="/:id/muscles" element={<Muscles />} />
//         <Route
//           exact
//           path="/:id/muscles/:muscle/exercise"
//           element={<Exercise />}
//         />
//       </Routes>
//     </div>
//   );
// }

// export default App;

//db.json
// // {
//   "routines": {
//     "pull": {
//       "muscle": {
//         "back": [
//           {
//             "name": "Deadlift",
//             "muscle": "back",
//             "description": "The deadlift is a movement where your hips hinge backward to lower down and pick up a weighted barbell or kettlebell from the floor. Your back is flat throughout the movement. Some benefits of performing deadlifts include strengthening and gaining more definition in your upper and lower back, glutes, and hamstrings.",
//             "reps": 15,
//             "sets": 3
//           },
//           {
//             "name": "Pull-up",
//             "muscle": "back",
//             "description": "A pullup is a challenging upper body exercise where you grip an overhead bar and lift your body until your chin is above that bar. It's a hard exercise to execute — so hard, in fact, that a U.S. Marine can receive a passing score on the annual physical fitness test without doing pullups at all.",
//             "reps": 15,
//             "sets": 3
//           }
//         ],
//         "bicepts": [
//           {
//             "name": "Cable Curl",
//             "muscle": "bicepts",
//             "description": "A cable curl is essentially a standing dumbbell curl performed using the cable machine instead of dumbbells. ... Hook a straight bar attachment up to a cable machine, and set the pulley to the low position. Grab the bar with your arms extended and hands shoulder-width apart, palms facing away from you.",
//             "reps": 15,
//             "sets": 3
//           },
//           {
//             "name": "Incline Dumbell Curl",
//             "muscle": "bicepts",
//             "description": "The incline dumbbell curl is a variation of the dumbbell curl and an exercise used to build bigger biceps. The biceps is a tricky (and fun) muscle to target and putting yourself in various degrees of incline can help manipulate the range of motion for either a tighter contraction or deeper stretch.",
//             "reps": 15,
//             "sets": 3
//           }
//         ]
//       }
//     },
//     "push": {
//       "muscle": {
//         "chest": [
//           {
//             "name": "Dumbbell Squeeze Press.",
//             "muscle": "chest",
//             "description": "Take the dumbbells in your hands and lay down on the bench. Place the dumbbells together side by side and lift them up over your chest. Lower them down together and touching each other and then push the dumbbells back up.",
//             "reps": 15,
//             "sets": 3
//           },
//           {
//             "name": "Decline Barbell Bench Bress",
//             "muscle": "chest",
//             "description": "In a decline bench press, the bench is set to 15 to 30 degrees on a decline. This angle places your upper body on a downward slope, which activates the lower pectoral muscles as you push weights away from your body. When part of a complete chest routine, decline bench presses can help your pecs look more defined.",
//             "reps": 15,
//             "sets": 3
//           }
//         ],
//         "tricepts": [
//           {
//             "name": "One-Arm Overhead Extension",
//             "muscle": "tricepts",
//             "description": "Hold a dumbbell in one hand directly behind your head, with your elbow bent and pointed towards the ceiling. Extend through your elbow until your arm is straight and the dumbbell is directly above you. Lower your arm back to starting position and repeat.",
//             "reps": 15,
//             "sets": 3
//           },
//           {
//             "name": "Back Squat",
//             "muscle": "tricepts",
//             "description": "Sit back into hips and keep the back straight and the chest up, squatting down so the hips are below the knees. ... From the bottom of the squat, press feet into the ground and push hips forward to return to the top of the standing position.",
//             "reps": 15,
//             "sets": 3
//           }
//         ]
//       }
//     },
//     "legs": {
//       "muscle": {
//         "legs": [
//           {
//             "name": "Walking Lunges",
//             "muscle": "legs",
//             "description": "Walking lunges are a variation on the static lunge exercise. Instead of standing back upright after performing a lunge on one leg, as you would in a static bodyweight lunge, you 'walk' forward by lunging out with the other leg. ... Walking lunges strengthen the leg muscles as well as the core, hips, and glutes.",
//             "reps": 15,
//             "sets": 3
//           },
//           {
//             "name": "Lateral Lunge",
//             "muscle": "legs",
//             "description": "How to do lateral lunges. Stand with your feet hip-width apart. Take a big step to the side with your left leg, then bend your left knee, push hips back and lower until your left knee is bent 90 degrees. This should take around two seconds. Push back to start.",
//             "reps": 15,
//             "sets": 3
//           }
//         ]
//       }
//     }
//   }
// }

