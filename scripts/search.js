export function searchInput() {
    const input = document.querySelector("input");
    const cards = document.querySelectorAll("article");

    input.addEventListener("keyup", function (e) {
        const searchInput = e.target.value;
        console.log(cards[1]);
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

        console.log(searchInput);
    });
}
