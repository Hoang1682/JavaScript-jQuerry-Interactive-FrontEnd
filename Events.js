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
function checkUsername() { // Declare function 
    var elMsg = document.getElementById('feedback'); // Get feedback element
    var elUsername = document.getElementById('username'); // Get username input 
    if (elUsername.value.length < 5) { // If user name too short
        elMsg.textContent = 'Username must be 5 character or more'; // Set msg 
    } else { // Otherwise 
        elMsg.textContent = ''; // Clear message
    }
}



// USING DOM EVENT HANDLERS
function checkUsername() { // declare function 
    var elMsg = document.getElementById('feedback'); // get feedback element 
    if(this.value.length < 5) {  // if userName too short
        elMsg.textContent = 'User name must be 5 charaters or more'; // set msg 
    } else { // otherwise 
        elMsg.textContent = ''; // clear msg 
    }
}
var elUsername = document.getElementById('username'); // get userName input
elUsername.onblur = checkUsername; // when it lose focus call checkUsername()



// USING EVENT LISTENERS
function checkUsername() { // declare function 
    var elMsg = document.getElementById('username'); // get feedback element
    if (this.value.length < 5) { // if username too short
        elMsg.textContent = 'Username must be 5 characters or more'; // set msg
    } else { // otherwise 
        elMsg.textContent = ''; // clear msg 
    }
}
var elUsername = document.getElementById('username'); // get username input 
// when it lose focus call checkUsername()
elUsername.addEventListener('blur', checkUsername, false);



// USING PARAMETERS WITH EVENT LISTENERS 
var elUsername = document.getElementById('username'); // get username input 
var elMsg = document.getElementById('feedback'); // get feedback element 
function checkUsername(minLength) { // declare function 
    if (elUsername.value.length < minLength) { // if user name too short
        elMsg.textContent = 'Username must be ' + minLength + 'charaters or more';
    } else { // otherwise 
        elMsg.textContent = ''; //clear msg 
    }
}
elUsername.addEventListener('blur', function() { // when it lose focus
    checkUsername(5); // pas argument here
}, false); 



// FALLBACK FOR USING EVENT LISTENERS IN IE8
var elUsername = document.getElementById('username'); // get username input 
var elMsg = document.getElementById('feedback'); // get feedback element 
function checkUsername(minLength) { // declare the function 
    if (elUsername.value.length < minLength) { // if the username too short
        elMsg.textContent = 'User name must be ' + minLength + ' charaters or more';
    } else { // otherwise
        elMsg.textContent = ''; // clear msg 
    }
}
if (elUsername.addEventListener) { // if event listener support
    elUsername.addEventListener('blur', function() { // when username lose focus 
        checkUsername(5); // call checkUsername()
    }, false ); // capture during bubble phase 
} else { // otherwise 
    elUsername.attachEvent('onblur', function() { // IE fallback: onblur
        checkUsername(5); // call checkUsername()
    });
}



// USING EVENT LISTENERS WITH THE EVENT OBJECT
function checkLength(e, minLength) { // declare function 
    var el, elMsg; // declare variable 
    if (!e) { // if event object doesn't exist 
        e = window.event; // if it doesn't exist set it to the child of window object
    }
    el = e.target || e.srcElement; // get target of event 
    elMsg = el.nextSibling; // get its next sibling 

    if (el.value.length < minLength) { // if the username too short
        elMsg.innerHTML = 'Username must be ' + minLength + ' charater or more';
    } else { // otherwise 
        elMsg.innerHTML = ''; // clear msg 
    }
}

var elUsername = document.getElementById('username'); // query element: get username input
if (elUsername.addEventListener) { // if the event listener support
    elUsername.addEventListener('blur', function(e) { // on blur event 
        checkLength(e, 5); // call checkUsername()
    }, false ); // capture in bubble phase
} else { // otherwise 
    elUsername.attachEvent('onblur', function(e) { // IE fallback onblur 
        checkLength(e, 5); // call checkUsername()
    });
}