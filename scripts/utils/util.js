//Function to capitalize first letter
export function capitalize(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    }
}
