import React, {Component} from "react";

interface WelcomeInterface{
    name: string
}

class WelcomeClass extends Component<WelcomeInterface> {

    render(){
        return <h1>Welcome {this.props.name}</h1>
    }
}

export default WelcomeClass;