import React, { useState, Fragment } from 'react';
import { Counter } from '../components/counter'
import NavBar from '../components/navbar'

export const CounterPage = () => {
    return (
        <Fragment>
            <NavBar />
                <Counter />
        </Fragment>
    )
}

