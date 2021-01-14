class Game {
    constructor(player1, player2, deckOfCards) {
        this.player1 = new Player()
        this.player2 = new Player()
        this.deckOfCards = []
    }
    shuffle() {
        //should take deckDeckofCards and randomize them
        //should take a players card and suffle them.
    }
    trackCardsInPot() {
        //remove the card from players hand

    }
    dealCards() {
        ///split deck in half to distribute to each player || function to distribute only odd numbered elements to one player and even to the other number. (like a typical deal)

    }
    trackPlayerTurn() {
        //will only allow one player to discard at a time.
    }
    slapCards() {
        /// will allow for each player to slap cards 
        //reads if it was illegal
        //evaulates they type of win.
    }
    updateWinCount() {
        //add to win count
    }
    resetDeck() {
        /// reshuffle deck and deal  
    }

}