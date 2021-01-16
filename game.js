class Game {
    constructor() {
        this.player1 = new Player('Player 1', true);
        this.player2 = new Player('Player 2');
        this.deckOfCards = new Card().buildCompleteDeck()
        this.slapIsLegal = false
    };

    addToCentralDeck(player) {
        if(player.hand.length > 0 && player.hasNextTurn) {
            this.deckOfCards.unshift(player.playCard())
            this.trackPlayerTurn(player)
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
        if((this.deckOfCards.length > 0 && this.deckOfCards[0].value === "jack") || (this.deckOfCards.length > 1 && this.deckOfCards[0].value === this.deckOfCards[1].value) || (this.deckOfCards.length > 2 && this.deckOfCards[0].value === this.deckOfCards[2].value)) {
          this.slapIsLegal = true
        } else {
            this.slapIsLegal = false 
        }
    };

    dealCards() {
        this.shuffle(this.deckOfCards)
        this.player1.hand = this.deckOfCards.splice(0, 26)
        this.player2.hand = this.deckOfCards.splice(0, 26)
    };

    trackPlayerTurn(player) {
        if(!player.hasNextTurn) {
            return
        }
        this.player1.hasNextTurn = !this.player1.hasNextTurn
        this.player2.hasNextTurn = !this.player2.hasNextTurn
        this.fixPlayerTurn()
    };
    fixPlayerTurn() {
        if (this.player1.hand.length === 0) {
            this.player1.hasNextTurn = false
            this.player2.hasNextTurn = true
        }
        if (this.player2.hand.length === 0) {
            this.player2.hasNextTurn = false
            this.player1.hasNextTurn = true
        }
    }

    slapCards(player) {
        this.trackCards()
        if (this.slapIsLegal) {
            player.hand = player.hand.concat(this.deckOfCards.splice(0, this.deckOfCards.length))
            this.shuffle(player.hand)
            this.trackPlayerTurn(player)

        } else {
            this.penalize(player)
        }
    };

    penalize(player) {
        if(player.hand.length === 0) {
            return
        }
        if(player === this.player1){
            this.player2.hand.push(this.player1.hand.shift())
        } else{
            this.player1.hand.push(this.player2.hand.shift())
        }
    };

    updateWinCount(player) {

    }
    resetDeck() {
        /// reshuffle deck and deal  
    }

}