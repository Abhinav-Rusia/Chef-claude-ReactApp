import React from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "../ai";

export default function MainSection() {
  const [ingredients, setIngredients] = React.useState([]);
  const [recepie, setRecepie] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  function addIngredient(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newIngredient = formData.get("ingredient");
    if (newIngredient.trim()) {
      setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
      event.target.reset();
    }
  }

  async function getRecepie() {
    setIsLoading(true); // Start loading
    try {
      const recepieMarkdown = await getRecipeFromMistral(ingredients);
      setRecepie(recepieMarkdown); // Update recipe
    } catch (error) {
      alert("Error fetching recipe:", error);
    } finally {
      setIsLoading(false); // Stop loading
    }
  }

  return (
    <main>
      {/* Always show the form */}
      <form onSubmit={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
          required
        />
        <button type="submit">Add ingredient</button>
      </form>

      {/* Always show the IngredientsList if ingredients exist */}
      {ingredients.length > 0 && (
        <IngredientsList getRecepie={getRecepie} ingredients={ingredients} />
      )}

      {/* Show loader or recipe based on API call status */}
      {(isLoading || recepie) && (
        <ClaudeRecipe recepie={recepie} isLoading={isLoading} />
      )}
    </main>
  );
}
