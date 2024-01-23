let yourScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let message = document.querySelector("#msg");
let yourScoreValue = document.querySelector("#your-score");
let compScoreValue = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const arr = ["rock","paper","scissors"];
    const val = Math.floor(Math.random() * 3);
    return arr[val];
};

const draw = () => {
    message.innerText = "The game is a draw.";    
};

const showWinner = (youWin,yourChoice,compChoice) => {
    if(youWin){
        message.innerText = `Your choice ${yourChoice} wins over ${compChoice}`;
        message.style.background = "green";
        yourScore++;
        yourScoreValue.innerText = yourScore;
    }
    else{
        message.innerText = `Your choice ${yourChoice} lost to ${compChoice}`;
        message.style.background = "red"; 
        compScore++;
        compScoreValue.innerText = compScore;
    }
}

const playGame =  (yourChoice) => {
    //generate computers choice
    const compChoice = genCompChoice();
    //compare your choice with computers choice
    if(yourChoice === compChoice){
        draw();
    }
    else{
        let youWin = true;
        if(yourChoice === "rock"){
            youWin = compChoice=== "scissors" ? true : false;
        }
        else if(yourChoice === "paper"){
                youWin = compChoice === "rock" ? true : false;
        }
        else{
            youWin = compChoice === "paper" ? true : false;
        }
        showWinner(youWin,yourChoice,compChoice);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click",() => {
        const yourChoice = choice.getAttribute("id");
        playGame(yourChoice);
    });
});