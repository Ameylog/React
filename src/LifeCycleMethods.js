import React from 'react'
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';

class LifeCycleMethods extends React.Component{

    constructor(){
        super()
        this.state={
            number:0
        }
    }

    componentDidMount(){
        console.log("Helllooooooooo!!! ",this.state.number);
    }

    componentDidUpdate(){
        console.log("In component Did Update!!! ",this.state.number);
    }

    incrementNumber=()=>{
        this.setState({number:this.state.number+1})
    }

    toggleComponent=()=>{
        this.setState({number:this.state.number?0:1})
    }

    render(){

        const component=this.state.number?<ComponentOne/>:<ComponentTwo/>

        return(
            <div>
                <h1>Life Cycle Methods</h1>
                <p>Number is : {this.state.number}</p>
                <button type='button' onClick={this.incrementNumber}>Add</button>
                {/* <ComponentOne/>
                <ComponentTwo/> */}
                {component}
                <button type='button' onClick={this.toggleComponent}>Toggle</button>
            </div>
        )
    }
}

export default LifeCycleMethods