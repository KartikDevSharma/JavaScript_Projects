# Pig Game

A simple two-player dice game implemented in JavaScript.

## Description

Pig Game is a turn-based dice game where two players compete to reach 100 points first. Players take turns rolling a die and accumulating points, but must decide whether to "hold" their current score or risk losing it all by rolling a 1.

## Game Rules

1. The game has 2 players, playing in rounds
2. In each turn, a player rolls a die as many times as they wish. Each result gets added to their ROUND score
3. BUT, if the player rolls a 1, all their ROUND score gets lost. After that, it's the next player's turn
4. The player can choose to 'Hold', which means that their ROUND score gets added to their GLOBAL score. After that, it's the next player's turn
5. The first player to reach 100 points on GLOBAL score wins the game

## Features

- Interactive UI with CSS styling
- Randomized dice rolls
- Score tracking for both players
- Option to start a new game at any time

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)

## Project Structure

- `index.html`: The main HTML file containing the game structure
- `style.css`: CSS file for styling the game
- `script.js`: JavaScript file containing the game logic

## How to Play

1. Open `index.html` in a web browser
2. Click "Roll dice" to start your turn
3. Keep rolling to accumulate points, or click "Hold" to add your current score to your total and end your turn
4. If you roll a 1, you lose your current score and your turn ends
5. The first player to reach or exceed 100 points wins!

## Future Improvements

- Add option for players to input their names
- Implement different difficulty levels
- Add sound effects for dice rolls and wins
- Create a mobile-responsive design

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
