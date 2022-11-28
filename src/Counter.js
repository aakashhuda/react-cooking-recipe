import React, {Component} from 'react'
import { ThemeContext } from './App'

export default class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: this.props.initialValue
        }
    }
    render() {
        return (
            <ThemeContext.Consumer>
              {( style => {
                return (
                    <div className="container">
                    <button style={style} className="btn btn-minus" onClick = { ()=> this.changeCounter(-1) }>-</button>
                    <span className="display">{ this.state.counter }</span>
                    <button style={style} className="btn btn-plus" onClick = { ()=> this.changeCounter(1) }>+</button>
                </div>
                )
              })}  
            </ThemeContext.Consumer>
        )
    }

    changeCounter(amount) {
        this.setState(prevState=>{
            return {counter: prevState.counter + amount}
        })
    }
}