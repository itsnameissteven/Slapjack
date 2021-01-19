var game = new Game();

var middleDeckImage = document.querySelector('.middle-deck');
var gameDecks = document.querySelectorAll('.deck');
var mainHeader = document.querySelector('header');
var playerOneWinCount = document.querySelector('.player-one-win-count');
var playerTwoWinCount = document.querySelector('.player-two-win-count');


window.addEventListener('load', function() {
    game.dealCards();
    displayWinTotal();
});

window.addEventListener('keydown', function(e) {
    activatePlayer(e);
    stealCards(e);
    displayWinner();
    displayCard();
    changeDeckColor();
});

function activatePlayer(e){
    if (e.key === 'q') {
        game.addToCentralDeck(game.player1, game.player2);
        clearHeader()
    } else if (e.key === 'p') {
        game.addToCentralDeck(game.player2, game.player1);  
        clearHeader() 
    };
};

function stealCards(e) {
    if (e.key === 'f') {
       displaySlapWinner(game.player1, game.player2);
       game.slapCards(game.player1, game.player2);
    } else if (e.key === 'j') {
        displaySlapWinner(game.player2, game.player1);
        game.slapCards(game.player2, game.player1);
    };
};

function displayCard() {
    if (game.deckOfCards.length > 0) {
        middleDeckImage.src = `assets/${game.deckOfCards[0].color}-${game.deckOfCards[0].value}.png`
        middleDeckImage.alt = `${game.deckOfCards[0].color} ${game.deckOfCards[0].value}`;
    };
        toggleHiddenDecks();
};

function displayWinner(){
    if(game.winner !== null){
        mainHeader.innerText = `${game.winner} wins!`;
        displayWinTotal()
        game.resetGame()
    };
};

function displayWinTotal(){
    game.player1.saveWinsToStorage();
    game.player2.saveWinsToStorage();
    playerOneWinCount.innerText = `${localStorage.getItem('Player 1')} wins`;
    playerTwoWinCount.innerText = `${localStorage.getItem('Player 2')} wins`;
};

function displaySlapWinner(activePlayer, inactivePlayer){
    if(game.deckOfCards.length === 0) {
        return;
    } else if(!game.slapIsLegal){
        mainHeader.innerText = `${game.typeOfSlap}! ${activePlayer.id} gives ${inactivePlayer.id} a card!`;
    } else if(game.slapIsLegal){        
        mainHeader.innerText = `${game.typeOfSlap}! ${activePlayer.id} wins the hand!`;
    };
};

function toggleHiddenDecks() {
    decks = [game.player1.hand, game.deckOfCards, game.player2.hand];
    for(var i =0; i < decks.length; i++){
        if(decks[i].length === 0) {
            addClass(gameDecks[i]);
        }else {
            removeClass(gameDecks[i]);
        };
    };
};

function clearHeader(){
    mainHeader.innerText = ""
};

function removeClass(element){
    element.classList.remove('hidden');
}; 

function addClass(element) {
    element.classList.add('hidden');
};

function changeDeckColor() {
    if (game.playedLastCard === "Player 1") {
        middleDeckImage.classList.remove('player-two-deck');
    } else {
        middleDeckImage.classList.add('player-two-deck');
    };
};