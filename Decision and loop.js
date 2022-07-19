// USING THE LOGICAL AND 
var score1 = 8;
var score2 = 8;
var pass1 = 6;
var pass2 = 6;
// Check whether user passed both rounds
var passBoth = (score1 >= pass1) && (score2 >= pass2);
// Create message, store in variable
var msg = 'Both rounds passed: ' + passBoth;


// USING LOGICAL OR AND LOGICAL NOT 
var score1 = 8;
var score2 = 8;
var pass1 = 6;
var pass2 = 6;
// Check whether user pass one of the two rounds
var minPass = ((score1 >= pass1) || (score2 >= pass2));
// Create message, store result in variable
var msg = 'Resign required: ' + !(minPass);


// USING IF STATEMENT
// Create variable contain score, message
var score = 75;
var msg;
// Check if the score is 50 or higher 
if (score > 50 ) {
    msg = 'Congratulations!';
    msg += ' Proceed to the next round.';
}


// USING IF... ELSE STATEMENT 
// Create a variable contain a pass mark
var pass = 50;
var score = 75;
var msg;
// Selected the message to write base on score
if (score >= pass) {
    msg = 'Congratulations, you passed!';
} else {
    msg = 'Have another go!';
}
// See the result
console.log(msg);


// USING SWITCH STATEMENTS
// Create variable contain a message, a number indicating which level the user is on 
var msg;
var level = 2;
// Determine message based on level
switch (level) {
    case 1:
        msg = 'Good luck on the first test';
        break;
    case 2:
        msg = 'Second of three, keep going!';
        break;
    case 3:
        msg = 'Final round, almost there!';
        break;
    default:
        msg = 'Good luck!';
        break;
}
