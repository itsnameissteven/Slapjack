class Game {
    constructor() {
        this.player1 = new Player('Player 1', true);
        this.player2 = new Player('Player 2');
        this.deckOfCards = new Card().buildCompleteDeck()
        this.slapIsLegal = false
        this.typeOfSlap; 
        this.nearEndOfGame = false
    };

    addToCentralDeck(activePlayer, inactivePlayer) {
        if(activePlayer.hand.length > 0 && activePlayer.hasNextTurn) {
            this.deckOfCards.unshift(activePlayer.playCard())
            this.switchPlayerTurn(activePlayer, inactivePlayer)
            this.trackCards()
        }
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

    switchPlayerTurn(activePlayer, inactivePlayer) {
        if(!activePlayer.hasNextTurn) {
            return
        }
        activePlayer.hasNextTurn = !activePlayer.hasNextTurn
        inactivePlayer.hasNextTurn = !inactivePlayer.hasNextTurn
        this.fixPlayerTurn(activePlayer, inactivePlayer)
    };

    fixPlayerTurn(activePlayer, inactivePlayer) {
        if (activePlayer.hand.length === 0) {
            activePlayer.hasNextTurn = false
            inactivePlayer.hasNextTurn = true
        } 
    }
    
    slapCards(activePlayer, inactivePlayer) {
        // if(this.nearEndOfGame){
        //     this.loseGame(player)
        // }
        if (this.slapIsLegal) {
            activePlayer.hand = activePlayer.hand.concat(this.deckOfCards.splice(0, this.deckOfCards.length))
            this.shuffle(activePlayer.hand)
            this.switchPlayerTurn(activePlayer, inactivePlayer)
        } else {
            this.penalize(activePlayer, inactivePlayer)
        }
    };
    penalize(activePlayer, inactivePlayer) {
        if(activePlayer.hand.length === 0) {
            inactivePlayer.wonGame = true
            return
        }
            activePlayer.hand.push(inactivePlayer.hand.shift())
    };

    updateWinCount(player) {

    }
    resetDeck() {
        /// reshuffle deck and deal  
    }

}