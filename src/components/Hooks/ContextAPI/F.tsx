import React, { Component } from 'react'
import { SuperHeroConsumer } from './SuperHeroContext'

export class F extends Component {
    render() {
        return (
            <SuperHeroConsumer>
                {(superHero) => <div>F component: {superHero}</div>}
            </SuperHeroConsumer>)
    }
}

export default F