import React, { Component } from 'react'

export default class Title extends Component {
    constructor(props) {
        super(props)

        this.state = {
            initialTitle: props.initialTitle
        }
    }
    render(){
        return (
            <>
                <h1>{this.state.initialTitle}</h1>
            </>
        )
    }
}