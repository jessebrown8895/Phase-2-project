import React from 'react'
import { Button } from './Button';

const Home = (props) => {
    
    const legs = props.routines.legs 
    const push = props.routines.push
    const pull = props.routines.pull
    return (
      <div>
        <Button path="push/muscles" data={push}  color="red">push routine</Button>
        <Button path="pull/muscles" data={pull} color="green">pull routine</Button>
        <Button path="legs/muscles" data={legs}  color="purple">legs routine </Button>
      </div>
    );
}

export default Home

