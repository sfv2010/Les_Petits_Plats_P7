import { recipes } from "./data/recipes.js";
import { recipesFactory } from "./recipesFactory.js";

function displayData(recipes) {
    const recipeMain = document.querySelector("main");
    //Loop through the recipes array and create a card for each
    recipes.forEach((recipe) => {
        const recipeInfo = recipesFactory(recipe);
        //create each recipe in a Dom element
        const recipeCardDOM = recipeInfo.getRecipeCardDOM();
        recipeMain.appendChild(recipeCardDOM);
    });
}
//Function to get and display recipe data
function init() {
    console.log(recipes);
    displayData(recipes);
}
init();
