import { recipes } from "./data/recipes.js";
import { recipesFactory } from "./factories/recipesFactory.js";
import { keywordSearchFactory } from "./factories/keywordSearchFactory.js";
import {
    getIngredientList,
    getApplianceList,
    getUstensileList,
} from "./utils/recipeUtil.js";
//import { openCloseList } from "./utils/openCloseList.js";
//import { searchInMainBar } from "./utils/searchInMainBar.js";

export function displayMainData(recipes) {
    const main = document.querySelector("main");
    recipes.forEach((recipe) => {
        const recipeInfo = recipesFactory(recipe);
        const recipeCardDOM = recipeInfo.getRecipeCardDOM();
        main.appendChild(recipeCardDOM);
    });
}

function displayKeywordSearch() {
    const searchContainer = document.querySelector(".searchContainer");
    const factory = keywordSearchFactory();

    //-----------Ingredient-----------
    const keywordIngredient = factory.create(
        "Ingredient",
        "ingredients",
        getIngredientList()
    );
    const keywordIngredientDOM = keywordIngredient.getDOM();
    searchContainer.appendChild(keywordIngredientDOM);

    keywordIngredientDOM.addEventListener("dropDownOpen", () => {
        keywordAppliance.closeDropDown();
        keywordUstensile.closeDropDown();
    });
    //-----------Appliance-----------
    const keywordAppliance = factory.create(
        "Appliance",
        "appliances",
        getApplianceList()
    );
    const keywordApplianceDOM = keywordAppliance.getDOM();
    searchContainer.appendChild(keywordApplianceDOM);
    keywordApplianceDOM.addEventListener("dropDownOpen", () => {
        keywordIngredient.closeDropDown();
        keywordUstensile.closeDropDown();
    });

    //-----------Ustensile-----------
    const keywordUstensile = factory.create(
        "Ustensile",
        "ustensiles",
        getUstensileList()
    );
    const keywordUstensileDOM = keywordUstensile.getDOM();
    searchContainer.appendChild(keywordUstensileDOM);
    keywordUstensileDOM.addEventListener("dropDownOpen", () => {
        keywordIngredient.closeDropDown();
        keywordAppliance.closeDropDown();
    });
    // const keywordInfo2 = keywordSearchFactory("Appliance","appliances",recipeUtil.getApplianceList());
    // const keywordSearchDOM2 = keywordInfo2.getListCardDOM();
    // searchContainer.appendChild(keywordSearchDOM2);
}

displayMainData(recipes);
displayKeywordSearch();
//openCloseList();
//searchInMainBar();

//--------copy----------
// import { recipes } from "./data/recipes.js";
// import { recipesFactory } from "./factories/recipesFactory.js";
// import { keywordSearchFactory } from "./factories/keywordSearchFactory.js";
// import {
//     getIngredientList,
//     getApplianceList,
//     getUstencileList,
// } from "./utils/recipeUtil.js";
// //import { openCloseList } from "./utils/openCloseList.js";
// //import { searchInMainBar } from "./utils/searchInMainBar.js";

// export function displayMainData(recipes) {
//     const main = document.querySelector("main");

//     recipes.forEach((recipe) => {
//         const recipeInfo = recipesFactory(recipe);
//         const recipeCardDOM = recipeInfo.getRecipeCardDOM();
//         main.appendChild(recipeCardDOM);
//     });
// }
// function displayKeywordSearch() {
//     const searchContainer = document.querySelector(".searchContainer");
//     //recipeUtil.getIngredientList()
//     const keywordIngredient = keywordSearchFactory(
//         "Ingredient",
//         "ingredients",
//         getIngredientList()
//     );
//     const keywordIngredientDOM = keywordIngredient.getListCardDOM();
//     searchContainer.appendChild(keywordIngredientDOM);
//     // const recipeUtil = keywordIngredient.getIngredientList();

//     const keywordAppliance = keywordSearchFactory(
//         "Appliance",
//         "appliances",
//         getApplianceList()
//     );
//     const keywordApplianceDOM = keywordAppliance.getListCardDOM();
//     searchContainer.appendChild(keywordApplianceDOM);

//     const keywordUstensile = keywordSearchFactory(
//         "Ustensile",
//         "ustensiles",
//         getUstencileList()
//     );
//     const keywordUstensileDOM = keywordUstensile.getListCardDOM();
//     searchContainer.appendChild(keywordUstensileDOM);

//     // const keywordInfo2 = keywordSearchFactory("Appliance","appliances",recipeUtil.getApplianceList());
//     // const keywordSearchDOM2 = keywordInfo2.getListCardDOM();
//     // searchContainer.appendChild(keywordSearchDOM2);
// }

// displayMainData(recipes);
// displayKeywordSearch();
// //openCloseList();
// //searchInMainBar();
