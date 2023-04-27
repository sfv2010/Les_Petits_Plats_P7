import { recipes } from "./data/recipes.js";
import { searchInMainBar } from "./utils/searchInMainBar.js";
import { openCloseList } from "./utils/openCloseList.js";
import { searchTagsInList } from "./utils/searchTagsInList.js";
import {
    displayIngredientsTagsList,
    displayAppliancesTagsList,
    displayUstensilesTagsList,
} from "./utils/tagsList.js";
import { displayRecipes } from "./utils/displayRecipes.js";

const init = () => {
    // Init event on search input
    const input = document.querySelector("#search");
    input.addEventListener("keyup", searchInMainBar);

    // Display all recipes
    displayRecipes(recipes);

    // Display all tags in lists
    displayIngredientsTagsList(recipes);
    displayAppliancesTagsList(recipes);
    displayUstensilesTagsList(recipes);

    // Init the dropdowns properties
    searchTagsInList();
    openCloseList();
};

window.onload = init;
