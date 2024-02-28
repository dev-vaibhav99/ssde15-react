import React, { Component } from 'react'
import { SuperHeroConsumer } from './SuperHeroContext'

export class A extends Component {
    render() {
        return (
            <SuperHeroConsumer>
                {
                    (superHero) => { return <div>A component: {superHero}</div> }
                }
            </SuperHeroConsumer>
        )
    }
}

export default A