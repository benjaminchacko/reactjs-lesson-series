import React, { useState, Fragment } from 'react';
import Layout from "../components/layout";
import { Counter } from '../components/counter'
// import NavBar from '../components/navbar'

export const CounterPage = () => {

    return (
        <Fragment>
            <Layout>
                <Counter />
            </Layout>
        </Fragment>
    )
}

