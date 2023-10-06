const boardContainer = document.querySelector("[data-form-container]");

const Gameboard = {
    gameboard: [
        "X", "O", "X",
        "X", "O", "X",
        "X", "O", "X",
    ],
    winningSolutions: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ],
};

function renderBoard() {
    const boardLayout = Gameboard.gameboard;
    for (let i = 0; i < boardLayout.length; i++) {
        const square = boardLayout[i];
        const cellElm = document.createElement("div");
        cellElm.textContent = `${square}`;
        cellElm.setAttribute("id", i);
        boardContainer.appendChild(cellElm);
    };
}

renderBoard();