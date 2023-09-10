const ctnTime = document.getElementById("time");
const ctnScoreHome = document.getElementById("score-home");
const ctnScoreGuest = document.getElementById("score-guest");
const button = document.querySelectorAll('button');
const winnerDisplay = document.getElementById("winner-display");
let time = 60;
let timmer;
let scoreHome = 0;
let scoreGuest = 0;

// Disable Start Button
disableStartButton();

// Start Timmer
startTimmer();
    
// Home Score    
function scoreHomePlus1 (){
    scoreHome += 1
    ctnScoreHome.textContent = scoreHome;
    highScore();
} 
function scoreHomePlus2 (){
    scoreHome += 2
    ctnScoreHome.textContent = scoreHome;   
    highScore(); 
}
function scoreHomePlus3 (){
    scoreHome += 3
    ctnScoreHome.textContent = scoreHome;   
    highScore();   
}

// Guest Score    
function guestScorePlus1 (){
    scoreGuest += 1
    ctnScoreGuest.textContent = scoreGuest;
    highScore();
} 
function guestScorePlus2 (){
    scoreGuest += 2
    ctnScoreGuest.textContent = scoreGuest;
    highScore();    
}
function guestScorePlus3 (){
    scoreGuest += 3
    ctnScoreGuest.textContent = scoreGuest;    
    highScore();  
}

// New Game
function newGame () {
    scoreHome = 0;
    scoreGuest = 0;
    ctnScoreHome.textContent = 0;
    ctnScoreGuest.textContent = 0; 
    stopTimmer();
    time = 60;
    ctnTime.textContent = time; 
    startTimmer();
    highScore();
    enableCountButtons();
    disableStartButton();
    winnerDisplay.textContent = ``;
    winnerDisplay.style.display = "none";
}  

// High Score
function highScore() {
    if(scoreHome > scoreGuest) {
        ctnScoreHome.classList.add("highlight");
        ctnScoreGuest.classList.remove("highlight");
    } else if(scoreHome < scoreGuest) {
        ctnScoreGuest.classList.add("highlight");
        ctnScoreHome.classList.remove("highlight");
    } else {
        ctnScoreHome.classList.remove("highlight");
        ctnScoreGuest.classList.remove("highlight");
    }
}  

// Timmer 
function startTimmer() {
    timmer = setInterval(()=> {   
        if(time > 1) {
            time -= 1;
            ctnTime.textContent = time; 
        } else {
            time = 0;
            ctnTime.textContent = time; 
            clearInterval(timmer);
                console.log(checkForWinner());
                disableCountButtons();
                enableStartButton();
        }
    }, 1000);  
}

function stopTimmer() {
    clearInterval(timmer);
}

// Winner
function checkForWinner() {
    if(scoreHome > scoreGuest) {
        confetti();
        winnerDisplay.style.display = "block";
        winnerDisplay.textContent = `🏆 Home Team Wins! 🏆`;
        // return `Home Team Wins!`;
    } else if(scoreGuest > scoreHome) {
         confetti();
         winnerDisplay.style.display = "block";
         winnerDisplay.textContent = `🏆 Guest Team Wins! 🏆`;
        // return `Guest Team Wins!`;
    } else {
        confetti();
        winnerDisplay.style.display = "block";
        winnerDisplay.textContent = `It's a Tie!`;
        // return `It's a Tie!`;
    }
}

// Confetti
function confetti() {
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti()
}

// Disable Buttons
function disableStartButton() {
    document.getElementById("new-game").disabled = true;
}

function disableCountButtons() {
     button.forEach(b=>{
        if(b.id !== "new-game") {
            b.disabled = true;      
        }         
    })       
}

// Enable Buttons
function enableStartButton() {
    document.getElementById("new-game").disabled = false;
}

function enableCountButtons() {
    button.forEach(b=>{
        if(b.id !== "new-game") {
            b.disabled = false;      
        }         
    })       
}
