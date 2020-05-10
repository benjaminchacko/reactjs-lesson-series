import React, { useState, Fragment }from 'react';
import Layout from "../components/layout";
// import { Counter } from '../components/counter'

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <Fragment>
        <Layout>
            <h1>Counter</h1>
            <p>You have clicked: {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Add One
            </button>
            <button onClick={() => setCount(count + 5)}>
                Add Five
            </button>
            <button onClick={() => setCount(count - 1)}>
                Subtract One
            </button>
            <button onClick={() => setCount(count - 10)}>
                Subtract Ten
            </button>
        </Layout>
    </Fragment>
)}

