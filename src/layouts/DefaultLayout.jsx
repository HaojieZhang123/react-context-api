import React from 'react'
import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
    return (
        <>
            <header>
                <h1>React Context API</h1>
            </header>

            <main>
                <Outlet />
            </main>
        </>
    )
}

export default DefaultLayout