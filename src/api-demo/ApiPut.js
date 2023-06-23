import axios from 'axios'
import React,{useState} from 'react'

function ApiPut() {


  const userObject = {
    userName: '',
    password: ''
  };

  const [inputData, setInputData] = React.useState(userObject)

  const hangleInput = (event) => {
    setInputData({ ...inputData, [event.target.name]: event.target.value })

  }

  const sendData = () => {
    axios.put("http://localhost:8081/updatePassword", inputData)
      .then((response) => response.data)
      .then(res => {
        setInputData(res)
      })


  }

  return (
    <div>
      <h1>API CALL</h1>
      <label>UserName</label>
      <input type="text" onChange={hangleInput} name="userName" id="id1" required /> <br />

      <label>Password</label>
      <input type="text" onChange={hangleInput} name="password" id="id2" required /><br />

      <button onClick={sendData}>Submit</button>
    </div>
  )
}

export default ApiPut