import React, { Component, MouseEventHandler } from 'react'

export class EventHandling extends Component {

    constructor({}) {
      super({})
        
      this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() : MouseEventHandler<HTMLButtonElement> | undefined{
        console.log("Someone clicked the button");
        return undefined;
    }
    
    render() {
        return (
            // <div><button onClick={this.clickHandler.bind(this)}>Click me</button></div>
            // <div><button onClick={() => this.clickHandler()}>Click me</button></div>
            <div><button onClick={this.clickHandler}>Click me</button></div>
        )
    }
}

export default EventHandling