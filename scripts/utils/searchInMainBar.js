export function searchInMainBar() {
    const input = document.querySelector("#search");
    const cards = document.querySelectorAll("article");

    //Search based on input value
    input.addEventListener("keyup", function (e) {
        const searchInput = e.target.value;
        if (searchInput.length >= 3) {
            cards.forEach((card) => {
                if (
                    card.textContent
                        .toLowerCase()
                        .includes(searchInput.toLowerCase())
                ) {
                    card.classList.remove("hidden");
                } else {
                    card.classList.add("hidden");
                }
            });
        } else if (searchInput.length === 0) {
            cards.forEach((card) => card.classList.remove("hidden"));
        }
    });
}
