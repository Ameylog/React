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


/*
   ##1 send message throught url  [ useNavigate,useparam]

        # Sending message
           const message="React Routing!!!"      --> set message 

           const passData=()=>{
           navigate(`/services/${message}`)   ---> append to message to url [ ` --> back tick same as sinle quote(''), we can write the message name in url]
           }
          
           <Route path="/services/:message" element={<Services/>}/>     ---> set message variable after [/:] in Router path
        
           /: --> after colon consider as dynamic value
       # Receiving message
           useNavigete  --> navigate page
           useParam   --> received message from url


    ##2 send Object  from one page to another through [ useNaviagate , useLocation]

       # Sending Object
            const person={
                "firstName":"John",         -----> create person object
                "lastName":"Doe"
            }

            const passData1=()=>{
                navigate('/about',{state:person})      --> set object to state
            }

       # Receiver object
            const location=useLocation()  
            <p>FirstName : {location.state.firstName}</p>
            <p>LastName : {location.state.lastName}</p>

*/