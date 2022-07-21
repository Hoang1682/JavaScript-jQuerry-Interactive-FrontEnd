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



// LOOPING THROUGH A NODELIST 
// Store NodeList in an array 
var hotItems = document.querySelectorAll('li.hot');
if (hotItems.length > 0) {  // If it contain items
    for (var i = 0; i < hotItems.length; i++) {  // Loop through each item
        hotItems[i].className = 'cool'; // Change value of class attribute
    }
}



// PREVIOUS AND NEXT SIBLING 
// Select the starting point and find its siblings
var startItem = document.getElementById('two');
var preItem = startItem.preSibling;
var nextItem = startItem.nextSibling;
// Change the value of the siblings' class attributes
preItem.className = 'cool';
nextItem.className = 'cool';



//  FIRST AND LAST CHILD 
// Select the starting point and find its children 
var startItem = document.getElementsByTagName('ul')[0];
var firstItem = startItem.firstChild;
var lastItem = startItem.lastChild;
// Change the value of the children's class attributes
firstItem.setAttribute('class', 'complete');
lastItem.setAtribute('class', 'cool');



// ACCESS AND UPDATE A TEXT NODE WITH nodeValue property 
<li id="one"><em>fresh</em> figs</li>
var hoang = document.getElementById('one').firstChild.nextSibling.nodeValue;
// Another way 
var hoang = document.getElementById('one').lastChild.nodeValue;



// ACCESSING AND CHANGING A TEXT NODE 
var itemTwo = document.getElementById('two');
// firstChild property is required to accessing the text
var text = itemTwo.firstChild.nodeValue;
    // or var text = itemTwo.lastChild.nodeValue; (because it has only one child)
// Changing the text inside the text node using String object replace() method
text = text.replace('pine nuts', 'kale');
// Update the list item
itemTwo.firstChild.nodeValue = text;
/* Note: - using the same variable name when accessing and changing the text
        - when update vaiable name (changing) = value (accessing)
*/