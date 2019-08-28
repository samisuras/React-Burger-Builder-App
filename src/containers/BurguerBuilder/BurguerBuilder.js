import React, { Component } from 'react'

import Burger from '../../components/Burguer/Burger';

export default class BurguerBuilder extends Component {
    render() {
        return (
            <div>
                <Burger/>
                <div>Build Controls</div>
            </div>
        )
    }
}
