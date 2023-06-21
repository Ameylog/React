import React from 'react'
import { useParams } from 'react-router-dom'

function Services(){

    const {message}=useParams()

    return(
        <div>
            <h2>Services</h2>
            <p>This is Services Component!!!</p>
            <p>Message : {message}</p>
        </div>
    )
}

export default Services  