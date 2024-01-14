// initialise list for moves

const moves = ['Rock', 'Paper', 'Scissors'];


function getComputerChoice(){
    let random = Math.floor(Math.random() * moves.length);
    console.log(moves[random]);
    return moves[random];
}



function playRound(playerSelection, computerSelection){

    // rules for computer selecting rock
   
        // Rules for computer selecting rock
        if (computerSelection == 'Rock' && playerSelection == 'rock') {
            return 'It\'s a tie!';
        } else if (computerSelection == 'Rock' && playerSelection == 'paper') {
            return 'Player won!';
        } else if (computerSelection == 'Rock' && playerSelection == 'scissors') {
            return 'Computer won!';
        }
    
        // Rules for computer selecting paper
        if (computerSelection == 'Scissors' && playerSelection == 'rock') {
            return 'Player won!';
        } else if (computerSelection == 'Scissors' && playerSelection == 'paper') {
            return 'Computer won!';
        } else if (computerSelection == 'Scissors' && playerSelection == 'scissors') {
            return 'It\'s a tie!';
        }
    
        // Rules for computer selecting scissors
        else if (computerSelection == 'Paper' && playerSelection == 'paper') {
            return 'It\'s a tie!';
        } else if (computerSelection == 'Paper' && playerSelection == 'scissors') {
            return 'Player won!';
        }
    }
    


let computerSelection = getComputerChoice();
let playerSelection = 'paper';
console.log(playRound(playerSelection, computerSelection));
