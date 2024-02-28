import React, { Component } from "react";

interface CounterProps {

}

interface CounterState {
    count: number
}

class Counter extends Component<CounterProps, CounterState> {
    constructor(props: any) {
        super(props);

        this.state = {
            count: 0
        };
    }

    increment = () => {
        this.setState((prevState) => ({ // asynchronous
            count: prevState.count + 1
        }))
    }

    increment5 = () => {
        this.increment(); // 0 -> 1
        this.increment(); // 1 -> 2
        this.increment(); 
        this.increment();
        this.increment();
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.increment5}>Increment 5</button>
            </div>
        );
    }
}

export default Counter;