
1. Get current startStack and endStack values (either through user input or test values) inside towersOfHanoi() function
    - Pass those values to isLegal() function
    - Pass those values to movePiece function

2. Check that a piece is allowed to move
    - Use startStack and endStack values to determine if it would be a legal move
    - Nice to have (not required): Return error message (string) telling user if input is invalid (should be 'a', 'b', or 'c')
      - Rules of the Game: 
        - startStack and endStack should be different letters
        - access the numbers inside the arrays that correspond to the startStack and endStack values ('a', 'b', or 'c'), theses are the       keys of the stacks object
        - Bigger number cannot be placed on top of smaller number
        - Any number can be placed onto an empty stack (array inside the stacks object)

3. Move a piece from one stack to another using moviePiece() function
    - Update stacks object inside the movePiece() function using the startStack and endStack values
    - Take the value from end of startStack[] array and add it to end of endStack[] array.
    - maybe use .pop? .shift? or different array methods

4. Check if game is won with checkForWin() function
    - When all blocks are stacked into column 2 or 1 return true otherwise false
    - Nice to have (but not required): console log a winning message