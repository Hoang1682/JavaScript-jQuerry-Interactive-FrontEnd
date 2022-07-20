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


// USING FOR LOOPS 
var scores = [24, 32, 17]; // Array of scores
var arrayLength = scores.length; // Item in array 
var roundNumber = 0; // Current round
var msg = ''; // Message 
var i; // Counter 
// Loop through the items in the array
for (i = 0; i < arrayLength; i++) {
    // Arrays are zero based (so 0 is round 1)
    // Add 1 to the current round 
    roundNumber = (i + 1);
    // Write the current round to the message
    msg += 'Round' + roundNumber + ': ';
    // Get the score from the score array
    msg += scores[i] + '<br />';
}


// USING WHILE LOOPS 
var i = 1; // Set counter to 1
var msg = ''; // Message
// Store 5 times table in a variable
while (i < 10) {
    msg += i + ' x 5 = ' + (i * 5) + ' <br />';
    i++;
}


// USING DO...WHILE LOOPS
var i = 1; // Set counter to 1
var msg = ''; // Message
// Store 5 times table in a variable
do {
    msg += i + ' x 5 = ' + (i * 5) + '<br />';
    i++;
} while (i < 1);
// Note how this is already 1 and it still runs



// EXAMPLE
var table = 3; // Unit of table
var operator = 'addition'; // Type of calculation (default to addition)
var i = 1; // Set counter is 1
var msg = ''; // Message

if (operator === 'addition') { // If the operator variable says addition
    while (i < 11) { // While counter is less than 11
        msg += i + ' + ' + table + ' = ' + (i + table) + '<br />'; // Calculation
        i++; // Add 1 to the counter 
    }
} else { // Otherwise
    while (i < 11) { // While counter is less than 11
        msg += i + ' x ' + table + ' = ' + (i * table) + '<br />'; // Calculation
        i++; // Add 1 to the counter 
    }
}
