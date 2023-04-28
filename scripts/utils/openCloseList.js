//Open/close list tag button
export function openCloseList() {
    const buttons = Array.from(
        document.querySelectorAll(
            ".buttonIngredient, .buttonAppliance, .buttonUstensile"
        )
    );
    const dropDowns = Array.from(
        document.querySelectorAll(
            "#dropDownIngredient, #dropDownAppliance, #dropDownUstensile"
        )
    );
    const imgUps = Array.from(
        document.querySelectorAll(
            "#imgUpIngredient, #imgUpAppliance, #imgUpUstensile"
        )
    );
    function openList(e) {
        const targetButton = e.target;
        const buttonIndex = buttons.indexOf(e.target);
        const targetDropDown = dropDowns[buttonIndex];

        buttons.forEach((button) => (button.style.display = "block"));
        dropDowns.forEach((dropDown) => (dropDown.style.display = "none"));
        //if selecting one of the buttons
        targetButton.style.display = "none";
        targetDropDown.style.display = "block";
    }

    function closeList() {
        buttons.forEach((button) => (button.style.display = "block"));
        dropDowns.forEach((dropDown) => (dropDown.style.display = "none"));
    }

    buttons.forEach((button) => button.addEventListener("click", openList));
    imgUps.forEach((imgUp) => {
        imgUp.addEventListener("click", closeList);
        imgUp.addEventListener("keydown", (e) => {
            if (e.key === "Escape" || e.key === "Enter") {
                closeList();
            }
        });
    });
}
