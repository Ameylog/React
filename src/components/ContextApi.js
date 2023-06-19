import React,{ createContext, useContext } from "react"

 
const MyContext=createContext()

function ContextApi(){

    const[value,setValue]=React.useState(110)
  
  
   
    // provider
    return(
        <MyContext.Provider value={{value,setValue}}>
            <h1>Context API.</h1>
            <ChildComponent1 />
            <ChildComponent2/>
            <ChildComponent3/>
            <ChildComponent4/>
        </MyContext.Provider>
    )

}

function ChildComponent1(){

    const {value,setValue}=useContext(MyContext)

    const handleValue=()=>{
        setValue(value+1)
    }
    // consumner
    return(
        <div>
            <h2>Use Context</h2>
            <p>Value is: {value}</p>
            <button type="text" onClick={handleValue}>Set Value</button>
            
        </div>
    
    )
}

function ChildComponent2(){
    const {value,setValue}=useContext(MyContext)

    const handleValue=()=>{
        setValue(value+1)
    }

    return(
        <div>
            <h2>2nd child</h2>
            <p>value of 2nd child is:{value}</p>
            <button type="text" onClick={handleValue}>Set Value</button>

        </div>
    )
}

function ChildComponent3(){
    const {value,setValue}=useContext(MyContext)

    return(
        <div>
            <h2>3nd child</h2>
            <p>value of 3nd child is:{value}</p>
        </div>
    )
}

function ChildComponent4(){
    const {value,setValue}=useContext(MyContext)

    return(
        <div>
            <h2>4nd child</h2>
            <p>value of 4nd child is:{value}</p>
        </div>
    )
}

export default ContextApi 