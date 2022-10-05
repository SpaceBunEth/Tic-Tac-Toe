# Tic-Tac-Toe

1. The game should let the players know who's turn it is.
2. Game tiles should only be clickable once, and if the game is over they should not be clickable at all.
3. The game should display who wins the game if someone wins, otherwise, say that the game resulted in a tie.
4. There should be a Restart Game button that does not refresh the page (set state).
5. Use the symbols X and O.
6. On each player’s turn, that player places one of their symbols on an unoccupied space by clicking.
7. The game continues until one player places three symbols in a straight line (horizontal, vertical, or diagonal) and wins or there are no remaining available spaces and it is a draw.
8. Only have a single `<div id="app"></div> `in your index.HTML (try to code golf the HTML file)
---

---

## PseudoCode

### State & Var for tic-tac-toe

Two players are needed
```
Player X
Player O
```
Who goes first and which turn is it.
By default X will go first.

A function can be added later to randomly determain who goes first.
A function can be added later if you wish to play with a real person or AI

Ex:
```
playerTurn: "X" or "O"
```
How do we keep track of the tic-tac-toe board?
A tic-tac-toe board as 9 sections `[0,1,2,3,4,5,6,7,8,]` that can be 3 different states.
`NONE '', X, or O`

Ex: 
```
boardState: ['',X,O,'','','','','',X]
```
winCondition, These are the conditions that will be need either by X or O inorder for the game to be over and for there to be a winner.

3 of X or O in a row will signal a winner.
If neither a TIE function should inform the USER
Ex:

```
winCondition: 
    3 left to right
    3 top to bottom
    3 dia from left to right or right to left

```

---

## Functions

List of functions that need to be defined inorder to make the program work based on user input and state. User input will be recorded and functions will react to state. Using User as trigger after a submit/ CTA`(call to action)`

- checkCondition()
    > After every change of state, check wether player X or O has won.
     if not check if the tic-tac-toe board is full which would equal a tie ending the game.
- changePlayer()
    > After every turn allow the other player to move. Change state of who's turn it is `playerTurn`
- gameResult()
    > Should display the result after a game has been determained to be over based on `checkCondition` reading the state.
- drawBoard()
    > init() OR refreshing of the board. Reload the current state of the tic-tac-toe board.
- setState()
    > set the default or new state of the tic-tac-toe board
- handleClick()
    > ON init() RUN `click event` for every box on tic-tac-toe board. Manage the `click events` for all boxes that have the state of `'None'/ ''`IF a state does not equal `None` then remove `click event`. 
- updateTitle()
    > Depending on the state of `playerTurn` set box that is clicked to state of `playerTurn` and update state to reflect the new state of the board.
- finishGame()
    > When `gameResult` is reached set Dom to give user an option to reset the board. PLAY AGAIN? Create `click event` for `resetGame()`
- resetGame()
    > When button `clicked` reset DOM and state to default RUN `drawBoard()`

---

## init()

resetGame()

---
---

# Sandbox Pseudocode
We will sandbox the first part of our tic-tac-toe program. The goal with the sandbox to iron out the logic of playing tic-tac-toe and create a functional winCondition/ Condition in our sandbox.

1. How to write a tic-tac-toe console.log javascript
2. How to manange state
3. How to find and determain winCondition of the board
4. How to Reset State

--- 

## State
#### Mange State Of Board:

We can manage state with and object, then added another Object within to mangage our default values for state. 

Check currentBoard and playerTurn state. What are the winning combos in the currentBoard array? Array [0,1,2,3,4,5,6,7,8].
Winning Combos Indexes that are the same.
['X','X','X'] 
### Indexes
---
#### ROW
[0,1,2] 

[3,4,5]

[6,7,8]

---
#### COL
[0,3,6]

[1,4,7]

[2,5,8]

---
#### DIAGONAL
[0,4,8]

[2,4,6]

---
```
const tic = {

    default = {
        playerTurn: 'X';
        currentBoard: ['','','','','','','','',''];
        winCondition: [
                    [0,1,2], 
                    [3,4,5],
                    [6,7,8],
                    [0,3,6],
                    [1,4,7],
                    [2,5,8],
                    [0,4,8],
                    [2,4,6],
                    ];

    }
    current = {
        playerTurn: 'X' or 'O';
        currentBoard: ['X','X','O','','','','','',''];
        winCondition: [
                [0,1,2], 
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [0,4,8],
                [2,4,6],
                ]    
    }

}


```


