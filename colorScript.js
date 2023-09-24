const colors = ['red', 'blue', 'green', 'yellow'];
const colorText = document.getElementById('colorText');
const buttons = document.querySelectorAll('.color-button');
const scoreElement = document.getElementById('score');

let score = 0;
let currentColor = '';

function getRandomColor() { 
    return colors[Math.floor(Math.random() * colors.length)];
}

function updateScore() {
    scoreElement.textContent = `Score: ${score}`;
}

function generateRound(){
    currentColor = getRandomColor(); // Generate a random color for this round
    colorText.textContent = currentColor; // Display the color name as text
    colorText.style.color = getRandomColor(); // Change the text color to match the displayed color
}

function startGame() {
    generateRound()
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.id === currentColor) { // Compare button text with the color name
                // alert('Correct!');
                score++; // Increase the score for a correct answer
                updateScore(); // Update the score displayed on the page
                generateRound(); // Start a new round
            } else {
                alert('Wrong. Try again.');
            }
        });
    });
}

startGame();