import React from 'react'
import {useLocation} from 'react-router-dom'
const Exercise = () => {
    const location = useLocation()
    console.log(location)
    return (
        
        <div>
           {location.state.data.map(exercise => (
               <div>
                   <h2>{exercise.name}</h2>
                   <p>{exercise.description}</p>
                   <h3>{exercise.reps} </h3> 
                   <h3>{exercise.sets}</h3>
               </div>
           ))}
        
        </div>
    
    )}

export default Exercise

