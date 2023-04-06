// import { recipes } from "./data/recipes.js";
//import { openCloseList } from "../utils/openCloseList";
export function keywordSearchFactory(name, className, dataList) {
    function getListCardDOM() {
        const searchByKeyword = document.createElement("div");
        searchByKeyword.classList.add("searchByKeyword");

        const button = document.createElement("button");
        button.classList.add(className);
        button.classList.add(`button${name}`);
        button.textContent = name;

        const dropDown = document.createElement("div");
        dropDown.classList.add("dropDown");
        dropDown.id = `dropDown${name}`;

        const input = document.createElement("input");
        input.classList.add("searchBox");
        input.classList.add(className);
        input.id = `input${name}`;
        input.type = "text";
        input.placeholder = `Rechercher un ${name}`;
        input.ariaLabel = `search with ${name}`;

        const img = document.createElement("img");
        img.src = "assets/upChevron.svg";
        img.alt = "fermeture de list";
        img.classList.add("imgUp");
        img.id = `imgUp${name}`;
        img.tabIndex = "0";

        const ulList = getDataList(name, className, dataList);
        // const ulList = document.createElement("ul");
        // ulList.classList.add("dropDownUl");
        // ulList.classList.add(className);
        // ulList.classList.add(`ul${name}`);

        searchByKeyword.appendChild(button);
        searchByKeyword.appendChild(dropDown);
        dropDown.appendChild(input);
        dropDown.appendChild(img);
        dropDown.appendChild(ulList);

        setOpenCloseList(searchByKeyword);

        return searchByKeyword;
    }
    function openList(searchByKeyword) {
        //const eTextContent = e.target.textContent;
        //console.log(eTextContent);
        const button = searchByKeyword.querySelector(`.button${name}`);
        const dropDown = searchByKeyword.querySelector(`#dropDown${name}`);
        const dropDownOpenEvent = new CustomEvent("dropDownOpen");

        button.style.display = "none";
        dropDown.style.display = "block";
        searchByKeyword.dispatchEvent(dropDownOpenEvent);
    }
    function closeList(searchByKeyword) {
        const button = searchByKeyword.querySelector(`.button${name}`);
        const dropDown = searchByKeyword.querySelector(`#dropDown${name}`);
        button.style.display = "block";
        dropDown.style.display = "none";
    }

    function setOpenCloseList(searchByKeyword) {
        const button = searchByKeyword.querySelector(`.button${name}`);
        const imgUp = searchByKeyword.querySelector(`#imgUp${name}`);

        //

        if (button) {
            button.addEventListener("click", () => openList(searchByKeyword));
        }
        if (imgUp) {
            imgUp.addEventListener("click", () => closeList(searchByKeyword));
            imgUp.addEventListener("keydown", (e) => {
                if (e.key === "Escape" || e.key === "Enter") {
                    closeList(e);
                }
            });
        }
    }

    function capitalize(array) {
        for (let i = 0; i < array.length; i++) {
            array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
        }
    }
    function getDataList(name, className, dataList) {
        const ulList = document.createElement("ul");
        ulList.classList.add("dropDownUl");
        ulList.classList.add(className);
        ulList.classList.add(`ul${name}`);

        let sortDatalist = [...new Set(dataList)].sort();
        capitalize(sortDatalist);
        //console.log(sortIngredients);
        sortDatalist.forEach((data) => {
            const listRecipe = document.createElement("li");
            listRecipe.classList.add("listRecipe");
            listRecipe.classList.add(className);
            listRecipe.textContent = data;
            listRecipe.tabIndex = "0";
            ulList.appendChild(listRecipe);
        });
        return ulList;
    }
    return { getListCardDOM, closeDropDown: closeList };
}
