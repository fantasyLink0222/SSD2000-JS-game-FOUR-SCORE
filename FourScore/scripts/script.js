document.addEventListener('DOMContentLoaded', () => {
  const board = document.getElementById('gameBoard');
  const rows = 6; // Number of rows
  const cols = 7; // Number of columns
  let currentPlayer = 1;

  // Function to create the board
  const createBoard = () => {
      for (let i = 0; i < rows * cols; i++) {
          let cell = document.createElement('div');
          cell.classList.add('cell');
          cell.addEventListener('click', () => cellClicked(i));
          board.appendChild(cell);
      }
  };

  // Function to handle cell click
  const cellClicked = (index) => {
      // Add logic to handle the cell click
      const row = findLowestEmptyCell(col);
      if (row !== -1) {
          gameState[row][col] = currentPlayer;
          updateCell(row, col);
          if (checkWin(row, col)) {
              alert(`Player ${currentPlayer} wins!`);
              // Reset game or handle win condition here
          }
          currentPlayer = currentPlayer === 1 ? 2 : 1;
      }
      // For now, just toggling the player color
      let cell = board.children[index];
      cell.classList.add(currentPlayer === 1 ? 'player1' : 'player2');
      // Toggle player
      currentPlayer = currentPlayer === 1 ? 2 : 1;
  };

  createBoard();
});