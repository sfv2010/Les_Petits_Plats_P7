export function recipesFactory(recipes) {
    const {
        name,
        listIngredients,
        ingredient,
        quantity,
        unit,
        time,
        description,
    } = recipes;
    function getRecipeCardDOM() {
        const articleRecipe = document.createElement("article");

        const imgRecipe = document.createElement("div");
        imgRecipe.classList.add("imgRecipe");

        const divRecipe = document.createElement("div");
        divRecipe.classList.add("container");
        divRecipe.tabIndex = "0";

        const titleRecipe = document.createElement("h2");
        titleRecipe.textContent = name;

        const timeRecipe = document.createElement("h3");
        timeRecipe.textContent = `${time} min`;

        const boxRecipe = document.createElement("div");
        boxRecipe.classList.add("box");
        // boxRecipe.tabIndex = "0";

        const ulRecipe = document.createElement("ul");
        const listIngredients = document.createElement("li");
        listIngredients.classList.add("ingredients");
        listIngredients.textContent = `${ingredient}: `;
        const listQuantity = document.createElement("span");
        listQuantity.classList.add("quantity");
        listQuantity.textContent = `${quantity} ${unit}`;

        const detailRecipe = document.createElement("p");
        detailRecipe.textContent = description;

        articleRecipe.appendChild(imgRecipe);
        articleRecipe.appendChild(divRecipe);
        articleRecipe.appendChild(boxRecipe);
        divRecipe.appendChild(titleRecipe);
        divRecipe.appendChild(timeRecipe);
        boxRecipe.appendChild(ulRecipe);
        boxRecipe.appendChild(detailRecipe);
        ulRecipe.appendChild(listIngredients);
        listIngredients.appendChild(listQuantity);

        return articleRecipe;
    }

    return { getRecipeCardDOM };
}
