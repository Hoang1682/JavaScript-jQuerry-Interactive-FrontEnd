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
    var elMsg = document.getElementById('feedback'); // get feedback element
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




// USING EVENT DELEGATION 
function getTarget(e) { // declare function to get the element user click on 
    if (!e) { // check if there is no event object 
        e = window.event; // if no: set it to the child of window 
    }
    return e.target || e.srcElement; // get target of the event 
}

function itemDone() { // declare funcion to remove item when its complete
    // remove item from the list 
    var target, elParent, elGrandparent; // declare the variable to hold the information 
    target = getTarget(e); // get the element the user click on 
    elParent = target.parentNode; // get it parent element (the <li> element)
    elGrandparent = target.parentNode.parentNode; //get it grandparenet (the <ul> element)
    elGrandparent.removeChild(elParent); // remove the <li> element from the <ul> element 

    // prevent link to taking you to the new page 
    if (e.preventDefault) { // check if the preventDefault is support
        e.preventDefault(); // use method preventDefault()
    } else { // otherwise 
        e.returnValue = false; // use returnValue property support on the older version 
    }
}

// SET UP EVENT LISTENER TO CALL itemDome() ON CLICK 
var el = document.getElementById('shoppingList'); // query the containing element
if (el.addEventListener) { // if event listener is work
    el.addEventListener('click', function() { // add event listener on click
        itemDone(e); // call function itemDone()
    },false); // use bubbing phase for flow 
} else { // otherwise 
    el.attachEvent('onclick', function() { // using attachEvent method support on the older browser 
        itemDone(e); // call function itemDone()
    });
}




// WHICH ELEMENT DID AN EVENT OCCUR ON?
// Using this keyword
function checkUsername() {
    var elMsg = document.getElementById('feedback');
    if (this.value.length < 5) {
        elMsg.innerHTML = 'Not long enough';
    } else {
        elMsg.innerHTML = '';
    }
}
var el = document.getElementById('username');
el.addEventListener('blur', checkUsername ,false);

// Using parameters 
function chekUsername(el, minLength) {
    var elMsg = document.getElementById('feedback');
    if (el.value.length < minLength) {
        elMsg.innerHTML = 'Not long enough';
    } else {
    elMsg.innerHTML = '';
    }
}
var el = document.getElementById('username');
el.addEventListener('blur', function() {
    chekUsername(el, 5);
},false );




// LOAD EVENT 
function setup() { // declare function 
    var textInput; // creat variable 
    textInput = document.getElementById('username'); // query to the username input 
    textInput.focus(); // give username focus 
}
window.addEventListener('load', setup, false); // when page load call setup() function




// FOCUS AND BLUR EVENT 
function checkUsername() { // declare function 
    var username = el.value; // store username in function 
    if (username.length < 5) { // if user name too short
        elMsg.className = 'warning'; // change the class on the message
        elMsg.textContent = 'Not long enough, yet...'; // update the message
    } else { // otherwise 
        elMsg.textContent = ''; // clear message 
    }
}
function tipUsername() { // declare function 
    elMsg.className = 'tip'; // change class for message 
    elMsg.textContent = 'Username must be at least 5 characters'; // add message 
}

var el = document.getElementById('username'); // query to usernam input 
var elMsg = document.getElementById('feedback'); // query to element hold message 

// when the user name gain or lose focus call function above:
el.addEventListener('focus', tipUsername, false); // focus call tipUsername()
el.addEventListener('blur', checkUsername, false ); // blur call checkUsername()



// CLICK 
// create HMTL for the message 
var msg = '<div class="header"><a id="close" href="#">close X</a></div>';
msg += '<div><h2>System Mait</h2>';
msg += 'Our server are being updated between 3 and 4 a.m. ';
msg += 'During this time, there may be minor disruptions to service.</div>';

var elNote = document.createElement('div'); // Create a new element 
elNote.setAttribute('id', 'note'); // Add an id='note' attribute
elNote.innerHTML = msg; // add the message 
document.body.appendChild(elNote); // add it to the page 

