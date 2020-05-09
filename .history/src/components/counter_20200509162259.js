import React, { useState, Fragment } from 'react';

export const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <Fragment>
            <p>You have clicked: {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Add One
            </button>
            <button onClick={() => setCount(count + 5)}>
                Add One
            </button>
        </Fragment>
    )
}