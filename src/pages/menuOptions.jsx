import React, { Fragment } from 'react';
import { MenuOptions } from '../components/menuOptions'
import NavBar from '../components/navbar'

export const MenuOptionsPage = () => {
    return (
        <Fragment>
            <NavBar />
                <MenuOptions />
        </Fragment>
    )
}

