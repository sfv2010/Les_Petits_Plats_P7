import { recipes } from "../data/recipes.js";
import { displayRecipes } from "./displayRecipes.js";
import {
    displayIngredientsTagsList,
    displayAppliancesTagsList,
    displayUstensilesTagsList,
} from "./tagsList.js";

// This function filters the recipes according to the selected tags
export function filterRecipeByTag(recipesData = recipes) {
    // Get all selected tags
    const selectedIngredientsTags = Array.from(
        document.getElementsByClassName("tag target ingredients")
    );
    const selectedAppliancesTags = Array.from(
        document.getElementsByClassName("tag target appliances")
    );
    const selectedUstensilsTags = Array.from(
        document.getElementsByClassName("tag target ustensiles")
    );
    console.log(selectedIngredientsTags);

    // Make a copy of recipes array
    let filteredRecipes = [...recipesData];

    // Filter the recipes by selected tags and reduce the filteredRecipes array according to the selected tags

    //-----------Ingredient-----------
    for (let i = 0; i < selectedIngredientsTags.length; i++) {
        const tag = selectedIngredientsTags[i];
        const filteredRecipesCopy = [];

        //loop for recipes
        for (let j = 0; j < filteredRecipes.length; j++) {
            const recipe = filteredRecipes[j];
            let isIngredientFound = false;
            //loop for ingredients
            for (let k = 0; k < recipe.ingredients.length; k++) {
                const ingredient =
                    recipe.ingredients[k].ingredient.toLowerCase();
                if (ingredient.includes(tag.textContent.toLowerCase())) {
                    isIngredientFound = true;
                    break;
                }
            }

            if (isIngredientFound) {
                filteredRecipesCopy.push(recipe);
            }
        }

        filteredRecipes = filteredRecipesCopy;
    }

    //-----------Appliance-----------

    for (let i = 0; i < selectedAppliancesTags.length; i++) {
        const tag = selectedAppliancesTags[i];
        const filteredRecipesCopy = [];

        for (let j = 0; j < filteredRecipes.length; j++) {
            const recipe = filteredRecipes[j];
            if (
                recipe.appliance
                    .toLowerCase()
                    .includes(tag.textContent.toLowerCase())
            ) {
                filteredRecipesCopy.push(recipe);
            }
        }

        filteredRecipes = filteredRecipesCopy;
    }

    //-----------Ustensile-----------
    for (let i = 0; i < selectedUstensilsTags.length; i++) {
        const tag = selectedUstensilsTags[i];
        const filteredRecipesCopy = [];

        for (let j = 0; j < filteredRecipes.length; j++) {
            const recipe = filteredRecipes[j];
            let isUstensileFound = false;
            for (let k = 0; k < recipe.ustensils.length; k++) {
                const ustensil = recipe.ustensils[k].toLowerCase();
                if (ustensil.includes(tag.textContent.toLowerCase())) {
                    isUstensileFound = true;
                    break;
                }
            }
            if (isUstensileFound) {
                filteredRecipesCopy.push(recipe);
            }
        }

        filteredRecipes = filteredRecipesCopy;
    }

    // Display the filtered recipes
    displayRecipes(filteredRecipes);

    // Filter and display the tags lists
    const ulIngredient = document.querySelector(".ulIngredient");
    ulIngredient.textContent = "";
    displayIngredientsTagsList(filteredRecipes);

    const ulAppliance = document.querySelector(".ulAppliance");
    ulAppliance.textContent = "";
    displayAppliancesTagsList(filteredRecipes);

    const ulUstensile = document.querySelector(".ulUstensile");
    ulUstensile.textContent = "";
    displayUstensilesTagsList(filteredRecipes);
}
