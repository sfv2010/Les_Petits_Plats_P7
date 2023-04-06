import {
    displayMainData,
    displayIngredientData,
    displayApplianceData,
    displayUstensileData,
} from "../index.js";
export function searchInMainBar(recipes) {
    const input = document.querySelector("#search");
    const main = document.querySelector("main");
    const noFound = document.createElement("div");
    const ulIngredient = document.querySelector(".ulIngredient");
    const ulAppliance = document.querySelector(".ulAppliance");
    const ulUstensile = document.querySelector(".ulUstensile");

    //Search based on input value
    input.addEventListener("keyup", function (e) {
        const searchInput = e.target.value.toLowerCase();
        main.textContent = "";
        ulIngredient.textContent = "";
        ulAppliance.textContent = "";
        ulUstensile.textContent = "";
        let searchArray = [];
        //noFound.textContent = "";

        if (searchInput.length >= 3) {
            recipes.forEach((recipe) => {
                (recipe.name.toLowerCase().includes(searchInput) ||
                    recipe.ingredients.forEach((ingredients) => {
                        ingredients.ingredient
                            .toLowerCase()
                            .includes(searchInput);
                    }) ||
                    recipe.description.toLowerCase().includes(searchInput)) &&
                    searchArray.push(recipe);
            });
            if (searchArray.length === 0) {
                noFound.textContent =
                    " Aucune recette ne correspond à votre critère… vous pouvez chercher  « tarte aux pommes », « poisson », etc.";
                noFound.classList.add("noFound");
                main.appendChild(noFound);
            } else {
                noFound.textContent = "";
                displayMainData(searchArray);
                displayIngredientData(searchArray);
                displayApplianceData(searchArray);
                displayUstensileData(searchArray);
            }
        } else {
            displayMainData(recipes);
            displayIngredientData(recipes);
            displayApplianceData(recipes);
            displayUstensileData(recipes);
        }
    });
    //Initialize the screen when pressing the cross button of input
    input.addEventListener("search", function () {
        main.textContent = "";
        ulIngredient.textContent = "";
        ulAppliance.textContent = "";
        ulUstensile.textContent = "";
        displayMainData(recipes);
        displayIngredientData(recipes);
        displayApplianceData(recipes);
        displayUstensileData(recipes);
    });
}

//-------------------------------------
// import {
//     displayMainData,
//     displayIngredientData,
//     displayApplianceData,
//     displayUstensileData,
// } from "../index.js";
// export function searchInMainBar(recipes) {
//     const input = document.querySelector("#search");
//     const main = document.querySelector("main");
//     const noFound = document.createElement("div");
//     const ulIngredient = document.querySelector(".ulIngredient");
//     const ulAppliance = document.querySelector(".ulAppliance");
//     const ulUstensile = document.querySelector(".ulUstensile");

//const targets = document.querySelectorAll(".target");
// const listItems = document.querySelectorAll(".listRecipe");
//console.log(targets);
// listItems.forEach((item) => {
//     item.addEventListener("click", function (e) {
//         const searchListItem = e.target.textContent.toLowerCase();
//         console.log(e.target);
//         main.textContent = "";
//         ulIngredient.textContent = "";
//         ulAppliance.textContent = "";
//         ulUstensile.textContent = "";
//         let itemArray = [];

//         if (searchListItem) {
//             recipes.forEach((recipe) => {
//                 (recipe.name.toLowerCase().includes(searchListItem) ||
//                     recipe.ingredients.forEach((ingredients) => {
//                         ingredients.ingredient.includes(searchListItem);
//                     }) ||
//                     recipe.description
//                         .toLowerCase()
//                         .includes(searchListItem)) &&
//                     itemArray.push(recipe);
//             });
//             if (itemArray.length === 0) {
//                 noFound.textContent =
//                     " Aucune recette ne correspond à votre critère… vous pouvez chercher  « tarte aux pommes », « poisson », etc.";
//                 noFound.classList.add("noFound");
//                 main.appendChild(noFound);
//             } else {
//                 console.log(itemArray);
//                 displayMainData(itemArray);
//                 displayIngredientData(itemArray);
//                 displayApplianceData(itemArray);
//                 displayUstensileData(itemArray);
//                 console.log(itemArray);
//             }
//         } else {
//             main.textContent = "";
//             ulIngredient.textContent = "";
//             ulAppliance.textContent = "";
//             ulUstensile.textContent = "";
//             displayMainData(recipes);
//             displayIngredientData(recipes);
//             displayApplianceData(recipes);
//             displayUstensileData(recipes);
//         }
//     });
// });

//     //Search based on input value
//     input.addEventListener("keyup", function (e) {
//         const searchInput = e.target.value.toLowerCase();
//         main.textContent = "";
//         ulIngredient.textContent = "";
//         ulAppliance.textContent = "";
//         ulUstensile.textContent = "";
//         let searchArray = [];
//         //noFound.textContent = "";

//         if (searchInput.length >= 3) {
//             recipes.forEach((recipe) => {
//                 (recipe.name
//                     .toLowerCase()
//                     .includes(searchInput.toLowerCase()) ||
//                     recipe.ingredients.forEach((ingredients) => {
//                         ingredients.ingredient
//                             .toLowerCase()
//                             .includes(searchInput.toLowerCase());
//                     }) ||
//                     recipe.description
//                         .toLowerCase()
//                         .includes(searchInput.toLowerCase())) &&
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
//     //Initialize the screen when pressing the cross button of input
//     input.addEventListener("search", function (e) {
//         main.textContent = "";
//         ulIngredient.textContent = "";
//         ulAppliance.textContent = "";
//         ulUstensile.textContent = "";
//         displayMainData(recipes);
//         displayIngredientData(recipes);
//         displayApplianceData(recipes);
//         displayUstensileData(recipes);
//     });
// }
