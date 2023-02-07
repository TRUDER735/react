import React from "react"
import { NavLink, Outlet } from "react-router-dom"
import Breadcrumbs from "../components/Breadcrumbs"

const RootLayout = (props) => {
    return (
        <div className="root-layout">
            
        <header>
        <h1 className='logo'>Jobarouter</h1>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='about'>About</NavLink>
                <NavLink to='help'>Help</NavLink>
                <NavLink to='careers'>Careers</NavLink>
            </nav>
            <Breadcrumbs/>
        </header>

        <main>
            <Outlet/>
        </main>
    
        </div>
    )
}

export default RootLayout
