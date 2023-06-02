import React, { useEffect } from 'react'

function UseEffectDemo(){


    useEffect(()=>{
        console.log('UseEffect Executed!!!');
    })

    return(
        <div>
            <h1>Use Effect Demo!!!</h1>
            <p>This is UseEffect Demo!!!</p>
        </div>
    )
}

export default UseEffectDemo