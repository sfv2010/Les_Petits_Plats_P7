import { recipesFactory } from "../factories/recipesFactory.js";

//display recipes cards
export function displayRecipes(recipes) {
  const main = document.querySelector("main");
  // Empty the recipes already diplayed
  main.textContent = "";

  recipes.forEach((recipe) => {
    const recipeInfo = recipesFactory(recipe);
    const recipeCardDOM = recipeInfo.getRecipeCardDOM();
    main.appendChild(recipeCardDOM);
  });
}
