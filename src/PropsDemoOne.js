import React from 'react'

function PropsDemoOne() {

    const userObj={
        firstName:'',
        lastName:''
    }
    
    const[user,setUser]=React.useState(userObj)
    const[user1,setUser1]=React.useState(userObj)

    const handleInput = (event) => {
        setUser({...user,[event.target.name]:event.target.value});
    }
    
    const ButtonClick = () => {
      setUser1(user)
    }

    return (
        <div>
            <h2>This is props</h2>
            <input type="text" name='firstName' onChange={handleInput} /><br /><br />
            <input type="text" name='lastName' onChange={handleInput} /><br /><br />
                
            <button onClick={ButtonClick}>Display</button>
             <Childfun user1={user1} />
            {/* <p>message: {displaydata}</p> */}

        </div>
    )
}

function Childfun({user1}) {
    return (
        <div>
            <h4>Hello I am child</h4>
            <p>FirstName: {user1.firstName}</p>
            <p>LastName: {user1.lastName}</p>
        </div>

    )
}

export default PropsDemoOne
