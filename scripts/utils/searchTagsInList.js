//function to changes the display of the list when input in the list tag button
export function searchTagsInList() {
    const ingredient = document.getElementById("inputIngredient");
    const appliance = document.getElementById("inputAppliance");
    const ustensile = document.getElementById("inputUstensile");

    function findInput(e, lists) {
        const searchInput = e.target.value;

        lists.forEach((list) => {
            if (
                list.textContent
                    .toLowerCase()
                    .includes(searchInput.toLowerCase())
            ) {
                list.classList.remove("hidden");
            } else {
                list.classList.add("hidden");
            }
        });
    }
    ingredient.addEventListener("keyup", function (e) {
        findInput(e, document.querySelectorAll(".listRecipe.ingredients"));
    });
    appliance.addEventListener("keyup", function (e) {
        findInput(e, document.querySelectorAll(".listRecipe.appliances"));
    });
    ustensile.addEventListener("keyup", function (e) {
        findInput(e, document.querySelectorAll(".listRecipe.ustensiles"));
    });
}
