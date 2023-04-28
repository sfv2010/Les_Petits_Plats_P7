//function to changes the display of the list when input in the list tag button
export function searchTagsInList() {
    const ingredient = document.getElementById("inputIngredient");
    const appliance = document.getElementById("inputAppliance");
    const ustensile = document.getElementById("inputUstensile");

    function findInput(e, list) {
        const searchInput = e.target.value;
        console.log(list);
        for (let i = 0; i < list.length; i++) {
            if (
                list[i].textContent
                    .toLowerCase()
                    .includes(searchInput.toLowerCase())
            ) {
                list[i].classList.remove("hidden");
            } else {
                list[i].classList.add("hidden");
            }
        }
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
