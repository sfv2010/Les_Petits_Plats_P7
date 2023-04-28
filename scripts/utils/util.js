//Function to capitalize first letter
export function capitalize(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    }
}
//Function to empty if there are characters already entered in the tag input
export function emptyInput() {
    const inputByTags = document.querySelectorAll(".searchBox");
    if (inputByTags) {
        inputByTags.forEach((inputTag) => {
            inputTag.value = "";
        });
    }
}
