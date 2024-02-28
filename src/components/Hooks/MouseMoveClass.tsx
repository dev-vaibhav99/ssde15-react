import React, { Component } from 'react'

interface States {
    x: number,
    y: number
}

export class MouseMoveClass extends Component<{}, States> {

    constructor({ }) {
        super({})

        this.state = {
            x: 0,
            y: 0
        }
    }

    mouseEventHandler = (e: any) => {
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }

    componentDidMount(): void {
        console.log("Mousemove event added")
        document.addEventListener("mousemove", this.mouseEventHandler)
    }

    componentWillUnmount(): void {
        // cleanup activity
        document.removeEventListener("mousemove", this.mouseEventHandler)
    }


    render() {
        return (
            <div>Class component ➡ x: {this.state.x} y: {this.state.y}</div>
        )
    }
}

export default MouseMoveClass