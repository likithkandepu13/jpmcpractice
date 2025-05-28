// Document Object Model (DOM) in JavaScript
// The DOM is a programming interface for web documents.
// It represents the structure of a document as a tree of objects, allowing scripts to manipulate the content, structure, and style of a web page.
// The DOM provides methods and properties to access and modify HTML elements, attributes, and styles.
// The DOM is an essential part of web development, enabling dynamic content updates and interactivity.
// Example of DOM manipulation
// event listeners, setTimeout, setInterval, and more
// Example of DOM manipulation
// Selecting an element by ID
document.getElementById('myElement').innerHTML = 'Hello, World!'; // Change the content of the element with ID 'myElement'
// Selecting elements by class name
document.getElementsByClassName('myClass')[0].style.color = 'blue'; // Change color of the first element with class 'myClass'
// Selecting elements by tag name
document.getElementsByTagName('p')[0].style.fontSize = '20px'; // Change font size of the first <p> element

//query selector
// it is a powerful method to select elements in the DOM
document.querySelector('h1'); // Selects the first <h1> element in the document
document.querySelectorAll('.myClass'); // Selects all elements with class 'myClass'
document.querySelector('#myElement'); // Selects the element with ID 'myElement'

// inner HTML, text content, and attributes, innerText
// innerHTML allows you to get or set the HTML content of an element
document.getElementById('myElement').innerHTML = '<strong>Hello, World!</strong>'; // Sets HTML content
// textContent retrieves or sets the text content of an element
document.getElementById('myElement').textContent = 'Hello, World!'; // Sets text content
// getAttribute and setAttribute allow you to manipulate attributes of elements
document.getElementById('myElement').setAttribute('class', 'newClass'); // Sets a new class attribute
document.getElementById('myElement').getAttribute('class'); // Gets the class attribute of the element
// innerText retrieves or sets the text content of an element, similar to textContent but respects CSS styles
document.getElementById('myElement').innerText = 'Hello, World!'; // Sets text content, respecting styles
// Creating and appending elements
// Creating a new element
const newElement = document.createElement('div'); // Creates a new <div> element
newElement.innerHTML = '<p>This is a new paragraph.</p>'; // Sets HTML content of the new element