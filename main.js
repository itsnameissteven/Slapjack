var game = new Game();
window.addEventListener('load', function() {
    game.dealCards();
})
window.addEventListener('keydown', function(event) {
    playTopCard(event)
})

function playTopCard(event) {
    if(event.key === 'q' && game.player1.hand.length > 0 && game.player1.hasNextTurn) {
        game.deckOfCards.push(game.player1.playCard())
        game.trackPlayerTurn()
    }
    if(event.key === 'p' && game.player2.hand.length > 0 && game.player2.hasNextTurn) {
        game.deckOfCards.push(game.player2.playCard())
        game.trackPlayerTurn()
    }
}