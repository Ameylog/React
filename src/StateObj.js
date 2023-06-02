
import React from "react";

function StateObj(){

    const userObj={
        username:'' ,
        password:''
    }

    const[user,setUser]=React.useState(userObj)

    const handleInput=(event)=>{
        setUser({...user,[event.target.name]:event.target.value})
    }

    const checkLogin=()=>{
        console.log(user);
        document.getElementById('id1').value='';
        document.getElementById('id2').value='';
        
        
    }
    return(
        <div>
            <label>UserName : </label>
            <input type="text" onChange={handleInput} id="id1" name="username" required/> <br /><br />

            <label>Password : </label>
            <input type="password" onChange={handleInput} id="id2" name="password" required/><br /><br />

            <button type="button" onClick={checkLogin}>Login</button>
        </div>
    )
}

export default StateObj 