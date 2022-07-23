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



// ACCESSING TEXT ONLY (COMPARE THE DIFFERENT BETWEEN textContent and innerText)
var firstItem = document.getElementById('one'); // Find the first list item
var showTextContent = firstItem.textContent;
var showInnerText = firstItem.innerText;
// Show the content of two properties at the end of the list
var msg = '<p>textContent: ' + showTextContent + '</p>';
msg += '<p>innerText: ' + showInnerText + '</p>';
var el = document.getElementById('scriptResults'); // Accessing the element node  
el.innerHTML = msg; // Adding content to the node (using innerHTML property - show below)
firstItem.textContent = 'sourdough bread'; // Update the first list item



// ACCESS AND UPDATE TEXT AND MARKUP WITH innerHTML
<li id="one"><em>fresh</em> figs</li> 
// Collect content of the list item and add it to variable call elContent
var elContent = document.getElementById('one').innerHTML; // '<em>fresh</em> figs'
// Add the content of the elContent variable to the first list item
document.getElementById('one').innerHTML = elContent;



// UPDATE TEXT AND MARKUP 
// Store the first item in a variable
var firstItem = document.getElementById('one');
// Get the content of the first item list 
var itemContent = firstItem.innerHTML;
// Update the content of the first list item so it is a link  
firstItem.innerHTML = '<a href=\"https://example.org\">' + itemContent + '</a>';




// ADDING AN ELEMENT TO THE DOM TREE
// Create a new element and store it in a variable 
var newEl = document.createElement('li');
// Create a text node and store it in a variable 
var newText = document.createTextNode('quinoa');
// Attach the new text node to the new element 
newEl.appendChild(newText);
// Find the position where the new element should be added 
var position = document.getElementsByTagName('ul')[0];
// Insert the new element into its position 
position.appendChild(newEl);



// REMOVE AN ELEMENT FROM THE DOM TREE
// The element you want to remove
var removeEl = document.getElementsByTagName('li')[3];
var containerEl = removeEl.parentNode; // It containing element
containerEl.removeChild(removeEl); // Removing the element 



// CHECK FOR AN ATTRIBUTE AND GET IT VALUE 
// Get the first list item 
var firstItem = document.getElementById('one');
if (firstItem.hasAttribute('class')) {  // If it has class attribute
    var attr = firstItem.getAttribute('class'); // Get it attribute
    // Add the value of the attribute after the list 
    var el = document.getElementById('scriptResult');
    el.innerHTML = '<p>The first item has class name: ' + attr + '<p>';
}