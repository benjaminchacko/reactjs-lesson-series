import React, {Fragment} from 'react'
import { Counter, ShoppingList } from './components/counter'

export const App = () => {
    return (
        <Fragment>
            <Counter />
            <ShoppingList />
        </Fragment>
)}
