import React from 'react'

const name = "Ben Chacko";

// arrow function - export default - Option #1 in index.js
/*
const App = () => {
    return (
        <React.Fragment>
            <p>Hello {name}!</p>
            <p>Hello Friend!</p>
        </React.Fragment>
    )
} 

export default App;
*/

// inline export - single line - arrow function - Option #2 in index.js
// export const App = () => <div>Hello {name}!</div>

// inline export - function declaration - Option #2 in index.js
/* export function App(){
    return (
        <div>Hello {name}!</div>
    )
} */

// arrow function using fragment - Option #2 in index.js
/* export const App = () => {
    return (
        <React.Fragment>
            <p>Hello {name}!</p>
            <p>Hello Friend!</p>
        </React.Fragment>
    )
} */