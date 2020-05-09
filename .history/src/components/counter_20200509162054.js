import React, {useState, Fragment} from 'react';

export const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <Fragment>
            <p>{count}</p>
        </Fragment>
)}