function dismissNote() { // declare function 
    document.body.removeChild(elNote); // re move the note from the page 
}
  
var elClose = document.getElementById('close'); // query to the close button 
elClose.addEventListener('click', dismissNote, false); // click the close button to clear the note 



// DETERMINING POSITION 
var sx = document.getElementById('sx'); // query to element hold screenX
var sx = document.getElementById('sy'); // query to element hold screenY
var sx = document.getElementById('px'); // query to element hold pageX
var sx = document.getElementById('py'); // query to element hold pageY
var sx = document.getElementById('cx'); // query to element hold clientX
var sx = document.getElementById('cy'); // query to element hold clientY

function showPosition() { // declare function 
    sx.value = event.screenX; // Update element with screenX
    sy.value = event.screenY; // Update element with screeny
    px.value = event.pageX; // Update element with pageX
    py.value = event.pageY; // Update element with pageY
    cx.value = event.clientX; // Update element with clientX
    cy.value = event.clientY; // Update element with clientY
}

var el = document.getElementById('body'); // query to the body 
el.addEventListener('mousemove', showPosition, false);



// WHICH KEY WAS PRESSED
var el ; // declare variable 

function charCount(e) { // declare function (e: meaning the key was press)
    var textEntered, charDisplay, counter, lastKey;
    textEntered = document.getElementById('message').value;
    charDisplay = document.getElementById('characterLeft');
    counter = (180 - (textEntered.length));
    charDisplay.textContent = counter;

    lastKey = document.getElementById('lastKey');
    lastKey.textContent = 'Last key in ASSCII code: ' + e.keyCode;
}
el = document.getElementById('message');
el.addEventListener('keypress', charCount, false);



// USING FORM EVENTS
var elForm, elSelectPackage, elPackageHint, elTerms, elTermsHint; // declare variables
elForm = document.getElementById('formSignup'); // query to the form element
elSelectPackage = document.getElementById('package'); // query to the select element
elPackageHint = document.getElementById('packageHint'); // query to the div element witht the id packHint
elTermsHint = document.getElementById('termsHint'); // query to the div element with the id termsHint
elTerms = document.getElementById('terms'); // query to the input checkbox element

function packageHint() {
    var package = this.option[this.selectedIndex].value; // query to the select > option 
    if (package == 'monthly') {
        elPackageHint.innerHTML = 'Save $10 if you pay for 1 year!'; // Show msg
    } else { // otherwise 
        elPackageHint.innerHTML = 'Wise choice!'; // show msg
    }
}

function checkTerms(event) {
    if (!elTerms.checked) { // if the checkbox ticked
        elTermsHint.innerHTML = 'You must agree to the terms.'; // show msg 
        event.preventDefault(); // prevent the default behavior from submitting data
    }
}

// using event listener 
elForm.addEventListener('submit', checkTerms, false);
elSelectPackage.addEventListener('change', packageHint, false);



// USING MUTATION EVENTS 
var addLink, elList, newEl, listItems, counter, newText; // declare variables
addLink = document.querySelector('a'); // query to the a element 
elList = document.getElementById('list'); // query to the ul element 
counter = document.getElementById('counter'); // query to the span element with the id counter 

function addItem(e) {
    e.preventDefault(); // prevent the default behaviour of the a element when event listener call the a element
    newEl = document.createElement('li'); // create a new li element (need to be add to the ul element)
    newText = document.createTextNode('New list item'); // create text node to show the text in the li element you just created before
    newEl.appendChild(newText); // add the text node to the li element you just created before
    elList.appendChild(newEl); // add the li element to the ul element
}

function updateCount() {
    listItems = list.getElementsByTagName('li').length; // count how many li element it have 
    counter.innerHTML = listItems; // update the counter show in the span element 
}

addLink.addEventListener('click', addItem, false);
elList.addEventListener('DOMNodeInserted', updateCount, false);