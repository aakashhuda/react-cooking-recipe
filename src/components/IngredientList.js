import React from 'react'
import Ingredient from './Ingredient'

export default function IngredientList({ ingredients }) {
    const ingredientElement = ingredients.map(ing => {
        return <Ingredient key={ing.id} {...ing} />
    })
    return (
        <div>{ ingredientElement }</div>
    )
}