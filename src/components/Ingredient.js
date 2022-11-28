import React from 'react'

export default function Ingredient(props) {
    const {item, amount} = props
    return (
        <div>
            <span>{item}: </span>
            <span>{amount}</span>
        </div>
    )
}