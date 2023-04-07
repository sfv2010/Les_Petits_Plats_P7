import {
    displayMainData,
    displayIngredientData,
    displayApplianceData,
    displayUstensileData,
} from "../index.js";
import { searchByInputKeyword } from "./searchByInputKeyword.js";
import { recipes } from "../data/recipes.js";

export function displayTag(recipesData, type) {
    // export function displayTag(recipes,type) {
    const originalRecipeData = recipes;
    const listRecipes = document.querySelectorAll(`.listRecipe.${type}`);
    //console.log(listRecipes);
    const tagsContainer = document.querySelector(".tagsContainer");

    //Functions to show(create), close, Sort tags
    function toggleTag(e) {
        //create tag
        const searchByTag = e.target.textContent;
        function createTag(object) {
            const tagRecipe = document.createElement("span");
            tagRecipe.classList.add("tag");
            tagRecipe.textContent = searchByTag;
            tagRecipe.tabIndex = "0";
            tagRecipe.classList.add("target");
            tagRecipe.classList.add(object);
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

        console.log(e.target.classList);

        //Sort the corresponding recipe when selecting from the list
        const noFound = document.createElement("div");
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
        console.log(getTargetTag);
        const itemArray = [];
        console.log(searchByTag);
        console.log(itemArray);
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
                    .includes(searchByTag.toLowerCase())
            )
                itemArray.push(recipe);
        });
        if (itemArray.length == 0) {
            displayMainData(recipesData);
            displayIngredientData(recipesData);
            displayApplianceData(recipesData);
            displayUstensileData(recipesData);

            noFound.textContent =
                " Aucune recette ne correspond à votre critère… vous pouvez chercher  « tarte aux pommes », « poisson », etc.";
            noFound.classList.add("noFound");
            main.appendChild(noFound);
        } else {
            noFound.textContent = "";
            main.textContent = "";
            ulIngredient.textContent = "";
            ulAppliance.textContent = "";
            ulUstensile.textContent = "";
            displayMainData(itemArray);
            displayIngredientData(itemArray);
            displayApplianceData(itemArray);
            displayUstensileData(itemArray);
        }
        console.log(itemArray);
        // console.log(itemArray.length);
        //close tag
        function closeTag(e) {
            //e.stopPropagation();
            const targetToClose = e.target;
            console.log(targetToClose);

            e.target.remove();
            displayMainData(recipesData);
            displayIngredientData(recipesData);
            displayApplianceData(recipesData);
            displayUstensileData(recipesData);

            // const targets = document.querySelectorAll(".target");
            // let getTargetTag = [];

            // targets.forEach((target) => {
            //     console.log(target.textContent.toLowerCase());
            //     getTargetTag.push(target.textContent.toLowerCase());
            // });
            // console.log(getTargetTag);

            //Remove targetToClose from array
            let idx = getTargetTag.indexOf(
                targetToClose.textContent.toLowerCase()
            );
            console.log(targetToClose.textContent.toLowerCase());
            console.log(getTargetTag);
            console.log(idx);
            if (idx >= 0) {
                getTargetTag.splice(idx, 1);
                console.log(idx);
            }
            console.log(getTargetTag);

            if (getTargetTag.length === 0) {
                main.textContent = "";
                ulIngredient.textContent = "";
                ulAppliance.textContent = "";
                ulUstensile.textContent = "";
                displayMainData(recipesData);
                displayIngredientData(originalRecipeData);
                displayApplianceData(originalRecipeData);
                displayUstensileData(originalRecipeData);
                // getTargetTag.splice(0);
            }
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
