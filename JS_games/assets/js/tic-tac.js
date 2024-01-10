const ticTacButtons = document.querySelectorAll('.tic-tac__element');
const newGame = document.querySelector('.article__btn');

let currentPlayer = 'Cross';
let gameBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

const winCombinations = [
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]]
];

function checkWinner() {
    for (const combination of winCombinations) {
        const [a, b, c] = combination;
        const [x1, y1] = a;
        const [x2, y2] = b;
        const [x3, y3] = c;

        if (
            gameBoard[x1][y1] !== '' &&
            gameBoard[x1][y1] === gameBoard[x2][y2] &&
            gameBoard[x1][y1] === gameBoard[x3][y3]
        ) {
            return true;
        }
    }

    return false;
}

function endGame(winner) {
    setTimeout(() => {
        alert(`${winner} wins!`);
        resetGame();
    }, 150)
}

function resetGame() {
    currentPlayer = 'Cross';
    gameBoard = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    ticTacButtons.forEach((btn) => {
        const imgList = btn.querySelectorAll('img');
        imgList.forEach((img) => {
            img.classList.remove('active');
            img.classList.add('hidden');
        });

        btn.disabled = false;
    });
}

ticTacButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const num = btn.getAttribute('data-num');
        const [row, col] = [(num - 1) / 3 | 0, (num - 1) % 3];

        if (gameBoard[row][col] === '') {
            const ticTacImg = btn.querySelector(`[alt="${currentPlayer}"]`);
            ticTacImg.classList.remove('hidden');
            ticTacImg.classList.add('active');

            gameBoard[row][col] = currentPlayer;

            if (checkWinner()) {
                endGame(currentPlayer);
            } else {
                currentPlayer = currentPlayer === 'Cross' ? 'Circle' : 'Cross';
                btn.disabled = true;
            }
        }
    });
});

newGame.addEventListener('click', resetGame);