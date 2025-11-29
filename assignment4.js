// NAME-NIMARTA KAUR THIND
//ROLL NO-2501420013
//PROMPT QUIZZER

// Quiz questions array
const quizQuestions = [
    { question: "Which is the largest continent in the world?", answer: "Asia" },
    { question: "What is the national animal of India?", answer: "Tiger" },
    { question: "Which is the smallest month of the year?", answer: "February" },
    { question: "Who wrote the national anthem of India?", answer: "Rabindranath Tagore" },
    { question: "How many colors are there in a rainbow?", answer: "7" },
    { question: "What is the currency of India?", answer: "rupee" },
    { question: "Which is the largest ocean on Earth?", answer: "Pacific Ocean" }
];

// Function to run the quiz
function runQuiz() {
    let score = 0; // Initialize score

    for (let i = 0; i < quizQuestions.length; i++) {
        // Take user input
        const userAnswer = prompt(quizQuestions[i].question);

        // Check answer (case-insensitive and trimmed)
        if (
            userAnswer &&
            userAnswer.toLowerCase().trim() === quizQuestions[i].answer.toLowerCase().trim()
        ) {
            alert("Correct!");
            score++;
        } else {
            alert(`Wrong! The correct answer is: ${quizQuestions[i].answer}`);
        }
    }

    // Show final score
    alert(`Quiz Over! Your final score is ${score} out of ${quizQuestions.length}`);
}

runQuiz();
