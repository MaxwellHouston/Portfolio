/*Buttons*/

const aboutButton = document.getElementById('about-button');
const gameButton = document.getElementById('game-button');
const islandButton = document.getElementById('island-button');
const portfolioButton = document.getElementById('portfolio-button');
const moreButton = document.getElementById('more-button');
const imgButton = document.getElementById('img-button');
const htmlButton = document.getElementById('html-button');
const cssButton = document.getElementById('css-button');
const scriptButton = document.getElementById('script-button');

/*Articles*/

const aboutArticle = document.getElementById('about');
const gameArticle = document.getElementById('game');
const islandArticle = document.getElementById('island');
const portfolioArticle = document.getElementById('portfolio');
const moreArticle = document.getElementById('more');

/*Nav Bar Highlight*/

const reset = () => {
    aboutButton.style.textDecoration = 'none';
    gameButton.style.textDecoration = 'none';
    islandButton.style.textDecoration = 'none';
    portfolioButton.style.textDecoration = 'none';
    moreButton.style.textDecoration = 'none';
}

const highlight = (button) => {
    button.style.textDecoration= 'underline #4266a1';
}

/*About Button*/
aboutButton.addEventListener('click', reset)
aboutButton.addEventListener('click', function () {
    highlight(aboutButton);
})
/*Game Button*/
gameButton.addEventListener('click', reset);
gameButton.addEventListener('click', function () {
    highlight(gameButton);
})
/*Island Button*/
islandButton.addEventListener('click', reset);
islandButton.addEventListener('click', function () {
    highlight(islandButton);
})
/*Portfolio Button*/
portfolioButton.addEventListener('click', reset);
portfolioButton.addEventListener('click', function () {
    highlight(portfolioButton);
})
/*More Button*/
moreButton.addEventListener('click', reset);
moreButton.addEventListener('click', function () {
    highlight(moreButton);
})