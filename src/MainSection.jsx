import React from "react";

export default function MainSection() {
  const [ingredients, setIngredients] = React.useState([]);

  const ingredientsListItems = ingredients.map((ingredient, index) => (
    <li className="ingredient-item" key={index}>
      {ingredient}
    </li>
  ));

  function addIngredient(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newIngredient = formData.get("ingredient");
    if (newIngredient.trim()) {
      setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
      event.target.reset();
    }
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
      {ingredients.length > 0 && (
        <section>
          <div className="ingredient-container">
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">
              {ingredientsListItems}
            </ul>
          </div>

          {ingredients.length > 3 && (
            <div className="get-recipe-container">
              <div>
                <h3>Ready for a recepie?</h3>
                <p>Generate a recepie from your list of ingredients.</p>
              </div>
              <button>Get a recepie</button>
            </div>
          )}
        </section>
      )}
    </main>
  );
}
