import React, { useEffect } from 'react'

function UseEffectDemo(){

    const[number,setNumber]=React.useState(0)

    const[userList,setUserlist]=React.useState([])

    useEffect(()=>{
        
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response)=>response.json())
            .then((res)=>{
                setUserlist(res)
            })
    },[])

    //case 1       [not equivalent to componentdidmount()  and Run infite times]
    // useEffect(()=>{
    //    setNumber(number+1)
    //     console.log('UseEffect Executed!!!');
    // })

    //case 2       [Equivalent to componentdidmount() , [] -> Empty dependency array run only once]
    // useEffect(()=>{
    //     setNumber(number+1)
    //     console.log('UseEffect Executed!!!');
    // },[])

    //case 3       [Equivalent to componentdidmount()  and componentdidupdate() ,[] -> dependency array with value]
    // useEffect(()=>{
    //     console.log('UseEffect Executed!!!');
    // },[number])

    const handleChange=()=>{
        setNumber(number+1)
    }

    return(
        <div>
            <h1>Use Effect Demo!!!</h1>
            <p>This is UseEffect Demo!!!</p>
            <p>Number is: {number}</p>
            <button type='button' onClick={handleChange}>Add</button>

            <h2>UserList</h2>
            <ul>
                {userList.map((user)=>(
                    <li>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default UseEffectDemo