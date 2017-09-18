// Setup parent elements
const header = document.createElement('header');
const banner = document.createElement('div');
banner.classList.add('banner');
const main = document.createElement('main');
const footer = document.createElement('footer');

const parents = [header, banner, main, footer];
parents.forEach(parent => document.body.appendChild(parent));

/////////////////////
// Header elements //
/////////////////////
const headerContainer = document.createElement('div');
headerContainer.classList.add('container');

const headerName = document.createElement('h1');
headerName.classList.add('name');
headerContainer.appendChild(headerName);

const headerNameLink = document.createElement('a');
headerNameLink.href = '#';
headerName.appendChild(headerNameLink);

headerNameLink.appendChild(document.createTextNode('Best City Guide'));

const headerNav = document.createElement('nav');
headerContainer.appendChild(headerNav);

const iceCream = document.createElement('a');
const donuts = document.createElement('a');
const tea = document.createElement('a');
const coffee = document.createElement('a');
coffee.href = '#';
const navLinks = [iceCream, donuts, tea, coffee];
navLinks.forEach(link => {
  link.href = '#';
  headerNav.appendChild(link);
});

const linkText = ['ice cream', 'donuts', 'tea', 'coffee'];
linkText.forEach((text, i) => (navLinks[i].innerText = text));
header.appendChild(headerContainer);

/////////////////////
// Banner elements //
/////////////////////
const bannerImg = document.createElement('img');
bannerImg.classList.add('logo');
bannerImg.src = 'img/city-logo.svg';
bannerImg.alt = 'city logo';
banner.appendChild(bannerImg);

const headline = document.createElement('h1');
headline.classList.add('headline');
headline.innerText = 'The Best City';
banner.appendChild(headline);

const tagline = document.createElement('span');
tagline.classList.add('tagline');
tagline.innerText = 'The best drinks and eats in the best city ever.';
banner.appendChild(tagline);

///////////////////
// Main elements //
///////////////////

// Welcome column
const welcome = document.createElement('div');
welcome.classList.add('welcome', 'column');

const welcomeHeader = document.createElement('h2');
welcomeHeader.innerText = 'Welcome';
welcome.appendChild(welcomeHeader);

const welcomePara1 = document.createElement('p');
welcomePara1.innerText = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus autem modi aperiam delectus sint exercitationem, pariatur ea, officia maiores distinctio eos ab reiciendis perferendis iure soluta dolor! Maxime, rem aut.`;
welcome.appendChild(welcomePara1);

const welcomePara2 = document.createElement('p');
welcomePara2.innerText = `Dolorem aperiam natus aut facere nulla voluptate unde maiores. Nulla rerum architecto, illum nesciunt, voluptas consectetur at fugiat sint vel dignissimos voluptates corrupti fugit suscipit numquam, sunt amet ipsa magni!`;
welcome.appendChild(welcomePara2);

const welcomePara3 = document.createElement('p');
welcomePara3.innerText = `Porro odit nemo ratione distinctio illo debitis sunt laborum tempore consectetur quia aspernatur iusto a eum, provident eius repudiandae minima! Quam magnam fugiat repellendus explicabo distinctio labore quasi qui. Qui!`;
welcome.appendChild(welcomePara3);

main.appendChild(welcome);

// Food column
const food = document.createElement('div');
food.classList.add('welcome', 'column');

// Food Header
const foodHeader = document.createElement('h2');
foodHeader.innerText = 'Great food';
food.appendChild(foodHeader);

// Figure
const figure = document.createElement('figure');

const locImage = document.createElement('img');
locImage.className = 'icon-location';
locImage.src = 'img/location.svg';
locImage.alt = 'Location pin';
figure.appendChild(locImage);

const featured = document.createElement('img');
featured.className = 'feat-img';
featured.src = 'img/treats.svg';
featured.alt = 'Drinks and eats';
figure.appendChild(featured);

const caption = document.createElement('figcaption');
const captionHeading = document.createElement('h4');
captionHeading.innerText = 'Featured Drinks & Eats';
caption.appendChild(captionHeading);
caption.appendChild(
  document.createTextNode(
    `Croissant macaroon pie brownie cookie marshmallow liquorice gingerbread caramels toffee.`
  )
);
figure.appendChild(caption);
food.appendChild(figure);

// Food Paragraph
const foodPara = document.createElement('p');
foodPara.innerText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus veritatis quas atque est dicta quisquam consequuntur,
beatae sequi ut vero consequatur omnis impedit, molestias et perferendis. Beatae repellendus nemo tenetur.`;
food.appendChild(foodPara);

main.appendChild(food);

// Directions column
const directions = document.createElement('div');
directions.classList.add('welcome', 'column');

const directionsHeader = document.createElement('h2');
directionsHeader.innerText = 'How to get here';
directions.appendChild(directionsHeader);

const dirPara1 = document.createElement('p');
dirPara1.innerHTML = `<strong>Plane:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quidem ab aperiam sunt, perferendis
ratione placeat laborum numquam? Dignissimos assumenda fugiat deserunt neque numquam minus at beatae commodi qui quam.`;
directions.appendChild(dirPara1);

const dirPara2 = document.createElement('p');
dirPara2.innerHTML = `<strong>Train:</strong> Ad illum esse harum consectetur, dignissimos maxime rerum eaque iste! Autem sapiente cum assumenda
expedita! Dolorem illo ut nesciunt error sed quidem quos voluptatum molestiae, consequuntur explicabo? Autem, quibusdam molestias?`;
directions.appendChild(dirPara2);

const dirPara3 = document.createElement('p');
dirPara3.innerHTML = `<strong>Car:</strong> Rerum incidunt laudantium laboriosam repudiandae neque et omnis deleniti ab molestias magnam, tenetur
assumenda recusandae unde impedit, numquam asperiores ullam soluta at veritatis facere? Alias cumque quod fugiat excepturi ut?`;
directions.appendChild(dirPara3);

main.appendChild(directions);

/////////////////////
// Footer elements //
/////////////////////
const footerSpan = document.createElement('span');
footerSpan.innerHTML = '&copy;2017 Residents of The Best City Ever';
footer.appendChild(footerSpan);
