import React from "react"
import { Outlet } from "react-router-dom"

const CareersLayout = (props) => {
    return (
        <div>
            <h2>Careers</h2>
            <p>Front of your mama, front of your daddy, your sister, your aunt 200K taxes, please do</p>

            <Outlet/>
        </div>
    )
}

export default CareersLayout
