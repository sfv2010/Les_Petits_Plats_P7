export function searchInMainBar() {
    const input = document.querySelector("#search");
    const cards = document.querySelectorAll("article");
    const main = document.querySelector("main");
    const noFound = document.createElement("div");

    //Search based on input value
    input.addEventListener("keyup", function (e) {
        const searchInput = e.target.value;
        let numHidden = 0;
        if (searchInput.length >= 3) {
            cards.forEach((card) => {
                // console.log(card.classList.value);
                if (
                    card.textContent
                        .toLowerCase()
                        .includes(searchInput.toLowerCase())
                ) {
                    card.classList.remove("hidden");
                    numHidden++;
                } else {
                    card.classList.add("hidden");
                }
            });
            console.log(numHidden);
            if (numHidden === 0) {
                noFound.textContent =
                    " Aucune recette ne correspond à votre critère… vous pouvez chercher  « tarte aux pommes », « poisson », etc.";
                main.appendChild(noFound);
            }
        }
        if (searchInput.length === 0) {
            cards.forEach((card) => card.classList.remove("hidden"));
        }
    });
}
