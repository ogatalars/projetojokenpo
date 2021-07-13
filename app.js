let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice() { 
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3 );
    return choices[randomNumber];
}

console.log(getComputerChoice());

function convertToWord(letter) { 
    if(letter === "r") return "pedra";
    if(letter === "p") return "papel";
    return "Tesoura";
}

function ganhou(userChoice, computerChoice) { 
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} ganhou ${convertToWord(computerChoice)}. Você ganhou"`;
}    
    
function perdeu(userChoice, computerChoice) { 
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertToWord(userChoice)} ganhou ${convertToWord(computerChoice)}. Você perdeu"`;
}    

function empatou() { 
    console.log('empatou');
}



function game(userChoice) { 
    const computerChoice = getComputerChoice();
    console.log(computerChoice);
    console.log("Sua escolha =>" + userChoice);
    console.log("Escolha do computador =>" + computerChoice);
    switch (userChoice + computerChoice) { 
        case "rs":
        case "pr":
        case "sp":
            ganhou(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            perdeu(userChoice, computerChoice);
            break;        
        case "rr":
        case "pp":
        case "ss":
            empatou(userChoice, computerChoice);
            break;        
    }

}
game();

function main() { 
 rock_div.addEventListener('click', function() {
    game("r");
    
 })

 paper_div.addEventListener('click', function() {
    game("p");
 })

 scissors_div.addEventListener('click', function() {
    game("s");
 })
}

main();