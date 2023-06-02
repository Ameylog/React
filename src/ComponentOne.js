import React from 'react'

class ComponentOne extends React.Component{

    componentWillUnmount(){
        console.log('Component One Unmounted!!!');
    }

    render(){
        return(
            <div>
                <h1>Component One</h1>
                <p>This is Component One</p>
            </div>           
        )
    }
}

export default ComponentOne