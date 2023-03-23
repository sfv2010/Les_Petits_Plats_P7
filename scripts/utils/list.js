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
        if (e.target.textContent === "Ingredient") {
            buttonIngredient.style.display = "none";
            buttonAppliance.style.display = "block";
            buttonUstensile.style.display = "block";
            dropDownIngredient.style.display = "block";
            dropDownAppliance.style.display = "none";
            dropDownUstensile.style.display = "none";
        } else if (e.target.textContent === "Appareils") {
            buttonAppliance.style.display = "none";
            buttonIngredient.style.display = "block";
            buttonUstensile.style.display = "block";
            dropDownAppliance.style.display = "block";
            dropDownIngredient.style.display = "none";
            dropDownUstensile.style.display = "none";
        } else if (e.target.textContent === "Ustensiles") {
            buttonUstensile.style.display = "none";
            buttonIngredient.style.display = "block";
            buttonAppliance.style.display = "block";
            dropDownUstensile.style.display = "block";
            dropDownIngredient.style.display = "none";
            dropDownAppliance.style.display = "none";
        }
    }

    function closeList(e) {
        //console.log(e.target.id);
        for (let button of buttons) {
            button.style.display = "block";
        }
        for (let dropDown of dropDowns) dropDown.style.display = "none";
    }
    buttons.forEach((button) =>
        button.addEventListener("click", (e) => openList(e))
    );

    imgUps.forEach((imgUp) =>
        imgUp.addEventListener("click", (e) => closeList(e))
    );
}
