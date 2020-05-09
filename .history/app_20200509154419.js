import React from 'react'

const name = "Ben Chacko";

// export const App = () => <div>Hello {name}!</div>

/* export const App = () => {
    return <div>Hello {name}!</div>
} */

/* export const App = () => {
    return (
        <div>Hello {name}!</div>
    )
} */

export const App = () => {
    return (
        <React.Fragment>
            Hello {name}!
        </React.Fragment>
    )
}