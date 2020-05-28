// Counter with React.useState Hook
import React from 'react';

const useLocalState = (localItem) => {
    const [loc, setstate] = React.useState(localStorage.getItem(localItem))

    const setLocalState = (newItem) => {
        localStorage.setItem(localItem, newItem)
        setstate(newItem)
    }

    return [loc, setLocalState]
}

export const Counter = () => {
    const [count, setCount] = useLocalState(countValue);

    const countValue = 0
    const addOne = () => setCount(count + 1)
    const addFive = () => setCount(count + 5)
    const subtractOne = () => setCount(count - 1)
    const subtractTen = () => setCount(count - 10)
    const reset = () => setCount(countValue)

    return (
        <React.Fragment>
            <h1>Counter</h1>
            <p>You have clicked {count} times</p>
            <button onClick={addOne}>Add One</button>
            <button onClick={addFive}>Add Five</button>
            <button onClick={subtractOne}>Subtract One</button>
            <button onClick={subtractTen}>Subtract Ten</button>
            <button onClick={reset}>Reset</button>
            
        </React.Fragment>
    )
}


// Counter with React.useReducer Hook
/* import React from "react";

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


 */