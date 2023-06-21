import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {

    const navigate=useNavigate()

    const message="React Routing!!!"

    const passData=()=>{
        navigate(`/services/${message}`)
    }

    const person={
        "firstName":"John",
        "lastName":"Doe"
    }

    const passData1=()=>{
        navigate('/about',{state:person})
    }

    return (
        <div>
            <h2>Home</h2>
            <p>This is Home Compoent!!!</p>
            
            <button type='button' onClick={passData}>Go to Services</button>

            <button type='button' onClick={passData1}>Go About</button>


        </div>
    )
}

export default Home 