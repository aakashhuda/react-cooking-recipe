import '../css/App.css';
import React, { useState, useEffect } from 'react';
import RecipeList from './RecipeList';
import RecipeEdit from './RecipeEdit';

import { v4 as uuidv4 } from 'uuid';

export const recipeContext = React.createContext()
const LOCAL_STORAGE_KEY = "cookingWithReact"


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
  const recipeContextValue = {
    handleAddRecipe,
    handleDeleteRecipe,
    handleSelectRecipe,
    handleDeSelectRecipe
  }
  const [recipes, setRecipe] = useState(recipeList)
  const [selectedRecipeId, setSelectedRecipeId] = useState()
  const selectedRecipe = recipeList.find(recipe => recipe.id === selectedRecipeId)

  useEffect(()=>{
    const jsonItem = localStorage.getItem(LOCAL_STORAGE_KEY)
    if ( jsonItem != null ) {
      setRecipe(JSON.parse(jsonItem))
    }
  }, [])

  useEffect(()=>{
    setTimeout(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
    }, 100);
  }, [recipes])


  function handleSelectRecipe(id) {
    setSelectedRecipeId(id)
  }

  function handleDeSelectRecipe(id){
    setSelectedRecipeId()
  }

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
    <recipeContext.Provider value={recipeContextValue}>
      <RecipeList recipeList={ recipes }/>
      <br />
      { selectedRecipe && <RecipeEdit recipe={ selectedRecipe } />}
    </recipeContext.Provider>
  );
}

export default App;
