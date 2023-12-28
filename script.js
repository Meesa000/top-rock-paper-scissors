// initialise list for moves

const moves = ['Rock', 'Paper', 'Scissors'];

// create function that picks random number between 1 and 3 - this is how moves are chosen
function randomInt (min, max) {
    let chooseMove = Math.floor(Math.random() * (max - min + 1)) + min;  
    console.log(chooseMove);
    return chooseMove;
}

// create function for computer choice and call random int function
// when random int is 3, console log moves num is undefined????
function computerChoice (){
    let num = randomInt(1,3);
    console.log(moves[num]);
  

  
}

computerChoice();
// create function for playuer choice doing same way


