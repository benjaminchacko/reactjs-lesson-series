import React from 'react'

const name = "Ben Chacko";
// single line function
// export const App = () => <div>Hello {name}!</div>

// inline export - arrow function
/* export const App = () => {
    return <div>Hello {name}!</div>
} */


export function App(){
    return (
        <div>Hello {name}!</div>
    )
}
/* 
export const App = () => {
    return (
        <React.Fragment>
            Hello {name}!
        </React.Fragment>
    )
} */