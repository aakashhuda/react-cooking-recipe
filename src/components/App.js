import '../css/App.css';
import RecipeList from './RecipeList';

import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'


function App() {
  const recipeList = [
    {
      id: 1,
      name: 'Plain Chicken',
      servings: 3,
      cookTime: '1:45',
      instructions: "1. Put salt on the Chicken \n2. Put chicken in oven \n3. Eat chicken",
      ingredients: [
        {
          id: 1,
          item: "Chicken",
          amount: "2 Pounds"
        },
        {
          id: 2,
          item: "Salt",
          amount: "1 Tbs"
        }
      ]
    },
    {
      id: 2,
      name: 'Plain Pork',
      servings: 3,
      cookTime: '0:45',
      instructions: "1. Put salt on the Pork \n2. Put pork in oven \n3. Eat pork",
      ingredients: [
        {
          id: 1,
          item: "Pork",
          amount: "3 Pounds"
        },
        {
          id: 2,
          item: "Paprika",
          amount: "2 Tbs"
        }
      ]
    },
  ]
  const [recipes, setRecipe] = useState(recipeList)

  function handleAddRecipe() {
    const newRecipe = {
      id: uuidv4(),
      name: 'Random Name',
      servings: 1,
      cookTime: '2:45',
      instructions: "1. Put salt on the Chicken \n2. Put chicken in oven \n3. Eat chicken",
      ingredients: [
        {
          id: 1,
          item: "Chicken",
          amount: "2 Pounds"
        },
        {
          id: 2,
          item: "Salt",
          amount: "1 Tbs"
        }
      ]
    }
    setRecipe(prevState=>{
      return (prevState.concat([newRecipe]))
    })
    // setRecipe([...recipes, newRecipe])
  }
  function handleDeleteRecipe(id){
    setRecipe(recipes.filter(recipe => recipe.id !== id))
  }

  return (
    <>
      <RecipeList 
      recipeList={ recipes }
      handleAddRecipe = { handleAddRecipe }
      handleDeleteRecipe = { handleDeleteRecipe }
      />
    </>
  );
}

export default App;
