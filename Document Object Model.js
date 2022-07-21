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



// SELECTING ELEMENTS USING CSS SELECTORS 
//querySelector() only return the first match 
var el = document.querySelector('li.hot');
el.className = 'cool';
// querySelectorAll() return a Nodelist
var els = document.querySelectorAll('li.hot');
els[1].className = 'cool';



// REPEATING ACTIONS FOR AN ENTIRE NODELIST
var hotItems = document.querySelectorAll('li.hot') 
for (var i = 0; i < hotItems.length; i++) {
    hotItems[i].className = 'cool';  // hotItems[i] repeat the statement for each item in the Nodelist 
}