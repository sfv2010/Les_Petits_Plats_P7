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

    // Make a copy of recipes array
    let filteredRecipes = [...recipesData];

    // Filter the recipes by selected tags and reduce the filteredRecipes array according to the selected tags
    selectedIngredientsTags.forEach((tag) => {
        filteredRecipes = filteredRecipes.filter((recipe) => {
            if (
                recipe.ingredients.findIndex((ingredient) =>
                    ingredient.ingredient
                        .toLowerCase()
                        .includes(tag.textContent.toLowerCase())
                ) > -1
            ) {
                return true;
            }
        });
    });

    selectedAppliancesTags.forEach((tag) => {
        filteredRecipes = filteredRecipes.filter((recipe) => {
            if (
                recipe.appliance
                    .toLowerCase()
                    .includes(tag.textContent.toLowerCase())
            ) {
                return true;
            }
        });
    });

    selectedUstensilsTags.forEach((tag) => {
        filteredRecipes = filteredRecipes.filter((recipe) => {
            if (
                recipe.ustensils.findIndex((ustensil) =>
                    ustensil
                        .toLowerCase()
                        .includes(tag.textContent.toLowerCase())
                ) > -1
            ) {
                return true;
            }
        });
    });

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
