cells = document.querySelectorAll('.cell');
resultMessage = document.querySelector('.result-message');

let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function handleCellClick(event) {
    const cell = event.target;
    const cellIndex = cell.getAttribute('data-cell-index');

    if (gameBoard[cellIndex] !== '' || !gameActive) return;

    gameBoard[cellIndex] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.classList.add(currentPlayer);

    if (checkWin()) {
        gameActive = false;
        resultMessage.textContent = `GAME OVER!!...${currentPlayer} wins!...`;
        return;
    }

    if (gameBoard.every(cell => cell !== '')) {
        gameActive = false;
        resultMessage.textContent = 'Its a draw!';
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

    if (currentPlayer === 'O' && gameActive) {
        setTimeout(makeSystemMove,1000);
    }
}

function makeSystemMove() {
    const emptyCells = gameBoard.reduce((acc, currentValue, index) => {
        if (currentValue === '') {
            acc.push(index);
        }
        return acc;
    }, []);

    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    const systemMoveIndex = emptyCells[randomIndex];

    gameBoard[systemMoveIndex] = currentPlayer;
    cells[systemMoveIndex].textContent = currentPlayer;
    cells[systemMoveIndex].classList.add(currentPlayer);

    if (checkWin()) {
        gameActive = false;
        resultMessage.textContent = `GAME OVER!!...${currentPlayer} wins!...`;
        return;
    }

    if (gameBoard.every(cell => cell !== '')) {
        gameActive = false;
        resultMessage.textContent = 'Its a draw!';
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c];
    });
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));