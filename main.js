var game = new Game();

window.addEventListener('keydown', function(event) {
    playTopCard(event)
})

function playTopCard(event) {
    if(event.key === 'q' && game.player1.hand.length > 1) {
        game.deckOfCards.push(game.player1.playCard())
    }
    if(event.key === 'p' && game.player2.hand.length > 1) {
        game.deckOfCards.push(game.player2.playCard())
    }
}