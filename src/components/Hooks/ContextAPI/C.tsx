import React, { Component } from 'react'
import { SuperHeroConsumer } from './SuperHeroContext'

export class C extends Component {
    render() {
        return (
            <SuperHeroConsumer>
                { (superHero) => <div>C component: {superHero}</div>}
            </SuperHeroConsumer>
        )
    }
}

export default C