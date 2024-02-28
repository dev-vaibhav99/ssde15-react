import { hasSubscribers } from "diagnostics_channel";
import React, { Component } from "react";

class ConditionalRendering extends Component<{}, { hasSubscribed: boolean }> {

    constructor({ }) {
        super({});

        this.subscribe = this.subscribe.bind(this); // binding this contex with the method

        this.state = { // direcly override
            hasSubscribed: false
        }
    }

    subscribe() {
        this.setState({
            hasSubscribed: !this.state.hasSubscribed
        });
    }

    render() { // mandatory method
        return this.state.hasSubscribed
            ? <div><h1>Thank you</h1><button onClick={this.subscribe}>Toggle</button></div>
            : <div><h1>Please subscribe</h1><button onClick={this.subscribe}>Toggle</button></div>
    }
}

export default ConditionalRendering;