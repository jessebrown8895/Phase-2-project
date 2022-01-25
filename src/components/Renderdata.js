import React, {useState, useEffect} from 'react';

export const Renderdata = ({exercise}) => {
    
    const initialState = () => Number(window.localStorage.getItem('count')) || 0
    const theInitialState = () => Number(window.localStorage.getItem("counts")) || 0
    const [count, setCount] = useState(initialState)
    const [counts, setCounts] = useState(theInitialState)

    useEffect(() => {
      window.localStorage.setItem("count", JSON.stringify(count))
}, [count])

   useEffect(() => {
       window.localStorage.setItem("counts", JSON.stringify(counts))
   })

    const handleCount = () => {
        setCount(count + 1)
    }

    const handleMinusCount = () => {
      setCount(count - 1);
    };
  return (
    <div>
      <div className="container">
        <h2>{exercise.name}</h2>
        <p>{exercise.description}</p>
        {/* <h3>Reps: {count} <button onClick={() => setCount(count + 1)}>+</button> <button onClick={() => setCount(count - 1)}>-</button></h3> */}
        <h3> reps: {count} <button onClick={handleCount}>+</button>{' '}<button onClick={handleMinusCount}>-</button></h3>

        <h3>Sets: {counts} <button onClick={() =>  setCounts(counts + 1)}>+</button> <button onClick={() =>  setCounts(counts - 1)}>-</button></h3>
      </div>
    </div>
  );
};
