import React from 'react'
import { useLocation } from 'react-router-dom';
import Button from './Button'
function Muscles() {
    const location = useLocation()

    const allMuscles = location.state.data
    const theMuscles = Object.values(allMuscles)
    console.log(theMuscles)
    /* {allMuscles.map((workout) => (
          <Button data={workout[1]} 
          path={`${location.pathname}/${workout[0]}/exercise`}>
              {workout[0]} exercises</Button>)} */
    
    return (
      <div>
       <Button data={allMuscles}></Button>
        
        
      </div>
    );
}

export default Muscles
