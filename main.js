var game = new Game();

var middleDeckImage = document.querySelector('.middle-deck')
var gameDecks = document.querySelectorAll('.deck')


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
        middleDeckImage.src = `assets/${game.deckOfCards[0].color}-${game.deckOfCards[0].value}.png`
        middleDeckImage.alt = `${game.deckOfCards[0].color} ${game.deckOfCards[0].value}`
    }
        toggleHiddenDecks();
}
function displayWinner(){
    if(!game.winner){
        return
    } else {
        document.querySelector('h1').innerText = `${game.winner} wins!`
        
    }
}
function toggleHiddenDecks() {
    decks = [game.player1.hand, game.deckOfCards, game.player2.hand]
    for(var i =0; i < decks.length; i++){
        if(decks[i].length === 0) {
            addClass(gameDecks[i])
        }else {
            removeClass(gameDecks[i])
        }
    }
}

function removeClass(element){
    element.classList.remove('hidden')
}
function addClass(element) {
    element.classList.add('hidden')
}