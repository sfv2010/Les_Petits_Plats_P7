import { recipes } from "./data/recipes.js";
import { recipesFactory } from "./factories/recipesFactory.js";
import { searchInMainBar } from "./utils/searchInMainBar.js";
import { openCloseList } from "./utils/openCloseList.js";
import { displayTag } from "./utils/displayTag.js";

//Function to capitalize first letter
function capitalize(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    }
}
//display recipes cards
export function displayMainData(recipes) {
    const main = document.querySelector("main");
    recipes.forEach((recipe) => {
        const recipeInfo = recipesFactory(recipe);
        const recipeCardDOM = recipeInfo.getRecipeCardDOM();
        main.appendChild(recipeCardDOM);
    });
}
//Loop through the recipes array and create a list for each
//list Ingredient
export function displayIngredientData(recipes) {
    const ulIngredient = document.querySelector(".ulIngredient");
    let arrayIngredients = [];
    recipes.forEach((recipe) => {
        recipe.ingredients.forEach((ingredientKey) => {
            arrayIngredients.push(ingredientKey.ingredient.toLowerCase());
        });
    });
    capitalize(arrayIngredients);
    let sortIngredients = [...new Set(arrayIngredients)].sort();
    console.log(sortIngredients);
    sortIngredients.forEach((ingredient) => {
        const listRecipe = document.createElement("li");
        listRecipe.classList.add("listRecipe");
        listRecipe.classList.add("ingredients");
        listRecipe.textContent = ingredient;
        listRecipe.tabIndex = "0";
        ulIngredient.appendChild(listRecipe);
    });
    displayTag();
}
//list Appliance
export function displayApplianceData(recipes) {
    const ulAppliance = document.querySelector(".ulAppliance");
    let arrayAppliances = [];
    recipes.forEach((recipe) => {
        arrayAppliances.push(recipe.appliance);
    });
    let sortAppliances = [...new Set(arrayAppliances)].sort();
    sortAppliances.forEach((appliance) => {
        const listRecipe = document.createElement("li");
        listRecipe.classList.add("listRecipe");
        listRecipe.classList.add("appliances");
        listRecipe.textContent = appliance;
        listRecipe.tabIndex = "0";
        ulAppliance.appendChild(listRecipe);
    });
    displayTag();
}
export function displayUstensileeData(recipes) {
    const ulUstensile = document.querySelector(".ulUstensile");
    let arrayUstensils = [];
    recipes.forEach((recipe) => {
        recipe.ustensils.forEach((ustensilKey) => {
            arrayUstensils.push(ustensilKey.replace(/[^a-z]/gi, ""));
        });
    });
    //list Ustensile
    capitalize(arrayUstensils);
    let sortUstensiles = [...new Set(arrayUstensils)].sort();
    sortUstensiles.forEach((ustensile) => {
        const listRecipe = document.createElement("li");
        listRecipe.classList.add("listRecipe");
        listRecipe.classList.add("ustensiles");
        listRecipe.textContent = ustensile;
        listRecipe.tabIndex = "0";
        ulUstensile.appendChild(listRecipe);
    });
    displayTag();
}

//Function to get and display recipe data
displayMainData(recipes);
displayIngredientData(recipes);
displayApplianceData(recipes);
displayUstensileeData(recipes);

searchInMainBar(recipes);
openCloseList();
