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

    //When entering characters into the input of main, if characters have already been entered into the tag input, delete them.
    emptyInput();

    // Init a new array to keep recipes according to the input value
    let searchArray = [];

    // If length of the value is greather than 3
    if (searchInput.length >= 3) {
        // Filter the recipes in name, description and ingredients
        recipes.forEach((recipe) => {
            if (
                recipe.name.toLowerCase().includes(searchInput) ||
                recipe.ingredients.find((ingredients) => {
                    return ingredients.ingredient
                        .toLowerCase()
                        .includes(searchInput);
                }) ||
                recipe.description.toLowerCase().includes(searchInput)
            )
                searchArray.push(recipe);
        });

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

// import {
//     displayMainData,
//     displayIngredientData,
//     displayApplianceData,
//     displayUstensileData,
// } from "../index.js";
// // Function to filter recipes by value in the input
// export function searchInMainBar(recipes) {
//     // Get value input
//     const input = document.querySelector("#search");
//     const searchInput = input.value.toLowerCase();

//     const main = document.querySelector("main");
//     const noFound = document.createElement("div");
//     const ulIngredient = document.querySelector(".ulIngredient");
//     const ulAppliance = document.querySelector(".ulAppliance");
//     const ulUstensile = document.querySelector(".ulUstensile");

//     //Search based on input value
//     input.addEventListener("keyup", function () {
//         //const searchInput = e.target.value.toLowerCase();
//         main.textContent = "";
//         ulIngredient.textContent = "";
//         ulAppliance.textContent = "";
//         ulUstensile.textContent = "";
//         let searchArray = [];
//         //noFound.textContent = "";

//         if (searchInput.length >= 3) {
//             recipes.forEach((recipe) => {
//                 if (
//                     recipe.name.toLowerCase().includes(searchInput) ||
//                     recipe.ingredients.find((ingredients) => {
//                         return ingredients.ingredient
//                             .toLowerCase()
//                             .includes(searchInput);
//                     }) ||
//                     recipe.description.toLowerCase().includes(searchInput)
//                 )
//                     searchArray.push(recipe);
//             });
//             if (searchArray.length === 0) {
//                 noFound.textContent =
//                     " Aucune recette ne correspond à votre critère… vous pouvez chercher  « tarte aux pommes », « poisson », etc.";
//                 noFound.classList.add("noFound");
//                 main.appendChild(noFound);
//             } else {
//                 noFound.textContent = "";
//                 displayMainData(searchArray);
//                 displayIngredientData(searchArray);
//                 displayApplianceData(searchArray);
//                 displayUstensileData(searchArray);
//             }
//         } else {
//             displayMainData(recipes);
//             displayIngredientData(recipes);
//             displayApplianceData(recipes);
//             displayUstensileData(recipes);
//         }
//     });
// }
