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
            this.trackPlayerTurn()
        }
    }
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
        if((this.deckOfCards[0].value === "jack") || (this.deckOfCards[0].value === this.deckOfCards[1].value) || (this.deckOfCards[0].value === this.deckOfCards[2].value)) {
          this.slapIsLegal = true
        } else {
            this.slapIsLegal = false 
        }
    }

    dealCards() {
        this.shuffle(this.deckOfCards)
        this.player1.hand = this.deckOfCards.splice(0, 26)
        this.player2.hand = this.deckOfCards.splice(0, 26)
        }
    trackPlayerTurn() {
        this.player1.hasNextTurn = !this.player1.hasNextTurn
        this.player2.hasNextTurn = !this.player2.hasNextTurn
    }
    slapCards(player) {
        this.trackCards()
        if (this.slapIsLegal) {
            player.hand = player.hand.concat(this.deckOfCards.splice(0, this.deckOfCards.length))
            this.shuffle(player.hand)
        } else {
            this.penalize(player)
        }
    }
    penalize(player) {
        if(player === this.player1){
            this.player2.hand.push(this.player1.hand.shift())
        } else{
            this.player1.hand.push(this.player2.hand.shift())
        }
    }
    updateWinCount() {
        //add to win count
    }
    resetDeck() {
        /// reshuffle deck and deal  
    }

}