import React, { Component } from 'react'

interface State {
    email: string,
    address: string,
    topic: string
}

export class FormHandling extends Component<{}, State> {
    constructor({ }) {
        super({})

        this.state = {
            email: "",
            address: "",
            topic: ""
        }
    }

    handleEmailInput(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            email: event.target.value
        })
    }

    handleAddressInput(event: React.ChangeEvent<HTMLTextAreaElement>) {
        this.setState({
            address: event.target.value
        })
    }

    handleTopic(event: React.ChangeEvent<HTMLSelectElement>) {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event?.preventDefault();
        alert(`${this.state.email} ${this.state.address} ${this.state.topic}`)
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    {/* input element, textarea, select, submit button */}
                    <div><input type="text"
                        value={this.state.email}
                        onChange={(event) => this.handleEmailInput(event)} /></div>
                    <div><textarea value={this.state.address} onChange={(event) => this.handleAddressInput(event)}></textarea></div>
                    <div>
                        <select name="topics" id="" value={this.state.topic}
                            onChange={(event) => this.handleTopic(event)}>
                            <option value="React">React</option>
                            <option value="Vue">Vue</option>
                            <option value="Angular">Angular</option>
                        </select>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default FormHandling