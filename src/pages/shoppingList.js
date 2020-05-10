import React, { Fragment } from 'react';
import { ShoppingList } from '../components/shoppingList'
import NavBar from '../components/navbar';

export const ShoppingListPage = () => {
    return (
        <Fragment>
            <NavBar />
            <ShoppingList />
        </Fragment>
    )
}