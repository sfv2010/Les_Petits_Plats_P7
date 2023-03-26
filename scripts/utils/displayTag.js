export function displayTag() {
    const listRecipes = document.querySelectorAll(".listRecipe");
    const tagsContainer = document.querySelector(".tagsContainer");

    function toggleTag(e) {
        const tagRecipe = document.createElement("span");
        tagRecipe.classList.add("tag");
        tagRecipe.textContent = e.target.textContent;
        tagRecipe.tabIndex = "0";
        tagsContainer.appendChild(tagRecipe);
        if (e.target.classList.value === "listRecipe ingredients") {
            tagRecipe.classList.add("ingredients");
        }
        if (e.target.classList.value === "listRecipe appliances") {
            tagRecipe.classList.add("appliances");
        }
        if (e.target.classList.value === "listRecipe ustensiles") {
            tagRecipe.classList.add("ustensiles");
        }

        //close tag
        function closeTag(e) {
            e.target.style.display = "none";
        }
        const tags = document.querySelectorAll(".tag");
        tags.forEach((tag) => {
            tag.addEventListener("click", closeTag);
        });
        tags.forEach((tag) => {
            tag.addEventListener("keydown", (e) => {
                if (e.key === "Escape" || e.key === "Enter") {
                    closeTag(e);
                }
            });
        });
    }

    listRecipes.forEach((listRecipe) => {
        listRecipe.addEventListener("click", toggleTag);
    });
    listRecipes.forEach((listRecipe) => {
        listRecipe.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                toggleTag(e);
            }
        });
    });
}
