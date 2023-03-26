export function searchByKeyword() {
    const ingredient = {
        input: document.getElementById("inputIngredient"),
        object: document.querySelectorAll(".listRecipe.ingredients"),
    };
    const appliance = {
        input: document.getElementById("inputAppliance"),
        object: document.querySelectorAll(".listRecipe.appliances"),
    };
    const ustensile = {
        input: document.getElementById("inputUstensile"),
        object: document.querySelectorAll(".listRecipe.ustensiles"),
    };

    function findInput(e, list) {
        const searchInput = e.target.value;
        for (let i = 0; i < list.object.length; i++) {
            if (
                list.object[i].textContent
                    .toLowerCase()
                    .includes(searchInput.toLowerCase())
            ) {
                list.object[i].classList.remove("hidden");
            } else {
                list.object[i].classList.add("hidden");
            }
        }
    }
    ingredient.input.addEventListener("keyup", function (e) {
        findInput(e, ingredient);
    });
    appliance.input.addEventListener("keyup", function (e) {
        findInput(e, appliance);
    });
    ustensile.input.addEventListener("keyup", function (e) {
        findInput(e, ustensile);
    });
}
