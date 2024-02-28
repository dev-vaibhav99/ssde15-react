import React, { Component } from 'react'

export class ErrorBoundry extends Component<{ children: React.ReactNode }, { hasError: boolean }> {

    constructor(children: React.ReactNode) {
        super({ children })

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error: Error) {
        console.log("Error boundary: getDerivedStateFromError")
        return {
            hasError: true
        }
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.log("Error boundary: componentDidCatch")
        console.log(error)
        console.log(errorInfo.componentStack)
    }

    render() {
        if(this.state.hasError){
            return <h1>Something went wrong !</h1>
        } else {
            return this.props.children
        }
    }
}

export default ErrorBoundry