import React from 'react'
import Button from './Button'
function Home({routines}) {
    
    const theRoutines = Object.values(routines)
    console.log(theRoutines)
       const push = theRoutines.filter(routine => {
            if(routine.movement === "push"){
                return routine.movement
            }
        })
    
   
        const pull = theRoutines.filter(routine => {
            if(routine.movement === "pull"){
                return routine.movement
            }
        })
    
    
      const legs = theRoutines.filter((routine) => {
        if (routine.movement === "pull") {
          return routine.movement;
        }
      })
    
  
    return (
      <div>
        <Button path={"/muscle/push"} data={push}>Push Routine</Button> 
        <Button path={"/muscle/pull"} data={pull}>Pull Routine</Button>
        <Button path={"/muscle/legs"} data={legs}>Legs Routine</Button>
      </div>
    );
}

export default Home

