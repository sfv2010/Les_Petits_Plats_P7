import { recipes } from "../data/recipes.js";
import { filterRecipeByTag } from "./filterRecipesByTags.js";
import {
    displayIngredientsTagsList,
    displayAppliancesTagsList,
    displayUstensilesTagsList,
} from "./tagsList.js";
import { emptyInput } from "./util.js";

// Function to filter recipes by value in the input
export function searchInMainBar() {
    // Get value input
    const input = document.querySelector("#search");
    const searchInput = input.value.toLowerCase();

    //Search based on input value
    const noFound = document.createElement("div");
    noFound.textContent = "";

    // Init a new array to keep recipes according to the input value
    let searchArray = [];

    //When entering characters into the input of main, if characters have already been entered into the tag input, delete them.
    emptyInput();

    // If length of the value is greather than 3
    if (searchInput.length >= 3) {
        // Filter the recipes in name, description and ingredients
        for (let i = 0; i < recipes.length; i++) {
            const recipe = recipes[i];
            //loop for description and name lists
            if (
                recipe.name.toLowerCase().includes(searchInput) ||
                recipe.description.toLowerCase().includes(searchInput)
            ) {
                searchArray.push(recipe);
            } else {
                for (let j = 0; j < recipe.ingredients.length; j++) {
                    //loop for ingredients lists
                    if (
                        recipe.ingredients[j].ingredient
                            .toLowerCase()
                            .includes(searchInput)
                    )
                        searchArray.push(recipe);
                }
            }
        }

        // If we have no recipes, display an error message
        if (searchArray.length === 0) {
            const main = document.querySelector("main");
            main.innerHTML = "";
            noFound.textContent =
                " Aucune recette ne correspond à votre critère… vous pouvez chercher  « tarte aux pommes », « poisson », etc.";
            noFound.classList.add("noFound");
            main.appendChild(noFound);
        } else {
            // Else, filter the tags lists in the dropdowns and filter these recipes by tags
            displayIngredientsTagsList(searchArray);
            displayAppliancesTagsList(searchArray);
            displayUstensilesTagsList(searchArray);

            filterRecipeByTag(searchArray);
        }
    } else {
        displayIngredientsTagsList(recipes);
        displayAppliancesTagsList(recipes);
        displayUstensilesTagsList(recipes);

        filterRecipeByTag();
    }
}
