import React, { Component } from 'react'

export class Child extends Component {

    componentWillUnmount(): void {
        console.log("Child componentWillUnmount")
    }

  render() {
    console.log("render")
    return (
      <h4>Child</h4>
    )
  }
}

export default Child