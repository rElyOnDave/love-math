// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                rungame(gameType);
            }
        });
    }
    rungame("addition");
});

/**
 * The game "loop", called when the script is first loaded
 * and after the users answers have been processed.
 */
function rungame(gameType) {
    // Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2 );
    } else {
        alert(`Unkown game type: ${gameType}`);
        throw `Unkown game type: ${gameType}. Aborting!`;
    }
}
function checkAnswer() {

 /**
  * Gets operands (the numbers) and the operator (plus, minus, multiply, divide, etc.)
  * directly from the  dom, and returns the correct answer
 */
}
function calculateCorrectAnswer() {
    // Get the operands and the operator from the DOM
    let operand1 = parseInt(document.getElementById(`operand1`).innerText);
    let operand2 = parseInt(document.getElementById(`operand2`).innerText);
    let operator = document.getElementById(`operator`).innerText;
    
    // Calculate the correct answer
    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else {
        alert(`Unimplemented operator: ${operator}`);
        throw `Unimplemented operator: ${operator}. Aborting!`;
    }

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById(`operand1`).textContent = operand1;
    document.getElementById(`operand2`).textContent = operand2;
    document.getElementById(`operator`).textContent = "+";

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {
    
}