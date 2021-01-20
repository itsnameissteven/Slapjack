# Slapjack

## Creator

<img src="assets/readme_images/profile.png" style="width:100px; border-radius: 50%" alt="Steven Mancine" />

[Steven Mancine](https://github.com/itsnameissteven)

## Technologies

* JavaScript
* HTML
* CSS

## Using the app:
![Welcome page](assets/readme_images/welcome.png)
* Upon load users are greeted with a welcome message explaining the rules of the game. There are different ways to win the cards in the center pile.
* Each player has there own key controls for dealing cards to the center pile or slapping.

![Color Toggle](assets/readme_images/color_toggle)

* As players deal into the middle deck, the border color of the pile changes to indicate which player added the card to the deck.
* Images and alt texts are updated dynamically via javaScript functions.

![Slaps](assets/readme_images/slaps.gif)

* When a player wins with a slap a message appear at the top of the page and those cards are added to the winners hand and shuffled.
* If an illegal slap occurs the guilty player must forfeit one card to the other player.

![Win Update](assets/readme_images/win-update.png)

* Once a player wins the game a message is displayed and the win count is updated below the decks of cards

### localStorage

* Local storage is used in two parts of this app.
1. When the user clicks the continue button on the welcome page, to prevent the same message from showing again upon reload.
2. For storage of player wins to persist data between reloads.
