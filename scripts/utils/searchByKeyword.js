export function searchByKeyword() {
    const inputs = document.querySelectorAll(".searchBox");
    const listRecipe = document.querySelectorAll("listRecipe");
    console.log(listRecipe);
    //Search based on input value
    inputs.forEach((input) => {
        input.addEventListener("keyup", function (e) {
            const searchInput = e.target.value;

            for (let i = 0; i < listRecipe.length; i++) {
                if (
                    listRecipe[i].textContent
                        .toLowerCase()
                        .includes(searchInput.toLowerCase())
                ) {
                    listRecipe[i].classList.add("hidden");
                } else {
                    listRecipe[i].classList.removed("hidden");
                }
            }
            if (searchInput.length === 0) {
                listRecipe.classList.remove("hidden");
            }
        });
    });
}
