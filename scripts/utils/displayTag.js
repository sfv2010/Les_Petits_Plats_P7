import { searchTagsInList } from "./searchTagsInList.js";
import { searchInMainBar } from "./searchInMainBar.js";

function createTag(searchByTag, className) {
    const tagsContainer = document.querySelector(".tagsContainer");
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

//Functions to show(create), close, Sort tags
export function toggleTag(e, type) {
    //Create tag
    const searchByTag = e.target.textContent;

    createTag(searchByTag, type);

    searchInMainBar();
}

// Function to remove a tag
function closeTag(e) {
    // Remove the tag
    e.target.remove();
    // Filter the recipes
    searchInMainBar();
}

export function displayTag(type) {
    const listRecipes = document.querySelectorAll(`.listRecipe.${type}`);

    listRecipes.forEach((listRecipe) => {
        listRecipe.addEventListener("click", (e) => toggleTag(e, type));
        listRecipe.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                toggleTag(e);
            }
        });
    });

    searchTagsInList();
}
