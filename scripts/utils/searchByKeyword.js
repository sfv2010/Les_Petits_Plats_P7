export function searchByKeyword() {
    const inputIngredient = document.getElementById("inputIngredient");
    const ingredients = document.querySelectorAll(".listRecipe.ingredients");
    console.log(ingredients);
    //Search based on input value
    inputIngredient.addEventListener("keyup", function (e) {
        const searchInput = e.target.value;
        for (let i = 0; i < ingredients.length; i++) {
            if (
                ingredients[i].textContent
                    .toLowerCase()
                    .includes(searchInput.toLowerCase())
            ) {
                ingredients[i].classList.remove("hidden");
            } else {
                ingredients[i].classList.add("hidden");
            }
        }
    });
}
