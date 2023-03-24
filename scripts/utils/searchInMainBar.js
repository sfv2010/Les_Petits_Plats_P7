export function searchInMainBar() {
    const input = document.querySelector("#search");
    const cards = document.querySelectorAll("article");

    //Search based on input value
    input.addEventListener("keyup", function (e) {
        const searchInput = e.target.value;
        if (searchInput.length >= 3) {
            for (let i = 0; i < cards.length; i++) {
                if (
                    cards[i].textContent
                        .toLowerCase()
                        .includes(searchInput.toLowerCase())
                ) {
                    cards[i].classList.remove("hidden");
                } else {
                    cards[i].classList.add("hidden");
                }
            }
        } else if (searchInput.length === 0) {
            cards.forEach((card) => card.classList.remove("hidden"));
        }
    });
}
