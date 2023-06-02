import React from "react"

function CallbackEvent(){

    const[text,setText]=React.useState('')

    const handleChange=(event)=>{
        setText(event.target.value)
    }

    return(
        <div>
            <h1>Call Back Event</h1>
            <p>Text is: {text}</p>
            <CheckCallBack onInputChange={handleChange}/>
        </div>
    )
}

function CheckCallBack({onInputChange}){
    return(
        <div>
            <h2>CallBack Check</h2>
            <input type="text" onChange={onInputChange}/>
        </div>
    )
}

export default CallbackEvent