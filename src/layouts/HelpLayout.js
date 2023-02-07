import React from "react"
import { NavLink, Outlet } from "react-router-dom"

const HelpLayout = (props) => {
    return (
        <div>
            <h2>Website help</h2>
            <p>Yesterday, I was just broke, today, I look sexy and blessed</p>

            <nav className="help-nav">
                <NavLink to='faq'>FAQ</NavLink>
                <NavLink to='contact'>Contact Us</NavLink>
            </nav>

            <Outlet/>
        </div>
    )
}

export default HelpLayout
