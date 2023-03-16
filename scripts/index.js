import { recipes } from "./data/recipes.js";
import { recipesFactory } from "./recipesFactory.js";
import { searchInput } from "./search.js";

function displayData(recipes) {
    const recipeMain = document.querySelector("main");
    //Loop through the recipes array and create a card for each
    recipes.forEach((recipe) => {
        const recipeInfo = recipesFactory(recipe);
        const recipeCardDOM = recipeInfo.getRecipeCardDOM();
        recipeMain.appendChild(recipeCardDOM);
    });
}
//Function to get and display recipe data
function init() {
    displayData(recipes);
}
init();

searchInput();
