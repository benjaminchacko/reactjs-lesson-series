import React, {Fragment} from 'react';
import Layout from "../components/layout";
import { Counter } from '../components/counter'

const Home = () => 
    <Fragment>
        <Layout>
        <Counter />
        </Layout>
    </Fragment>
 
export default Home;
