// THREE WAYS TO BIND AN EVENT TO TRIGGER TO AN ELEMENT 
< form method='post' action='http://www.example.org/register'>
    <label for='username'>Create a username: </label>
    <input type='text' id='username' onblur='chekUsername()' ></input>
    <div id='feedback'></div>

    <label for='password'>Create a password</label>
    <input type='password' id='password'></input>

    <input type='submit' value='Sign up!'></input>
</form>
// HTML EVENT HANDLER ATTRIBUTES (DO NOT USE)
function checkUsernam() { // Declare function 
    var elMsg = document.getElementById('feedback'); // Get feedback element
    var elUsername = document.getElementById('username'); // Get username input 
    if (elUsername.value.length < 5) { // If user name too short
        elMsg.textContent = 'Username must be 5 character or more'; // Set msg 
    } else { // Otherwise 
        elMsg.textContent = ''; // Clear message
    }
}