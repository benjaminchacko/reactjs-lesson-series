import React from 'react'

const name = "Ben Chacko";

// inline export - single line - arrow function
// export const App = () => <div>Hello {name}!</div>

// inline export - single line - function declaration
export function App() {
    return <div>Hello {name}!</div>
}

// inline export - arrow function
/* export const App = () => {
    return <div>Hello {name}!</div>
} */

// inline export - function declaration
/* export function App(){
    return (
        <div>Hello {name}!</div>
    )
} */


// arrow function using fragment
/* 
export const App = () => {
    return (
        <React.Fragment>
            Hello {name}!
        </React.Fragment>
    )
} */

// arrow function - export default
/* 
const App = () => {
    return (
        <React.Fragment>
            Hello {name}!
        </React.Fragment>
    )
} 

export default App;
*/