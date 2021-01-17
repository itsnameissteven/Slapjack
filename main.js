var game = new Game();

var middleDeckImage = document.querySelector('.middle-deck')


window.addEventListener('load', function() {
    game.dealCards();
})
window.addEventListener('keydown', function(e) {
    activatePlayer(e)
    stealCards(e)
    displayWinner(e)
    displayCard()
})

function activatePlayer(e){
    if (e.key === 'q') {
        game.addToCentralDeck(game.player1, game.player2)
    }
    if (e.key === 'p') {
        game.addToCentralDeck(game.player2, game.player1)
    }
}
function stealCards(e) {
    if (e.key === 'f') {
       game.slapCards(game.player1, game.player2)
    }
    if (e.key === 'j') {
        game.slapCards(game.player2, game.player1)
    }
}

function displayCard() {
    if (game.deckOfCards.length > 0) {
        removeClass(middleDeckImage)
        middleDeckImage.src = `assets/${game.deckOfCards[0].color}-${game.deckOfCards[0].value}.png`
    } else {
        addClass(middleDeckImage)
    }
}
function displayWinner(){
    if(!game.winner){
        return
    } else {
        document.querySelector('h1').innerText = `${game.winner} wins!`
        
    }
}
function removeClass(element){
    element.classList.remove('hidden')
}
function addClass(element) {
    element.classList.add('hidden')
}