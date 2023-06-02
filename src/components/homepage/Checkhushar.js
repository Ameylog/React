import React from 'react';

function Checkhushar() {
 
    // let message='';
    const[message,setMessage]=React.useState(' ')
    const handleInput=(event)=>{

        // message=event.target.value;
        setMessage(event.target.value)
        console.log(message)
    }
  
    return (

    <div>
      <h1>Checking the </h1>
      <input type="text" name='first' onChange={handleInput} />
      <p>message:{message}</p>
    </div>
  )
}

export default Checkhushar
