import React from 'react'
import Recipe from './Recipe'

export default function RecipeList({ recipeList, handleAddRecipe, handleDeleteRecipe }) {
    return (
        <>
            <div>
                {
                    recipeList.map(recipe => {
                        return <Recipe 
                                key={recipe.id} 
                                {...recipe}
                                handleDeleteRecipe={handleDeleteRecipe} 
                                />
                    })
                }
            </div>
            <button onClick={ handleAddRecipe } >Add Recipe</button>
        </>
    )
}