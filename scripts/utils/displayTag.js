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

        //Sort the corresponding recipe when selecting from the list
        const main = document.querySelector("main");
        const ulIngredient = document.querySelector(".ulIngredient");
        const ulAppliance = document.querySelector(".ulAppliance");
        const ulUstensile = document.querySelector(".ulUstensile");
        const itemArray = [];
        for (let i = 0; i < recipesData.length; i++) {
            const recipe = recipesData[i];
            //loop for appliance lists
            if (
                recipe.appliance
                    .toLowerCase()
                    .includes(searchByTag.toLowerCase())
            ) {
                itemArray.push(recipe);
            } else {
                let keepRecipe = false;
                for (let j = 0; j < recipe.ingredients.length; j++) {
                    //loop for ingredient lists
                    if (
                        recipe.ingredients[j].ingredient
                            .toLowerCase()
                            .includes(searchByTag.toLowerCase())
                    ) {
                        keepRecipe = true;
                    }
                }
                if (keepRecipe === false) {
                    for (let k = 0; k < recipe.ustensils.length; k++) {
                        //loop for ustensils lists
                        if (
                            recipe.ustensils[k]
                                .toLowerCase()
                                .includes(searchByTag.toLowerCase())
                        )
                            itemArray.push(recipe);
                    }
                } else {
                    itemArray.push(recipe);
                }
            }
        }

        main.textContent = "";
        ulIngredient.textContent = "";
        ulAppliance.textContent = "";
        ulUstensile.textContent = "";
        displayMainData(itemArray);
        displayIngredientData(itemArray);
        displayApplianceData(itemArray);
        displayUstensileData(itemArray);

        //Put all the selected tags into an array
        const targets = document.querySelectorAll(".target");
        let getTargetTag = [];
        targets.forEach((target) => {
            getTargetTag.push(target.textContent.toLowerCase());
        });

        //close tag
        function closeTag(e) {
            //e.stopPropagation();
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
                displayMainData(originalRecipeData);
                displayIngredientData(originalRecipeData);
                displayApplianceData(originalRecipeData);
                displayUstensileData(originalRecipeData);
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
