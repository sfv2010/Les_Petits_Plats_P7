import { recipes } from "./data/recipes.js";
import { recipesFactory } from "./factories/recipesFactory.js";
import { searchInput } from "./utils/search.js";
import { showList } from "./utils/list.js";
import { listFactory } from "./factories/listFactory.js";

function displayData(recipes) {
    const recipeMain = document.querySelector("main");
    const divRecipe = document.getElementById("dropDownIngredient");
    //Loop through the recipes array and create a card for each
    recipes.forEach((recipe) => {
        const recipeInfo = recipesFactory(recipe);
        const recipeCardDOM = recipeInfo.getRecipeCardDOM();
        recipeMain.appendChild(recipeCardDOM);

        const recipeList = listFactory(recipe);
        const recipeListDOM = recipeList.getRecipeListDOM();
        divRecipe.appendChild(recipeListDOM);
    });
}
//Function to get and display recipe data
function init() {
    displayData(recipes);
}
init();

searchInput();
showList();
