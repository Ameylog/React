import React from 'react'

function PropsDemo() {

    const [message, setMessage] = React.useState('')

    const handleInput=(event)=>{
        setMessage(event.target.value)

    }
    return (
        <div>
            <h1>Props Demo</h1>
            <input type="text" onChange={handleInput} />
            <DisplayDemo message={message} />
        </div>
    )
}

function DisplayDemo({ message }) {
    return (
        <div>
            <h2>Props Info</h2>
            <p>message: {message}</p>

        </div>
    )
}

export default PropsDemo
