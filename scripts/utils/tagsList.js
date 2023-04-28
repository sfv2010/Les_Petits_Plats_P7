import { capitalize } from "./util.js";
import { toggleTag } from "./displayTag.js";

function createList(name, names, ul, recipes) {
    const listRecipe = document.createElement("li");
    listRecipe.classList.add("listRecipe");
    listRecipe.classList.add(names);
    listRecipe.textContent = name;
    listRecipe.tabIndex = "0";
    listRecipe.addEventListener("click", (e) => toggleTag(e, names, recipes));
    ul.appendChild(listRecipe);
}

//Loop through the recipes array and create a list for each
//list Ingredient
export function displayIngredientsTagsList(recipes) {
    const targetTags = document.querySelectorAll(".tag.target.ingredients");
    const ulIngredient = document.querySelector(".ulIngredient");
    //When selected in the list
    let arrayIngredients = [];

    for (let i = 0; i < recipes.length; i++) {
        const recipe = recipes[i];

        for (let j = 0; j < recipe.ingredients.length; j++) {
            const ingredientKey = recipe.ingredients[j];

            let isMatchFound = false;

            for (let k = 0; k < targetTags.length; k++) {
                const tag = targetTags[k];

                if (
                    tag.textContent
                        .toLowerCase()
                        .includes(ingredientKey.ingredient.toLowerCase())
                ) {
                    isMatchFound = true;
                    break;
                }
            }

            if (!isMatchFound) {
                arrayIngredients.push(ingredientKey.ingredient.toLowerCase());
            }
        }
    }

    // recipes.forEach((recipe) => {
    //     recipe.ingredients.forEach((ingredientKey) => {
    //         // If matching tag is not found, add ingredient name to the array
    //         if (
    //             !Array.from(targetTags).find((tag) => {
    //                 return tag.textContent
    //                     .toLowerCase()
    //                     .includes(ingredientKey.ingredient.toLowerCase());
    //             })
    //         )
    //             arrayIngredients.push(ingredientKey.ingredient.toLowerCase());
    //     });
    // });

    capitalize(arrayIngredients);
    let sortIngredients = [...new Set(arrayIngredients)].sort();
    ulIngredient.textContent = "";

    sortIngredients.forEach((ingredient) => {
        createList(ingredient, "ingredients", ulIngredient, recipes);
    });
}

//list Appliance
export function displayAppliancesTagsList(recipes) {
    const targetTags = document.querySelectorAll(".tag.target.appliances");
    const ulAppliance = document.querySelector(".ulAppliance");

    let arrayAppliances = [];
    recipes.forEach((recipe) => {
        if (
            !Array.from(targetTags).find((tag) => {
                return tag.textContent
                    .toLowerCase()
                    .includes(recipe.appliance.toLowerCase());
            })
        )
            arrayAppliances.push(recipe.appliance);
    });

    let sortAppliances = [...new Set(arrayAppliances)].sort();
    ulAppliance.textContent = "";

    sortAppliances.forEach((appliance) => {
        createList(appliance, "appliances", ulAppliance);
    });
}

export function displayUstensilesTagsList(recipes) {
    const targetTags = document.querySelectorAll(".tag.target.ustensiles");
    const ulUstensile = document.querySelector(".ulUstensile");
    let arrayUstensils = [];

    recipes.forEach((recipe) => {
        recipe.ustensils.forEach((ustensil) => {
            if (
                !Array.from(targetTags).find((tag) => {
                    return tag.textContent
                        .toLowerCase()
                        .includes(ustensil.toLowerCase());
                })
            )
                arrayUstensils.push(ustensil.replace(/[(]\d[)]/gi, ""));
        });
    });

    //list Ustensile
    capitalize(arrayUstensils);
    let sortUstensiles = [...new Set(arrayUstensils)].sort();
    ulUstensile.textContent = "";

    sortUstensiles.forEach((ustensile) => {
        createList(ustensile, "ustensiles", ulUstensile);
    });
}
