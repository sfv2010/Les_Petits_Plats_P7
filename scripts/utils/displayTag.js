import { searchInMainBar } from "./searchInMainBar.js";
import { emptyInput } from "./util.js";

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

    //When the tag is selected, if characters have already been entered into the tag input, delete them.
    emptyInput();

    searchInMainBar();
}

// Function to remove a tag
function closeTag(e) {
    // Remove the tag
    e.target.remove();
    // Filter the recipes
    searchInMainBar();
}
