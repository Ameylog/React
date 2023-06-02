import React from 'react'

function PropsButton() {

    const [input, setInput] = React.useState('')
    const [displaydata, setDisplayData] = React.useState('')

    const handleInput = (event) => {
        setInput(event.target.value);
    }
    
    const ButtonClick = () => {
      setDisplayData(input);

    }
    return (
        <div>
            <h2>This is props</h2>
            <input type="text" onChange={handleInput} /><br /><br />
            
            <button onClick={ButtonClick}>Display</button>
             <Childfun message={displaydata} />
            


        </div>
    )
}

function Childfun({message}) {
    return (
        <div>
            <h4>Hello I am child</h4>
            <p>Message: {message}</p>
        </div>

    )
}

export default PropsButton
