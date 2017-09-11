// Nodes -- like an element
const body = document.body;

// childNodes: NodeList
const bodyChildren = body.childNodes;

// NodeList is array-like
//console.log('Children of body:');
//bodyChildren.forEach(child => console.log(child));

// childNode
const child = bodyChildren[1];
//console.log('Child:', child);

// parentNode
const parent = child.parentNode;
//console.log('Parent node:', parent);

// siblings
//console.log('nextSibling', child.nextSibling);
//console.log('previousSibling', child.previousSibling);

// Targeting specific elements
const link = document.getElementsByTagName('a'); // HTMLCollection

//link.forEach(el => console.log(el.href)); // doesn't work!
//console.log(link);

// Get by id -- HTMLElement
const book = document.getElementById('book');
//console.log(book);

// Get by class -- HTMLCollection!!
const title = document.getElementsByClassName('title');
//console.log(title);

// Get all by selector -- NodeList
const titles = document.querySelectorAll('.title');
//console.log(titles);

// Get one by selector -- Element
const oneTitle = document.querySelector('h1.title');
//console.log(oneTitle);

////////////////////////
// Manipulating nodes //
////////////////////////

// Create a node
const divTag = document.createElement('div');

// Add some text to it
divTag.innerText = `Here's a new div that we just created!`;

// Put it in the body
body.appendChild(divTag);

// Create a text node
const textNode = document.createTextNode('Here is another div!');

// Clear the innerText
divTag.innerText = '';

// Add text back via textNode
divTag.appendChild(textNode);
