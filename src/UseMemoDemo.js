
import React from 'react'

function UseMemoDemo(){

    const users=[{
        id:1,
        name:"John",
        city:"Pune"
    },{
        id:2,
        name:"Peter",
        city:"Mumbai"
    },{
        id:3,
        name:"Richard",
        city:"Bangalore"
    }]

    const[text,setText]=React.useState('')
    const[search,setSearch]=React.useState('')


    const handleInput=(event)=>{
        setText(event.target.value)
    }

    const handleSearch=()=>{
        setSearch(text)
    }

    const filteredData= React.useMemo(()=>users.filter((user)=>{
        console.log('hiiiiiiiiiii');
        return user.name.toLowerCase().includes(search.toLowerCase())
    }),[search])

    return(
        <div>
            <h1>Use Memo Demo</h1>
            <input type='text' onChange={handleInput}/>
            <button type='button' onClick={handleSearch}>Search</button>
            <DisplayData userList={filteredData}/>
        </div>
    )
}

function DisplayData(props){

    return(
        <ul>
            {
                props.userList.map((user,index)=>(
                    <li key={index}>{user.name}</li>
                ))
            }
        </ul>
    )
}

export default UseMemoDemo