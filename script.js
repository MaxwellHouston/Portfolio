let page = 'aboutArticle';

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
    aboutArticle.style.zIndex = 1;
    gameArticle.style.zIndex = 1;
    islandArticle.style.zIndex = 1;
    portfolioArticle.style.zIndex = 1;
    moreArticle.style.zIndex = 1;
}

const highlight = (button) => {
    button.style.textDecoration= 'underline #4266a1';
}

/*Nav Bar Articles*/

const goToArticle = (article) => {
    article.style.zIndex = 2;
}

/*About Button*/

aboutButton.addEventListener('click', reset)
aboutButton.addEventListener('click', function () {
    highlight(aboutButton);
})
aboutButton.addEventListener('click', function () {
    goToArticle(aboutArticle);
} )

/*Game Button*/

gameButton.addEventListener('click', reset);
gameButton.addEventListener('click', function () {
    highlight(gameButton);
})
gameButton.addEventListener('click', function () {
    goToArticle(gameArticle);
})

/*Island Button*/

islandButton.addEventListener('click', reset);
islandButton.addEventListener('click', function () {
    highlight(islandButton);
})
islandButton.addEventListener('click', function () {
    goToArticle(islandArticle);
})

/*Portfolio Button*/

portfolioButton.addEventListener('click', reset);
portfolioButton.addEventListener('click', function () {
    highlight(portfolioButton);
})
portfolioButton.addEventListener('click', function () {
    goToArticle(portfolioArticle);
})

/*More Button*/

moreButton.addEventListener('click', reset);
moreButton.addEventListener('click', function () {
    highlight(moreButton);
})
moreButton.addEventListener('click', function() {
    goToArticle(moreArticle);
})

/*Code Viewer*/

