export function showList() {
    const buttonIngredient = document.querySelector(".buttonIngredient");
    const buttonAppliance = document.querySelector(".buttonAppliance");
    const buttonUstensile = document.querySelector(".buttonUstensile");
    const imgUpIngredient = document.getElementById("imgUpIngredient");
    const imgUpAppliance = document.getElementById("imgUpAppliance");
    const imgUpUstensile = document.getElementById("imgUpUstensile");
    const dropDownIngredient = document.getElementById("dropDownIngredient");
    const dropDownAppliance = document.getElementById("dropDownAppliance");
    const dropDownUstensile = document.getElementById("dropDownUstensile");
    const buttons = [buttonIngredient, buttonAppliance, buttonUstensile];
    const dropDowns = [
        dropDownIngredient,
        dropDownAppliance,
        dropDownUstensile,
    ];
    const imgUps = [imgUpIngredient, imgUpAppliance, imgUpUstensile];

    function openList(e) {
        for (let button of buttons) button.style.display = "block";
        for (let dropDown of dropDowns) dropDown.style.display = "none";

        if (e.target.textContent === "Ingredient") {
            buttonIngredient.style.display = "none";
            dropDownIngredient.style.display = "block";
        } else if (e.target.textContent === "Appareils") {
            buttonAppliance.style.display = "none";
            dropDownAppliance.style.display = "block";
        } else if (e.target.textContent === "Ustensiles") {
            buttonUstensile.style.display = "none";
            dropDownUstensile.style.display = "block";
        }
    }
    function closeList(e) {
        for (let button of buttons) button.style.display = "block";
        for (let dropDown of dropDowns) dropDown.style.display = "none";
    }

    buttons.forEach((button) =>
        button.addEventListener("click", (e) => openList(e))
    );
    imgUps.forEach((imgUp) =>
        imgUp.addEventListener("click", (e) => closeList(e))
    );
}
