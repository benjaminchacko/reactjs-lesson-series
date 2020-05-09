import React, { Fragment } from 'react'
import { Counter } from './components/counter'
import ShoppingList from './components/shoppingList'

export const App = () => {
    return (
        <Fragment>
            <Counter />
            <ShoppingList />
        </Fragment>
    )
}
