import React from 'react'

const IngredientsList = (props) => {
    const ingredientsListItems = props.ingredients.map((ingredient, index) => (
        <li className="ingredient-item" key={index}>
          {ingredient}
        </li>
      ));
  return (
    <section>
          <div className="ingredient-container">
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">
              {ingredientsListItems}
            </ul>
          </div>

          {props.ingredients.length > 3 && (
            <div className="get-recipe-container">
              <div>
                <h3>Ready for a recepie?</h3>
                <p>Generate a recepie from your list of ingredients.</p>
              </div>
              <button onClick={props.getRecepie}>Get a recepie</button>
            </div>
          )}
        </section>
  )
}

export default IngredientsList