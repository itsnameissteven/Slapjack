class Player {
    constructor(player, playsFirst) {
        this.id = player
        this.wins = 0
        this.hand = []
        this.hasNextTurn = playsFirst || false
        this.wonGame;
    }
    playCard() {
        return this.hand.shift()
    }
    saveWinsToStorage() {
        localStorage.setItem('playerWins', this.wins)
    }
}