import React, {useContext} from 'react'
import IngredientEdit from './IngredientEdit'
import { recipeContext } from './App'

export default function RecipeEdit ({ recipe }) {
    const { handleDeSelectRecipe } = useContext(recipeContext)
    return (
        <div>
            <div>
                <span onClick={ handleDeSelectRecipe }>&times;</span>
            </div>
            <div>
                <label htmlFor='name'>Name</label>
                <input name="name" id="name" type="text" value={ recipe.name }/>
                <label htmlFor='time'>Cook Time</label>
                <input name="time" id="time" type="text" value={ recipe.cookTime }/>
                <label htmlFor='serving'>Servings</label>
                <input name="serving" id="serving" type="number" value={ recipe.servings } />
                <label htmlFor='instructions'>Instructions</label>
                <textarea name="insturctions" id="instructions" value={recipe.instructions} />
            </div>
            <div><h3>Ingredients</h3></div>
            <div>
                { 
                    recipe.ingredients.map(ingredient => {
                        return (
                            <div><IngredientEdit key= {ingredient.id} ingredient = {ingredient} /></div>
                        )
                    })
                }
            </div>
        </div>
    )
}