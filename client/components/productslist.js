import React, { Component } from 'react'

export default class ProductsList extends Component {

    render() {
        return (
            <div>
                <div>{this.props.children}</div>
            </div>
        )
    }
}