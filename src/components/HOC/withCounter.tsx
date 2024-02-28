import React, { ComponentType } from 'react'

const withCounter = (WrappedComponent: ComponentType<any>, incrementValue: number) => {

    class WithCounter extends React.Component<{}, { count: number }> {

        constructor({ }) {
            super({})

            this.state = {
                count: 0
            }
        }

        incrementCount = () => {
            this.setState({ count: this.state.count + incrementValue });
        }

        render() {
            return (
                <WrappedComponent count={this.state.count} incrementCount={this.incrementCount} />
            )
        }
    }

    return WithCounter;
}

export default withCounter;