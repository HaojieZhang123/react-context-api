import React from 'react'
import { Outlet } from 'react-router-dom'

import { useAlert } from '../context/AlertContext'

const DefaultLayout = () => {

    const { alert } = useAlert();

    // console.log(alert);
    return (
        <>
            <header>
                <h1>React Context API</h1>
            </header>

            <div>
                <p>Alert type: {alert.type}</p>
                <p>Alert message: {alert.message}</p>
            </div>

            <main>
                <Outlet />
            </main>
        </>
    )
}

export default DefaultLayout