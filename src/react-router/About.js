import React from 'react'
import { useLocation } from 'react-router-dom'

function About(){

    const location=useLocation()

    return(
        <div>
            <h2>About</h2>
            <p>This is About Component!!!</p>
            <p>FirstName : {location.state.firstName}</p>
            <p>LastName : {location.state.lastName}</p>
        </div>
    )
}

export default About 