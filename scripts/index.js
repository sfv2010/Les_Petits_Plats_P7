import { recipes } from "./data/recipes.js";
import { recipesFactory } from "./factories/recipesFactory.js";
//import { searchInMainBar } from "./utils/searchInMainBar.js";
import { showList } from "./utils/list.js";
import { displayTag } from "./utils/displayTag.js";

function displayData(recipes) {
    const recipeMain = document.querySelector("main");
    const ulIngredient = document.querySelector(".ulIngredient");
    const ulAppliance = document.querySelector(".ulAppliance");
    const ulUstensile = document.querySelector(".ulUstensile");

    let arrayIngredients = [];
    let arrayAppliances = [];
    let arrayUstensils = [];

    function capitalize(array) {
        for (let i = 0; i < array.length; i++) {
            array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
        }
    }

    //Loop through the recipes array and create a list for each
    //list Ingredient
    recipes.forEach((recipe) => {
        recipe.ingredients.forEach((ingredientKey) => {
            arrayIngredients.push(
                ingredientKey.ingredient.toLowerCase().replace(/s\b/, "")
            );
        });

        // console.log(recipe.appliance);
        // arrayAppliances.push(recipe.applience);
        // console.log(arrayAppliances);

        const recipeInfo = recipesFactory(recipe);
        const recipeCardDOM = recipeInfo.getRecipeCardDOM();
        recipeMain.appendChild(recipeCardDOM);
    });
    capitalize(arrayIngredients);
    let sortIngredients = [...new Set(arrayIngredients)].sort();
    sortIngredients.forEach((ingredient, index) => {
        const listRecipe = document.createElement("li");
        listRecipe.classList.add("listRecipe");
        listRecipe.classList.add("ingredients");
        listRecipe.id = `ingredient${index}`;
        listRecipe.textContent = ingredient;
        listRecipe.tabIndex = "0";
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
        listRecipe.classList.add("appliances");
        listRecipe.id = `appliance${index}`;
        listRecipe.textContent = appliance;
        listRecipe.tabIndex = "0";
        ulAppliance.appendChild(listRecipe);
    });

    //list Ustensile
    recipes.forEach((recipe) => {
        recipe.ustensils.forEach((ustensilKey) => {
            arrayUstensils.push(ustensilKey.replace(/[^a-z]/gi, ""));
        });
    });
    capitalize(arrayUstensils);

    let sortUstensiles = [...new Set(arrayUstensils)].sort();
    sortUstensiles.forEach((ustensile, index) => {
        const listRecipe = document.createElement("li");
        listRecipe.classList.add("listRecipe");
        listRecipe.classList.add("ustensiles");
        listRecipe.id = `ustensile${index}`;
        listRecipe.textContent = ustensile;
        listRecipe.tabIndex = "0";
        ulUstensile.appendChild(listRecipe);
    });
}
//Function to get and display recipe data
function init() {
    displayData(recipes);
}
init();

// searchInMainBar();
showList();

displayTag();
