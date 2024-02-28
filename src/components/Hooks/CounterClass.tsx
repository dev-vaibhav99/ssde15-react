import { count } from 'console'
import React, { Component } from 'react'

export class CounterClass extends Component<{}, { count: number }> {
    constructor({ }) {
        super({})

        this.state = {
            count: 0
        }

        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.reset = this.reset.bind(this)
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        })
    }
    decrement() {
        this.setState({
            count: this.state.count - 1
        })
    }
    reset() {
        this.setState({
            count: 0
        })
    }
    render() {
        return (
            <div>
                <h2>Class Component</h2>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}

export default CounterClass