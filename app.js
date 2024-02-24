let userscore = 0;
let compscore = 0;

const choices= document.querySelectorAll(".choice");
const msg = document.querySelector('#msg'); 

const userscorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#comp-score");



const genCompChoice = () => {
    const options=["rock","paper","scissor"];
    const randIdx= Math.floor(Math.random()  *3 );
    return options[randIdx];
};

const drawGame = () => {
    //console.log("game was draw.");
    msg.innerText= "Game was draw. Play again.";
    msg.style.backgroundColor = "#081b31";


};


const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin) {
        userscore++;
        userscorePara.innerText = userscore;
        //console.log("You Win!");
        msg.innerText= `You Win!  Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compscorePara.innerText = compscore;
        //console.log("You lose");
        msg.innerText= `You lost. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";



    }
};

const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    //Generate Computer choice
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);

    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            //scissor,paper
            userWin = compChoice ==="paper" ? false : true;
        } else if(userChoice === "paper") {
            //rock,scissor
            userWin = compChoice ==="scissor" ? false : true;
        } else {
            //rock,paper
            userWin = compChoice ==="rock" ? false : true;

        }

          showWinner(userWin , userChoice, compChoice);
        }
    

};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
        
    });
});