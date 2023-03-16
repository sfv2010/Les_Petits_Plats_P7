export function showList() {
    const buttonIngredient = document.querySelector(".buttonIngredient");
    const buttonAppareil = document.querySelector(".buttonAppareil");
    const buttonUstensile = document.querySelector(".buttonUstensile");
    const imgUpIngredient = document.getElementById("imgUpIngredient");
    const imgUpAppareil = document.getElementById("imgUpAppareil");
    const imgUpUstensile = document.getElementById("imgUpUstensile");
    const dropDownIngredient = document.getElementById("dropDownIngredient");
    const dropDownAppareil = document.getElementById("dropDownAppareil");
    const dropDownUstensile = document.getElementById("dropDownUstensile");
    const buttons = [buttonIngredient, buttonAppareil, buttonUstensile];
    const imgUps = [imgUpIngredient, imgUpAppareil, imgUpUstensile];

    function openList(e) {
        for (let button of buttons) {
            button.style.display = "none";
        }
        console.log(e.target.textContent);
        if (e.target.textContent === "Ingredient") {
            dropDownIngredient.style.display = "block";
        } else if (e.target.textContent === "Appareils") {
            dropDownAppareil.style.display = "block";
        } else if (e.target.textContent === "Ustensiles") {
            dropDownUstensile.style.display = "block";
        }
    }

    function closeList(e) {
        console.log(e.target.id);
        for (let button of buttons) {
            button.style.display = "block";
        }
        if (e.target.id === "imgUpIngredient") {
            dropDownIngredient.style.display = "none";
        } else if (e.target.id === "imgUpAppareil") {
            dropDownAppareil.style.display = "none";
        } else if (e.target.id === "imgUpUstensile") {
            dropDownUstensile.style.display = "none";
        }
    }

    buttons.forEach((button) =>
        button.addEventListener("click", (e) => openList(e))
    );

    imgUps.forEach((imgUp) =>
        imgUp.addEventListener("click", (e) => closeList(e))
    );
}
