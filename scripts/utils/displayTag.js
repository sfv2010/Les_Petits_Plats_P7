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

    function createTag(searchByTag, className) {
        const tagRecipe = document.createElement("span");
        tagRecipe.classList.add("tag");
        tagRecipe.textContent = searchByTag;
        tagRecipe.tabIndex = "0";
        tagRecipe.classList.add("target");
        tagRecipe.classList.add(className);

        tagRecipe.addEventListener("click", closeTag);
        tagRecipe.addEventListener("keydown", (e) => {
            if (e.key === "Escape" || e.key === "Enter") {
                closeTag(e);
            }
        });
        tagsContainer.appendChild(tagRecipe);
    }
    function closeTag(e) {
        const main = document.querySelector("main");
        const ulIngredient = document.querySelector(".ulIngredient");
        const ulAppliance = document.querySelector(".ulAppliance");
        const ulUstensile = document.querySelector(".ulUstensile");

        e.target.remove();
        //Sort the corresponding recipe when selecting from the list
        //Filter the recipes received as arguments and return items that match item.ingredient and tag in recipe.ingredients as a new array.
        function filterRecipeByTargetTag(tag, recipes) {
            const result = recipes.filter((recipe) => {
                return (
                    recipe.ingredients.find((item) =>
                        item.ingredient
                            .toLowerCase()
                            .includes(tag.toLowerCase())
                    ) ||
                    recipe.appliance
                        .toLowerCase()
                        .includes(tag.toLowerCase()) ||
                    recipe.ustensils.find((ustensil) => {
                        return ustensil
                            .toLowerCase()
                            .includes(tag.toLowerCase());
                    })
                );
            });
            console.log(result);
            return result;
        }
        //A function that returns recipe data with all selected tags
        function tagSearch(searchTags) {
            //Initial value is all recipe data
            let resultRecipes = recipesData;
            // put the results in resultRecipes
            resultRecipes = filterRecipeByTargetTag(searchTags, resultRecipes);
            return resultRecipes;
        }

        const targets = document.querySelectorAll(".target");
        const inputElement = document.querySelector("#search");
        if (targets.length > 0) {
            targets.forEach((target) => {
                const textContent = target.textContent;
                console.log(textContent);
                const itemArray = tagSearch(textContent);
                //console.log(itemArray);
                main.textContent = "";
                ulIngredient.textContent = "";
                ulAppliance.textContent = "";
                ulUstensile.textContent = "";
                displayMainData(itemArray);
                displayIngredientData(itemArray);
                displayApplianceData(itemArray);
                displayUstensileData(itemArray);
            });
        } else if (inputElement.value.trim() === "") {
            main.textContent = "";
            ulIngredient.textContent = "";
            ulAppliance.textContent = "";
            ulUstensile.textContent = "";
            displayMainData(originalRecipeData);
            displayIngredientData(originalRecipeData);
            displayApplianceData(originalRecipeData);
            displayUstensileData(originalRecipeData);
        } else {
            main.textContent = "";
            ulIngredient.textContent = "";
            ulAppliance.textContent = "";
            ulUstensile.textContent = "";
            displayMainData(recipesData);
            displayIngredientData(recipesData);
            displayApplianceData(recipesData);
            displayUstensileData(recipesData);
        }
    }

    //Sort the corresponding recipe when selecting from the list
    function filterRecipeByTag(tag) {
        const itemArray = [];
        recipesData.forEach((recipe) => {
            if (
                recipe.ingredients.find((ingredients) => {
                    return ingredients.ingredient
                        .toLowerCase()
                        .includes(tag.toLowerCase());
                }) ||
                recipe.appliance.toLowerCase().includes(tag.toLowerCase()) ||
                recipe.ustensils.find((ustensil) => {
                    return ustensil.toLowerCase().includes(tag.toLowerCase());
                })
            )
                itemArray.push(recipe);
        });
        return itemArray;
    }
    //Functions to show tags
    function toggleTag(e) {
        const searchByTag = e.target.textContent;
        const main = document.querySelector("main");
        const ulIngredient = document.querySelector(".ulIngredient");
        const ulAppliance = document.querySelector(".ulAppliance");
        const ulUstensile = document.querySelector(".ulUstensile");
        const itemArray = filterRecipeByTag(searchByTag);
        //const itemArray = tagSearch(searchByTag);

        createTag(searchByTag, type);

        main.textContent = "";
        ulIngredient.textContent = "";
        ulAppliance.textContent = "";
        ulUstensile.textContent = "";
        displayMainData(itemArray);
        displayIngredientData(itemArray);
        displayApplianceData(itemArray);
        displayUstensileData(itemArray);
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
