export function displayTag() {
    const listRecipes = document.querySelectorAll(".listRecipe");
    const tagContainer = document.querySelector(".tagContainer");

    function displayTag(e) {
        const tagRecipe = document.createElement("span"); //外に作ると、更新するごとに前回作ったものが消えて上書きされてしまう
        tagRecipe.classList.add("tag");
        tagRecipe.textContent = e.target.id;
        tagContainer.appendChild(tagRecipe);
        console.log(e.target);
    }

    listRecipes.forEach((listRecipe) => {
        listRecipe.addEventListener("click", displayTag);
    });
    // if (tagRecipe) {
    //     function closeTag(e) {
    //         e.target.style.display = "none";
    //     }
    //     const tags = document.querySelectorAll(".tag");
    //     console.log(tags);
    //     tags.forEach((tag) => {
    //         tag.addEventListener("click", closeTag);
    //     });
    // }
}
