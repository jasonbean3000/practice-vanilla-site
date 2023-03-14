
let homeButton = document.getElementById('home-button');
let homePage = document.getElementById('home-page');

let bikeStuffButton = document.getElementById('bike-stuff-button');
let bikeStuffPage = document.getElementById('bike-stuff-page');

let aboutButton = document.getElementById('about-button');
let aboutPage = document.getElementById('about-page');

const showHome = event => {
    homePage.style.display = 'block'
    bikeStuffPage.style.display = 'none'
    aboutPage.style.display = 'none';
    homeButton.style.textDecoration = 'underline';
    aboutButton.style.textDecoration = 'none';
    bikeStuffButton.style.textDecoration = 'none';
}
 
const showBikeStuff = event => {
    homePage.style.display = 'none';
    bikeStuffPage.style.display = 'block';
    aboutPage.style.display = 'none';
    homeButton.style.textDecoration = 'none';
    bikeStuffButton.style.textDecoration = 'underline';
    aboutButton.style.textDecoration = 'none';
}

const showAbout = event => {
    homePage.style.display = 'none'
    bikeStuffPage.style.display = 'none'
    aboutPage.style.display = 'block';
    homeButton.style.textDecoration = 'none';
    bikeStuffButton.style.textDecoration = 'none';
    aboutButton.style.textDecoration = 'underline';
}

homeButton.addEventListener('click', showHome);
bikeStuffButton.addEventListener('click', showBikeStuff);
aboutButton.addEventListener('click', showAbout);







