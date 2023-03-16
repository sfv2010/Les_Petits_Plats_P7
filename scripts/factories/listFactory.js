export function listFactory(recipes) {
    const { ingredients, appliance, ustensils } = recipes;

    function getRecipeListDOM() {
        const ulRecipe = document.createElement("ul");
        ulRecipe.classList.add("dropDownUl");
        ulRecipe.classList.add("ingredients");

        ingredients.forEach((ingredient) => {
            const listRecipe = document.createElement("li");
            listRecipe.textContent = ingredient.ingredient;
            ulRecipe.appendChild(listRecipe);
        });

        return ulRecipe;
    }
    return { getRecipeListDOM };
}
