class Game {
    constructor() {
        this.player1 = new Player('Player 1')
        this.player2 = new Player('Player 2')
        this.deckOfCards = [ 2, 3, 10 , 5, 6, 7, 8, 9, 4] 
    }
    shuffle(deck) {
        var randomNumber;
        //create a random number variable. This will hold the random number we create
        var temp;
        // temp variale to hold the spot of the element
        for (var i = deck.length - 1; i > 0; i--) {
            //start with the last element of the array. since the first element is index 0 we need to subract 
            randomNumber = Math.floor(Math.random() * (i + 1));
            //creates a random number adds one to i since we subtracted from i in the for loop.  i cannot = 0 for the ranom function number to work
            temp = deck[i];
            //assign the last index to this temp holder
            deck[i] = deck[randomNumber];
            //reassign the last index to the random index
            deck[randomNumber] = temp;
            // reassignt the now empty index to what used to be the last
        }
        return deck;
    };
    
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