import React,{useState} from 'react'
import axios from 'axios'

function ApiPostData() {
  const userObject={
    userName:'',
    password:''
  };

    const[inputData,setInputData]=React.useState(userObject)

   const hangleInput=(event)=>{
    setInputData({...inputData,[event.target.name]:event.target.value})

    }

    const sendData=()=>{
      axios.post("http://localhost:8081/saveUser",inputData)
            .then((response)=>response.data)
            .then(res=>{
               if(res.statusCode===201){
                  console.log('Success');
               }
            })
    }

  return (
    <div>
      
      <h2>Api Post</h2>
      <label>UserName</label>
      <input type="text"   onChange={hangleInput} name="userName"  id="id1" required /> <br />

      <label>Password</label>
      <input type="text"   onChange={hangleInput} name="password" id="id2" required /> <br />

      <button onClick={sendData}>Submit</button>
    </div>
  )
}

export default ApiPostData
