import React, { Component } from 'react'
import withCounter from './withCounter'

export class HoverCounter extends Component<{ count: number, incrementCount: () => void }>  {
    render() {
        return (
            <div><h1 onMouseOver={this.props.incrementCount}>Hovered {this.props.count} times</h1></div>
        )
    }
}

export default withCounter(HoverCounter, 10);