import React from 'react'

export default function IngredientEdit ({ingredient}) {
    return (
        <div>
            <label htmlFor="ingredient-name">Name</label>
            <input id="ingredient-name" type="text"  value={ingredient.item}/>
            <label htmlFor="ingredient-amount">Amount</label>
            <input id="ingredient-amount" type="text" value={ingredient.amount} />
            <br />
        </div>
    )
}