import React from 'react'

function PropsDemoCheck() {

    // const userList=[{
    //     id:1,
    //     name:"A"
    // },{
    //     id:2,
    //     name:"B"
    // },{
    //     id:3,
    //     name:"C"
    // }]
     
     const userObj={
        firstName:'',
        lastName:''
     }

    const[user,setUser]=React.useState(userObj)
    const [userList, setUserList] = React.useState([])

    const handleInput=(event)=>{
         setUser({...user,[event.target.name]:event.target.value})
    }

    const addData=()=>{
        setUserList([...userList,user])
    }
    console.log(userList)
   
    const deleteUser=(index)=>{
        setUserList.splice(index,1)

    }

    return (
        <div>
            <h1>Props Demo</h1>
            <label>FirstName : </label>
            <input type="text" name="firstName" onChange={handleInput} />
            <label>LastName : </label>

            <input type="text" name="lastName" onChange={handleInput} />
            <button type='button' onClick={addData}>Add</button>
            <DisplayDemo userList={userList} />
        </div>
    )
}

function DisplayDemo({ userList }) {
    return (
        <div>
            <h2>Props Info</h2>
            <ul>
                {userList.map((user,index)=>(
                    <div>
                        <li>{user.firstName +' '+user.lastName}</li>
                        <button type='button'  onClick={()=>deleteUser(index)}></button>
                    </div>
                    
                ))}
            </ul>

        </div>
    )
}

export default PropsDemoCheck
