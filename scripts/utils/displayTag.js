export function displayTag() {
    const listRecipes = document.querySelectorAll(".listRecipe");
    const tagsContainer = document.querySelector(".tagsContainer");

    function toggleTag(e) {
        const tagRecipe = document.createElement("span");
        console.log(e.target.id);
        tagRecipe.classList.add("tag");
        tagRecipe.textContent = e.target.textContent;
        tagRecipe.tabIndex = "0";
        tagsContainer.appendChild(tagRecipe);
        if (e.target.id === "appliance") {
            tagRecipe.id = "appliance";
        }
        if (e.target.id === "ustensile") {
            tagRecipe.id = "ustensile";
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
