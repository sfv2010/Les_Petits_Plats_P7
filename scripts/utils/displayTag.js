import {
    displayMainData,
    displayIngredientData,
    displayApplianceData,
    displayUstensileData,
} from "../index.js";
import { searchByInputKeyword } from "./searchByInputKeyword.js";
import { recipes } from "../data/recipes.js";

export function displayTag(recipesData, type) {
    const originalRecipeData = recipes;
    const listRecipes = document.querySelectorAll(`.listRecipe.${type}`);
    const tagsContainer = document.querySelector(".tagsContainer");

    //Functions to show(create), close, Sort tags
    function toggleTag(e) {
        //Create tag
        const searchByTag = e.target.textContent;
        function createTag(className) {
            const tagRecipe = document.createElement("span");
            tagRecipe.classList.add("tag");
            tagRecipe.textContent = searchByTag;
            tagRecipe.tabIndex = "0";
            tagRecipe.classList.add("target");
            tagRecipe.classList.add(className);
            tagsContainer.appendChild(tagRecipe);
            return tagRecipe;
        }

        if (e.target.classList.value === "listRecipe ingredients") {
            createTag("ingredients");
        } else if (e.target.classList.value === "listRecipe appliances") {
            createTag("appliances");
        } else if (e.target.classList.value === "listRecipe ustensiles") {
            createTag("ustensiles");
        }

        //Sort the corresponding recipe when selecting from the list
        const main = document.querySelector("main");
        const ulIngredient = document.querySelector(".ulIngredient");
        const ulAppliance = document.querySelector(".ulAppliance");
        const ulUstensile = document.querySelector(".ulUstensile");

        //Put all the selected tags into an array
        const targets = document.querySelectorAll(".target");
        let getTargetTag = [];

        targets.forEach((target) => {
            getTargetTag.push(target.textContent.toLowerCase());
        });
        const itemArray = [];
        //console.log(searchByTag);
        //console.log(itemArray);
        recipesData.forEach((recipe) => {
            if (
                recipe.name.toLowerCase().includes(searchByTag.toLowerCase()) ||
                recipe.ingredients.find((ingredients) => {
                    return ingredients.ingredient
                        .toLowerCase()
                        .includes(searchByTag.toLowerCase());
                }) ||
                recipe.description
                    .toLowerCase()
                    .includes(searchByTag.toLowerCase()) ||
                recipe.appliance
                    .toLowerCase()
                    .includes(searchByTag.toLowerCase()) ||
                recipe.ustensils.find((ustensil) => {
                    return ustensil
                        .toLowerCase()
                        .includes(searchByTag.toLowerCase());
                })
            )
                itemArray.push(recipe);
        });

        main.textContent = "";
        ulIngredient.textContent = "";
        ulAppliance.textContent = "";
        ulUstensile.textContent = "";
        displayMainData(itemArray);
        displayIngredientData(itemArray);
        displayApplianceData(itemArray);
        displayUstensileData(itemArray);

        //Close tag
        function closeTag(e) {
            const targetToClose = e.target;
            e.target.remove();
            main.textContent = "";
            ulIngredient.textContent = "";
            ulAppliance.textContent = "";
            ulUstensile.textContent = "";
            displayMainData(recipesData);
            displayIngredientData(recipesData);
            displayApplianceData(recipesData);
            displayUstensileData(recipesData);

            //Check if the target class is added to the tag.
            let idx = getTargetTag.indexOf(
                targetToClose.textContent.toLowerCase()
            );

            if (idx >= 0) {
                getTargetTag.splice(idx, 1);
            }
            if (getTargetTag.length === 0) {
                main.textContent = "";
                ulIngredient.textContent = "";
                ulAppliance.textContent = "";
                ulUstensile.textContent = "";
                displayMainData(originalRecipeData);
                displayIngredientData(originalRecipeData);
                displayApplianceData(originalRecipeData);
                displayUstensileData(originalRecipeData);
            }
            // console.log(idx);
            // console.log(getTargetTag);
        }
        const tags = document.querySelectorAll(".tag");
        tags.forEach((tag) => {
            tag.addEventListener("click", closeTag);
            tag.addEventListener("keydown", (e) => {
                if (e.key === "Escape" || e.key === "Enter") {
                    closeTag(e);
                }
            });
        });
    }

    listRecipes.forEach((listRecipe) => {
        listRecipe.addEventListener("click", toggleTag);
        listRecipe.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                toggleTag(e);
            }
        });
    });
    searchByInputKeyword();
}
