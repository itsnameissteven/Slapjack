var game = new Game();

var middleDeckImage = document.querySelector('.middle-deck')


window.addEventListener('load', function() {
    game.dealCards();
})
window.addEventListener('keydown', function(e) {
    playCard(e)
    displayCard()
})

function playCard(e){
    if (e.key === 'q') {
        game.addToCentralDeck(game.player1)
    }
    if (e.key === 'p') {
        game.addToCentralDeck(game.player2)
    }
}

function displayCard() {
    if (game.deckOfCards.length > 0) {
        middleDeckImage.src = `assets/${game.deckOfCards[0].color}-${game.deckOfCards[0].value}.png`
    }
}