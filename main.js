
// function error() {
//     const error = 0;
//     // `${error} / 3`
//     if (error == 3) {
//         gameOver();
//     }
// }
// function gameOver() {

// }
function contendFor() {
    const contentDiv = document.getElementById('content');
    // Loop to create 9x9 grid
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const newDiv = document.createElement('div');
            const randomIndex = Math.floor(Math.random() * shuffledArray.length); // Random index to get values from shuffled array
            newDiv.textContent = shuffledArray[randomIndex]; // Assign random value from shuffledArray
            contentDiv.appendChild(newDiv);
            console.log("content div'ine yeni div eklendi");
        }
    }
}

function random(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

const contentNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const shuffledArray = random([...contentNumber]);

console.log(shuffledArray);
contendFor();