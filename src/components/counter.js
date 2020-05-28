// Counter with React.useState Hook
/* import React from 'react';

export const Counter = () => {
    const [count, setCount] = React.useState(0);  
    
    const addOne = () => setCount(count + 1);
    const addFive = () => setCount(count + 5);
    const subtractOne = () => setCount(count - 1);
    const subtractTen = () => setCount(count - 10);
    
    
    return (
        <React.Fragment>
            <h1>Counter</h1>
            <p>You have clicked: {count} times</p>
            <button onClick={addOne}>Add One</button>
            <button onClick={addFive}>Add Five</button>
            <button onClick={subtractOne}>Subtract One</button>
            <button onClick={subtractTen}>Subtract Ten</button>
        </React.Fragment>
    )
} */


// Counter with React.useReducer Hook
import React from "react";

export const Counter = () => {
  const [count, dispatch] = React.useReducer((state, action) => {
    switch(action){
        case 'addOne': 
            return state + 1;
        case 'addFive': 
            return state + 5;
        case 'subtractOne': 
            return state - 5;
        case 'subtractTen': 
            return state - 10;
        
        default: 
        return state;
    }
  }, 0);

  const addOne = () => dispatch('addOne')
  const addFive = () => dispatch('addFive')
  const subtractOne = () => dispatch('subtractOne')
  const subtractTen = () => dispatch('subtractTen')
    

  return (
    <React.Fragment>
        <h1>Counter</h1>
        <p>You have clicked: {count} times</p>
        <button onClick={addOne}>Add One</button>
        <button onClick={addFive}>Add Five</button>
        <button onClick={subtractOne}>Subtract One</button>
        <button onClick={subtractTen}>Subtract Ten</button>
    </React.Fragment>
  )
};


