import { searchByKeyword } from "./searchByKeyword.js";
export function displayTag() {
    const listRecipes = document.querySelectorAll(".listRecipe");
    const tagsContainer = document.querySelector(".tagsContainer");
    const cards = document.querySelectorAll("article");

    function toggleTag(e) {
        //create tag
        const searchByTag = e.target.textContent;
        const tagRecipe = document.createElement("span");
        tagRecipe.classList.add("tag");
        tagRecipe.textContent = searchByTag;
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
        e.target.classList.add("hidden");

        //sort
        console.log(e.target);
        cards.forEach((card) => {
            if (
                card.textContent
                    .toLowerCase()
                    .includes(searchByTag.toLowerCase())
            ) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }
        });
        // if (!e.target) {
        //     cards.forEach((card) => card.classList.remove("hidden"));
        // }

        //close tag
        function closeTag(e) {
            console.log(e.target);
            e.target.style.display = "none";
            cards.forEach((card) => card.classList.remove("hidden"));
            listRecipes.forEach((listRecipe) => {
                if (e.target.textContent === listRecipe.textContent) {
                    listRecipe.classList.remove("hidden");
                }
            });
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
    searchByKeyword();
}
