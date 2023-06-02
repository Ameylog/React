import React from 'react'

function ButtonOperation() {

  const [num1,setNum1] =React.useState();
  const [num2,setNum2] =React.useState();
  const [total,setTotal] =React.useState("");

  function add (){
    setTotal(num1 +num2)
  }
  function sub (){
    setTotal(num1 -num2)
  }
  function  multi(){
    setTotal(num1 *num2)
  }
  function div (){
    setTotal(num1 /num2)
  }
  function clear(){
    setNum1(" ")
    setNum2(" ")
    setTotal(" ")
    
  }
  //  var obj=["amey":123456];

  return (
    <div className="App">
        <h1>Addition of Two Number</h1>
        <div className='input-number'>

        <label >Num1:- </label>
        <input type='number' value={num1} placeholder="Enter num1 "onChange={e=> setNum1(+e.target.value)} />  <br /><br />
        <label >Num2:- </label>
        <input type='number' value={num2} placeholder="Enter num2 " onChange={e=> setNum2(+e.target.value)} /> <br /> <br />
        </div>
        Result:-<input type="text"  value={total} placeholder='Result'/><br /><br />

        <button onClick={add}>Add</button> 
        <button onClick={sub}>Sub</button>
        <button onClick={multi}>Multi</button>
        <button onClick={div}>Div</button>

        <button onClick={clear}>clear</button>
     
      {/* <p>{obj}</p> */}
        
    </div>
  )
};

export default ButtonOperation
