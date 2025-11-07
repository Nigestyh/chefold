import React from "react";
import IngredientList from "./chefClaudeComponents/ingredientList";
import ClaudeRecipe from "./chefClaudeComponents/ClaudeRecipe";
import getRecipeFromIngredients from "./api/fetchRecipe";

function Main() {
  const [ingredients, setIngredients] = React.useState([]);

  const [recipe, setRecipe] = React.useState("");

  async function fetchSuggestedRecipe() {
    const suggestedRecipe = await getRecipeFromIngredients(ingredients);
    setRecipe(suggestedRecipe);
  }

  function addIngredient(formData) {
    const newIngredients = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredients]);
  }

  return (
    <main>
      <form action={addIngredient} className="input-ingredient">
        <input
          type="text"
          placeholder="e.g. lettuce "
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      {ingredients.length > 0 && (
        <IngredientList
          ingredients={ingredients}
          getRecipe={fetchSuggestedRecipe}
        />
      )}
      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}

export default Main;
