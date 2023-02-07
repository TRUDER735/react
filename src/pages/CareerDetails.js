import React from "react"
import { useLoaderData, useParams } from "react-router-dom"


const CareerDetails = (props) => {

    const {id} = useParams() 

    const career = useLoaderData()

    return (
        <>
            <div className="career-details" >
                <h1>Career details for {career.title}</h1>
                <p>Starting salary: {career.salary}</p>
                <p>Location: {career.location}</p>

                <div className="details">
                    <p>You want to treasure me, I want the better me You want the "take you out to eat, show some effort" me, ayy
                    Step out then, 'cause it's been a cool minute It's some niggas goin' stupid in here, I must admit it
                    Got my eye on one of many, she look like a flight attendant I know it's a few ballplayers that been hit it
                    You gotta come see me first, you know you in my city Sin City, headed East until you near me</p>
                </div>
            </div>
        </>
    )
}


export const careersDetailsLoader = async ({ params }) =>{

    const {id} = params

    const res = await fetch('http://localhost:4000/careers/' + id)
    
    if(!res.ok){
        throw Error('could not find that career');
    }

    return res.json()
}


export default CareerDetails
