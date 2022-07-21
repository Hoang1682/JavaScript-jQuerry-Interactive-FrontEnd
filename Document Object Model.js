// SELECTING ELEMENT FROM A NODELIST
// THE item() method 
var elements = document.getElementsByClassName('hot');
// Check if the nodelist contain at least one item or not (wastes resource)
if (elements.length >= 1) {  // 
    firstItem = elements.item(0);
}

//THE array syntax
var elements = document.getElementsByClassName('hot');
// // Check if the nodelist contain at least one item or not (wastes resource)
if (elements >= 1) {
    firstItem = elements[0];
}



// SELECTING ELEMENTS USING A CLASS ATTRIBUTES
// Find hot items
var elements = document.getElementsByClassName('hot');
// If 3 or more are found
if (elements > 3) {
    var el = elements[2];  // Selecte the third one from the Node list
    el.className = 'cool'; // Change the value of its class attribute 
}



// SELECTING ELEMENTS BY TAG NAME 
// Find <li> elements 
var elements = document.getElementsByTagName('li')
if (elements > 1) {  // If 1 or more are found 
    var el = elements[0];  // Select the first one using array syntax
    el.className = 'cool'; // Change the value of the class attribute
}


