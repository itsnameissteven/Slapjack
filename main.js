var game = new Game();

var middleDeckImage = document.querySelector('.middle-deck')


window.addEventListener('load', function() {
    game.dealCards();
})
window.addEventListener('keydown', function(event) {
    playTopCard(event)
})

function playTopCard(event) {
    if(event.key === 'q' && game.player1.hand.length > 0 && game.player1.hasNextTurn) {
        game.deckOfCards.unshift(game.player1.playCard())
        game.trackPlayerTurn()
        displayCard()
    }
    if(event.key === 'p' && game.player2.hand.length > 0 && game.player2.hasNextTurn) {
        game.deckOfCards.unshift(game.player2.playCard())
        game.trackPlayerTurn()
        displayCard()
    }
}

function displayCard() {
    middleDeckImage.src = `assets/${game.deckOfCards[0].color}-${game.deckOfCards[0].value}.png`
}