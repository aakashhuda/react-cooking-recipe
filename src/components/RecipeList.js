import React, { useContext } from 'react'
import Recipe from './Recipe'
import { recipeContext } from './App'

export default function RecipeList({ recipeList }) {
    const { handleAddRecipe } = useContext(recipeContext)
    return (
        <>
            <div>
                {
                    recipeList.map(recipe => {
                        return <Recipe 
                                key={recipe.id} 
                                {...recipe} 
                                />
                    })
                }
            </div>
            <button onClick={ handleAddRecipe } >Add Recipe</button>
        </>
    )
}