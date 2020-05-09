import React, { useState, Fragment } from 'react';

export const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <Fragment>
            <p>You have clicked: {count} times</p>
            <button onClick={() => setESCount(EScount + 1)}>
                Add One Enrolled Student
            </button>
        </Fragment>
    )
}