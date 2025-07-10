# Feature List

## Feature List by Use Case

- **'Play a Match' Use Case**
  - Start a match
  - Display the current board
  - Place a stone
  - Check the win/loss result

- **'Check My Past Match Results' Use Case**
  - Display my match results

## About the 'Place a Stone' Feature

- The internal processing likely includes the following:
  - Check if a stone can be placed at the selected position
  - Place the stone
  - Flip the opponent's stones
  - Determine whose turn is next
    - ※ Note: If a player cannot make a move, their turn is automatically skipped.
  - (If the winner is decided) End the match

## About Players

- No player registration feature will be implemented.
  - This application is intended to be run on a personal PC for a single user to play.