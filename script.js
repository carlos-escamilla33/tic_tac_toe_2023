const Gameboard = {
    gameboard: [
        "", "", "",
        "", "", "",
        "", "", "",
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
    player1Guesses: [],
    player2Guesses: [],
    currentTurn: "X",
};

function gameStateBoard() {
    const boardContainer = document.querySelector("[data-form-container]");
    const boardLayout = Gameboard.gameboard;
    for (let i = 0; i < boardLayout.length; i++) {
        const square = boardLayout[i];
        const cellElm = document.createElement("div");
        cellElm.textContent = `${square}`;
        cellElm.setAttribute("id", `${i}`);
        cellElm.setAttribute("class", "square");
        boardContainer.appendChild(cellElm);
    };
}

function swapTurn() {
    Gameboard.currentTurn = Gameboard.currentTurn === "X" ? "O" : "X";
    console.log(Gameboard.currentTurn);
}

function addSymbolToBoard(event) {
    let currCell = event.target.id;
    if (event.target.textContent == "") {
        event.target.textContent = Gameboard.currentTurn;
    }
    Gameboard.gameboard[currCell] = Gameboard.currentTurn;
    swapTurn();
}

function renderState() {
    gameStateBoard();
}

renderState();

const squares = document.querySelectorAll('.square');

squares.forEach(square => {
    square.addEventListener("click", addSymbolToBoard);
});
