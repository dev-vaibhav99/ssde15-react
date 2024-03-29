import React, { Component } from 'react'
import withCounter from './withCounter'

class ClickCounter extends Component<{ count: number, incrementCount: () => void }> {
    render() {
        return (
            <div><button onClick={this.props.incrementCount}>Clicked {this.props.count} times</button></div>
        )
    }
}

export default withCounter(ClickCounter, 5)