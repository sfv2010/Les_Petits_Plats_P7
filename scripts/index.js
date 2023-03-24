import { recipes } from "./data/recipes.js";
import { recipesFactory } from "./factories/recipesFactory.js";
//import { searchInMainBar } from "./utils/searchInMainBar.js";
import { showList } from "./utils/list.js";
import { displayTag } from "./utils/displayTag.js";
//import { closeTag } from "./utils/closeTag.js";

function displayData(recipes) {
    const recipeMain = document.querySelector("main");
    const ulIngredient = document.querySelector(".ulIngredient");
    const ulAppliance = document.querySelector(".ulAppliance");
    const ulUstensile = document.querySelector(".ulUstensile");

    let arrayIngredients = [];
    let arrayAppliances = [];
    let arrayUstensils = [];

    //Loop through the recipes array and create a list for each
    //list Ingredient
    recipes.forEach((recipe) => {
        recipe.ingredients.forEach((ingredientKey) => {
            arrayIngredients.push(ingredientKey.ingredient.toLowerCase());
        });

        // console.log(recipe.appliance);
        // arrayAppliances.push(recipe.applience);
        // console.log(arrayAppliances);

        const recipeInfo = recipesFactory(recipe);
        const recipeCardDOM = recipeInfo.getRecipeCardDOM();
        recipeMain.appendChild(recipeCardDOM);
    });
    for (let i in arrayIngredients) {
        arrayIngredients[i] =
            arrayIngredients[i].charAt(0).toUpperCase() +
            arrayIngredients[i].slice(1);
    }
    let sortIngredients = [...new Set(arrayIngredients)].sort();
    sortIngredients.forEach((ingredient, index) => {
        const listRecipe = document.createElement("li");
        listRecipe.classList.add("listRecipe");
        listRecipe.id = ingredient;
        listRecipe.textContent = ingredient;
        ulIngredient.appendChild(listRecipe);
    });

    //list Appliance
    recipes.forEach((recipe) => {
        arrayAppliances.push(recipe.appliance);
    });

    let sortAppliances = [...new Set(arrayAppliances)].sort();
    sortAppliances.forEach((appliance, index) => {
        const listRecipe = document.createElement("li");
        listRecipe.classList.add("listRecipe");
        listRecipe.value = index;
        listRecipe.textContent = appliance;
        ulAppliance.appendChild(listRecipe);
    });

    //list Ustensile
    recipes.forEach((recipe) => {
        recipe.ustensils.forEach((ustensilKey) => {
            arrayUstensils.push(ustensilKey);
        });
    });
    for (let i in arrayUstensils) {
        arrayUstensils[i] =
            arrayUstensils[i].charAt(0).toUpperCase() +
            arrayUstensils[i].slice(1);
    }

    let sortUstensiles = [...new Set(arrayUstensils)].sort();
    sortUstensiles.forEach((ustensile, index) => {
        const listRecipe = document.createElement("li");
        listRecipe.classList.add("listRecipe");
        listRecipe.id = index;
        listRecipe.textContent = ustensile;
        ulUstensile.appendChild(listRecipe);
    });
}
//Function to get and display recipe data
function init() {
    displayData(recipes);
}
init();

//searchInMainBar();
showList();

displayTag();
//closeTag();
