let num1, num2, operator, correctAnswer;
let score = 0;

function generateQuestions() {
    const operators = ["+", "-", "*"];

    num1 = Math.floor(Math.random() * 11);
    num2 = Math.floor(Math.random() * 11);

    const question = document.getElementById("question");

    operator = operators[Math.floor(Math.random() * operators.length)];

    question.textContent = num1 + " " + operator + " " + num2;

    if (operator === "+") {
        correctAnswer = num1 + num2;
    } else if (operator === "-") {
        correctAnswer = num1 - num2;
    } else {
        correctAnswer = num1 * num2;
    }
}

function checkAnswer() {
    let value = parseInt(document.getElementById("answer").value);
    let answer = document.getElementById("message");

    // Check if the answer is correct; if it matches the value
    if (value === correctAnswer) {
        answer.style.color = "green";
        answer.textContent = "Correct!";
    
        score++;
        document.getElementById("score").textContent = score;
        generateQuestions();
    } else {            
        answer.style.color = "red";
        answer.textContent = "Wrong! The correct answer was " + correctAnswer;
        generateQuestions();
    }

    // If it reaches score, end the game
    if (score >= 5) {
        document.getElementById("div-questions").style.display = "none";
        document.getElementById("div-success").style.display = "block";
        answer.textContent = "";
        
    }        
}

function playAgain() {
    score = 0;
    document.getElementById("score").textContent = score;
    document.getElementById("div-questions").style.display = "block";
    document.getElementById("div-success").style.display = "none";
    generateQuestions();
}

generateQuestions();