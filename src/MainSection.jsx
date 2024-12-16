import React from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";


export default function MainSection() {
  const [ingredients, setIngredients] = React.useState([]);

  const [recepieShown , setRecepieShown] = React.useState(false)

  function addIngredient(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newIngredient = formData.get("ingredient");
    if (newIngredient.trim()) {
      setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
      event.target.reset();
    }
  }

  function toggleRecepie(){
    setRecepieShown((prevState)=> !prevState)
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
      toggleRecepie = {toggleRecepie}
      ingredients = {ingredients}
      />}

      {recepieShown ? <ClaudeRecipe/> : null }
    </main>
  );
}








