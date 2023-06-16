import React,{ createContext, useContext } from "react"

 
const MyContext=createContext()

function ContextApi(){

    const[value,setValue]=React.useState(110)
  
    // provider
    return(
        <MyContext.Provider value={value}>
            <h1>Context API.</h1>
            <ChildComponent1/>
        </MyContext.Provider>
    )

}

function ChildComponent1(){

    const value=useContext(MyContext)
    // consumner
    return(
        <div>
            <h2>Use Context</h2>
            <p>Value is: {value}</p>
        </div>
    
    )
}

export default ContextApi 