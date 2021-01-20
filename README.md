# Slapjack

## Creator

<a href="https://github.com/itsnameissteven"><img src="assets/readme_images/profile.png" width="100px" height ="auto" border="10px" alt="Steven Mancine" /></a>

Steven Mancine

## Languages 

<img src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/><br>
<img src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/><br>
<img src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/>

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

## Future Considerations

* Adding layers to card decks to indicate how many cards are in each pile. Players currently have no way to tell how many cards they are currently holding.
* Adding input boxes on the welcome screen to prompt each player to enter a name. Player names can be entered into the DOM dynamically for a better user experience.
* Alternate Gameplay rules. Egyptian rat screw is a very similar game that follows almost the same rules. At the welcome page users could be prompted to choose between which style they would like to play.
