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
        // noFound.textContent = "";
        if (searchInput.length >= 3) {
            for (let i = 0; i < recipes.length; i++) {
                recipes[i].name.toLowerCase().includes(searchInput) ||
                    // //for (let j = 0; j < recipes.length; j++) {
                    // recipes[i].ingredients[i].ingredient
                    //     .toLowerCase()
                    //     .includes(searchInput) ||
                    (recipes[i].description
                        .toLowerCase()
                        .includes(searchInput) &&
                        searchArray.push(recipes[i]));
            }

            if (searchArray.length === 0) {
                noFound.textContent =
                    " Aucune recette ne correspond à votre critère… vous pouvez chercher  « tarte aux pommes », « poisson », etc.";
                noFound.classList.add("noFound"), main.appendChild(noFound);
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
