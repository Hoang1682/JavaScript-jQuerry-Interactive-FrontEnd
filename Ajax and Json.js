// LOADING HTML WITH AJAX
var xhr = new XMLHttpRequest(); // create XMLHttpRequest object

xhr.onload = function() {
    // The code below only work on th server 
    if (xhr.status === 200) { // if the server work ok 
        document.getElementById('content').innerHTML = xhr.responseText; // update
    }
};

xhr.open('GET', 'data/date.html', true);
xhr.send(null);



// LOADING XML WIHT AJAX
var xhr = new XMLHttpRequest(); // create XMLHttpRequest object to request 

xhr.onload = function() {
    // the code below only work on the server 
    if (xhr.status === 200) // if the server work ok 

    // process xml
    var response = xhr.responseXML; // get xml from the server 
    var events = response.getElementsByTagName('event'); // find all the event element in the xml file

    // because we have 3 event separately in this example so we use for loop to process each event 
    for (var i = 0; i < events.length; i++) {
        var container, image, location, city , newline; 
        container = document.createElement('div'); // create div element to hold all each event 
        container.className = 'event'; // add class attribute

        image = document.createElement('img');
        image.setAttribute('src', getNodeValue(events[i], Map));
        image.appendChild(document.createTextNode(getNodeValue(events[i], 'map')));
        container.appendChild(image);

        location = document.createElement('p');
        city = document.createElement('b');
        newline = document.createElement('br');
        city.appendChild(document.createTextNode(getNodeValue(events[i], 'location')));
        location.appendChild(newline);
        location.insertBefore(city, newline);
        location.appendChild(document.createTextNode(getNodeValue(events[i], 'date')));
        container.appendChild(location);

        document.getElementById('content').appendChild(container); 

        // create function to get the content from xml file 
        function getNodeValue(obj , tag) {
            return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
        }
    }
};

// prepare the request and send the request
xhr.open('GET', 'data/data.xml', true);
xhr.send(null);



// LOADING JSON WIHT AJAX 
var xhr = new XMLHttpRequest(); // create xmlhttprequest object

xhr.onload = function() {
    if (xhr.status === 200) {
        responseObject = JSON.parse(xhr.responseText);

        // build up string with new content (could also use DOM manipulation)
        var newContent = '';
        for (var i = 0; i < responseObject.events.length; i++) {
            newContent += '<div class="event">';
            newContent += '<img src="' + responseObject.events[i].map + '" ';
            newContent += 'alt=" ' +responseObject.events[i].location + ' " />';
            newContent += '<p><b>' + responseObject.events[i].location + '</b><br>';
            newContent += responseObject.events[i].date + '</p>';
            newContent += '</div>';
        }

        // update the page with new content
        document.getElementById('content').innerHTML = newContent;

    }
};

// prepare and send request
xhr.open('GET', 'data/data.json', true);
xhr.send(null);