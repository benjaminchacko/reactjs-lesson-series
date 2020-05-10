import React, { Fragment } from 'react'
import { Counter } from './components/counter'
import ShoppingList from './components/shoppingList'

import './assets/css/app.css'

export const App = () => {
    return (
        <Fragment>
            <Counter />
            <hr />
            <ShoppingList />
        </Fragment>
    )
}
