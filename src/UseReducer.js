/*
 UseReducer Hook                                            Reducer

action -> constants                                     action
       -> tYpe & Payload

reducer -> Function (state & action)                    reducer

dispatch -> function (trigger the reducer)              dispatch
                                           
                                                        connect

                                                        store
*/
import React,{useReducer} from 'react'

const initialState={count:0}

const reducer=(state,action)=>{

  console.log(state.count)
  switch(action.type){

    case "increment":
      return { count : state.count + action.payload}

    case "decrement":
      return {count : state.count - action.payload} 
      
    default:
       return initialState 
  }
}

function UseReducer(){

  // console.log(initialState)

  const [state,dispatch]=useReducer(reducer,initialState)

  // console.log('11111111');
  return(
    <div>
      <h1>Use Reducer Demo!!!</h1>
      <p>Count : {state.count}</p>
      <button onClick={()=>dispatch({type:"increment",payload:100})}>Add</button>
      <button onClick={()=>dispatch({type:"decrement",payload:50})}>Reduce</button>
    </div> 
  )

}

export default UseReducer