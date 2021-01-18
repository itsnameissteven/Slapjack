class Game {
    constructor() {
        this.player1 = new Player('Player 1', true);
        this.player2 = new Player('Player 2');
        this.deckOfCards = new Card().buildCompleteDeck()
        this.slapIsLegal = false
        this.typeOfSlap; 
        this.nearEndOfGame = false
        this.playedLastCard;
        this.winner;
    };

    addToCentralDeck(activePlayer, inactivePlayer) {
        if(activePlayer.hand.length > 0 && activePlayer.hasNextTurn) {
            this.deckOfCards.unshift(activePlayer.playCard())
            this.switchPlayerTurn(activePlayer, inactivePlayer)
            this.trackCards()
            this.playedLastCard = activePlayer.id
        }
        this.trackEndGame()
        this.returnCards(activePlayer, inactivePlayer)
    };
    
    shuffle(deck) {
        for (var i = deck.length - 1; i > 0; i--) { 
            var randomNumber = Math.floor(Math.random() * (i + 1));
            var temp = deck[i];
            deck[i] = deck[randomNumber];
            deck[randomNumber] = temp;
        }
        return deck;
    };

    trackCards() {
            if (this.deckOfCards[0].value === "jack"){
                this.slapIsLegal = true
                this.typeOfSlap = "SLAPJACK"
            } else if (this.deckOfCards.length > 1 && this.deckOfCards[0].value === this.deckOfCards[1].value) {
                this.slapIsLegal = true
                this.typeOfSlap = "DOUBLE"
            } else if (this.deckOfCards.length > 2 && this.deckOfCards[0].value === this.deckOfCards[2].value) {
                this.slapIsLegal = true 
                this.typeOfSlap = "SANDWICH"
            } else {
                this.slapIsLegal = false 
                this.typeOfSlap = "ILLEGAL"
            }
    };

    dealCards() {
        this.shuffle(this.deckOfCards)
        this.player1.hand = this.deckOfCards.splice(0, 26)
        this.player2.hand = this.deckOfCards.splice(0, 26)
    };
    fixPlayerturn(activePlayer, inactivePlayer) {
        if(activePlayer.hand.length === 0) {
            activePlayer.hasNextTurn = false
            inactivePlayer.hasNextTurn = true
        }
    }
    switchPlayerTurn(activePlayer, inactivePlayer) {
        if(!activePlayer.hasNextTurn || inactivePlayer.hand.length === 0) {
            return
        }
        activePlayer.hasNextTurn = !activePlayer.hasNextTurn
        inactivePlayer.hasNextTurn = !inactivePlayer.hasNextTurn
    };
    
    slapCards(activePlayer, inactivePlayer) {
        if(this.deckOfCards.length === 0){
            return
        } if(this.nearEndOfGame){
            this.attemptWin(activePlayer, inactivePlayer);
            return;
        } else if (this.slapIsLegal) {
            this.addCardsToWinnersHand(activePlayer);
            this.shuffle(activePlayer.hand);
            this.switchPlayerTurn(activePlayer, inactivePlayer);
        } else {
            this.penalize(activePlayer, inactivePlayer);
        };
        this.fixPlayerturn(activePlayer, inactivePlayer)
    };

    addCardsToWinnersHand(activePlayer){
        activePlayer.hand = activePlayer.hand.concat(this.deckOfCards.splice(0, this.deckOfCards.length));
    }
    attemptWin(activePlayer, inactivePlayer){
        if(this.typeOfSlap !== "SLAPJACK") {
            this.penalize(activePlayer, inactivePlayer)
        } if(this.typeOfSlap === 'SLAPJACK'){
            this.addCardsToWinnersHand(activePlayer)
            this.updateWinCount(activePlayer);
        }
    }
    penalize(activePlayer, inactivePlayer) {
        if(activePlayer.hand.length === 0) {
            this.winner = inactivePlayer.id
            return
        }
            inactivePlayer.hand.push(activePlayer.hand.shift())
    };
    trackEndGame(){
        if(this.player1.hand.length === 0 || this.player2.hand.length === 0){
            this.nearEndOfGame = true
        } else {
            this.nearEndOfGame = false
        }
    };
    returnCards(activePlayer, inactivePlayer) {
        if(activePlayer.hand.length === 0 && inactivePlayer.hand.length === 0) {
            this.addCardsToWinnersHand(activePlayer);
        }
    }
    updateWinCount(activePlayer) {
        if(activePlayer.hand.length === 52){
            this.winner = activePlayer.id
        }
    }
    resetDeck() {
        /// reshuffle deck and deal  
    }

}