// Nodes -- like an element
const body = document.body;

// childNodes: NodeList, LIVE!
const bodyChildren = body.childNodes;
// console.log(bodyChildren);
// bodyChildren[1].remove();
// console.log(bodyChildren);

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

// Targeting specific elements -- HTMCollection, live!
const links = document.getElementsByTagName('a'); // HTMLCollection
// console.log(links);
// links[0].remove();
// console.log(links);

// Get by id -- HTMLElement, static
const book = document.getElementById('book');
// console.log(book);
// book.remove();
// console.log(book);

// Get by class -- HTMLCollection, live!
const titlesByClass = document.getElementsByClassName('title');
// console.log(titlesByClass);
// titlesByClass[0].remove();
// console.log(titlesByClass);

// Get all by selector -- NodeList, static
const titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].remove();
// console.log(titles);

// Get one by selector -- Element, static
const oneTitle = document.querySelector('h1.title');
// console.log(oneTitle);
// oneTitle.remove();
// console.log(oneTitle);

////////////////
// side notes //
////////////////

console.log(links instanceof HTMLCollection); // true

// Node > Element > HTMLElement > HTML<type>Element (e.g. HTMLDivElement)
// NodeList !== HTMLCollection although they are similar
// Live vs. Static

////////////////////////
// Manipulating nodes //
////////////////////////

/////////////////
// Create node //
/////////////////

// Create a node/element, returns element of that particular type
const divTag = document.createElement('div'); // HTMLDivElement

// Create a textNode
const textNode = document.createTextNode('Here is another div!');
console.log(textNode instanceof Text); // true

//////////////////////
// Add node to body //
//////////////////////

// Put it in the body, kind of like .push() for Arrays
body.appendChild(divTag);

// Add text to divTag Node
divTag.appendChild(textNode);

//////////////////
// Remove nodes //
//////////////////

// Node.removeChild() must be called on parent of element to be removed
//const removedDiv = body.removeChild(divTag); // Why set this to a variable?

// Node.remove() must be called on the node itself
//divTag.remove();

/////////////////////////////////////////////////
//                 //////////////////////////////
//   Edit nodes    //////////////////////////////
//                 //////////////////////////////
/////////////////////////////////////////////////

// What kind of Node is it?

// Attributes
const inputEl = document.createElement('input');
inputEl.setAttribute('type', 'text');
body.appendChild(inputEl);

// Classes
inputEl.classList.add('fancy');

// What else?
inputEl.autocomplete = 'on';
