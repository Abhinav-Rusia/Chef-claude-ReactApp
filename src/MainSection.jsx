import React from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "../ai";


export default function MainSection() {
  const [ingredients, setIngredients] = React.useState([]);

  const [recepie , setRecepie] = React.useState(false)

  function addIngredient(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newIngredient = formData.get("ingredient");
    if (newIngredient.trim()) {
      setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
      event.target.reset();
    }
  }

 async function getRecepie(){
  const recepieMarkdown = await getRecipeFromMistral(ingredients)
  setRecepie(recepieMarkdown);
  
}

  return (
    <main>
      <form onSubmit={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
          required // Ensure the input isn't empty
        />
        <button type="submit">Add ingredient</button>
      </form>
      {ingredients.length > 0 && <IngredientsList
      getRecepie = {getRecepie}
      ingredients = {ingredients}
      />}

      {recepie ? <ClaudeRecipe recepie = {recepie} /> : null }
    </main>
  );
}








