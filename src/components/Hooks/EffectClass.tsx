import React, { Component } from 'react'

export class EffectClass extends Component<{}, { count: number, name: string }> {

    constructor({ }) {
        super({})

        this.state = {
            count: 0,
            name: ""
        }
    }

    componentDidMount(): void {
        console.log("componentDidMount")
        document.title = `Clicked ${this.state.count} times`;
    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{ count: number; }>, snapshot?: any): void {
        if (prevState.count !== this.state.count) {
            console.log("updating the title")
            document.title = `Clicked ${this.state.count} times`;
        }
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            name: event?.target.value
        })
    }

    render() {
        return (
            <div>
                <form action="">
                    <input type="text" value={this.state.name} onChange={(e) => this.handleChange(e)} />
                </form>
                <button onClick={() => this.increment()}>Clicked {this.state.count} times</button>
            </div>
        )
    }
}

export default EffectClass