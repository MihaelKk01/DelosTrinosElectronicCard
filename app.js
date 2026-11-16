const homePage = document.getElementById("homePage");
const puzzlePage = document.getElementById("puzzlePage");
const letterPage = document.getElementById("letterPage");
const feedback = document.getElementById("feedback");

function startPuzzle() {
    homePage.classList.add("hidden");
    puzzlePage.classList.remove("hidden");
    letterPage.classList.add("hidden");
}

function checkAnswer(answer) {
    if (answer === "banana") {
        feedback.textContent = "Correct! You found it. Opening your surprise...";
        feedback.style.color = "#56845d";

        setTimeout(() => {
            puzzlePage.classList.add("hidden");
            letterPage.classList.remove("hidden");
        }, 900);

    } else {
        feedback.textContent = "Not quite! Try another answer.";
        feedback.style.color = "#b46d57";
    }
}

function goHome() {
    homePage.classList.remove("hidden");
    puzzlePage.classList.add("hidden");
    letterPage.classList.add("hidden");

    feedback.textContent = "Choose your answer to continue.";
    feedback.style.color = "#73777a";
}