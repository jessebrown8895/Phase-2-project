import React from 'react'
import {useLocation} from 'react-router-dom'
import {Button} from './Button'
const Muscles = () => {
    const location = useLocation()
    
    let allMuscles = Object.entries(location.state.data.muscle)

  
    return (
      <div>
        {allMuscles.map((workout) => (
          <Button data={workout[1]} 
          path={`${location.pathname}/${workout[0]}/exercise`}>
              {workout[0]} exercises</Button>
        ))}
      </div>
    );
}

export default Muscles
