import React from "react"
import { Link, useLocation } from "react-router-dom"



const Breadcrumbs = (props) => {
    const location = useLocation()
 

    let currentLink = ''

    const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== '')
    .map((crumb, i) =>{
        currentLink += `/${crumb}`
        return(
            <div className="crumb" key={crumb}>
                <Link to={currentLink}>{crumb}</Link> 
            </div>
        )
    })
    return (
        <div className="breadcrumbs">
            {crumbs}
        </div>
    )
}

export default Breadcrumbs
