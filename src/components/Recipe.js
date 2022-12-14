import React, {useContext} from 'react'
import IngredientList from './IngredientList'
import { recipeContext } from './App'

export default function Recipe(props){
    const {
        id,
        name,
        servings,
        cookTime,
        instructions,
        ingredients
    } = props
    
    const { handleDeleteRecipe, handleSelectRecipe } = useContext( recipeContext )
    return (
        <>
            <div>
                <h3>{ name }</h3>
                <div>
                    <button onClick={()=>{ handleSelectRecipe(id) }}>Edit</button>
                    <button onClick={()=>{handleDeleteRecipe(id)}}>Delete</button>
                </div>
            </div>
            <div>
                <span>Cook Time: </span>
                <span>{ cookTime }</span>
            </div>
            <div>
                <span>Servings: </span>
                <span>{ servings }</span>
            </div>
            <div>
                <span>Instructions:</span>
                <div>
                    { instructions }
                </div>
            </div>
            <div>
                <span>Ingredients</span>
                <div><IngredientList ingredients = { ingredients } /></div>
            </div>
        </>
    )
}