const boardContainer = document.querySelector("[data-form-container]");

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
    currentTurn: "X",
    gameRunning: true,
};

function gameStateBoard() {
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

gameStateBoard();

const squares = document.querySelectorAll('.square');
const resetBtn = document.querySelector(".resetBtn");
const gameStatus = document.querySelector(".gameStatus");

function swapTurn() {
    Gameboard.currentTurn = Gameboard.currentTurn === "X" ? "O" : "X";
    gameStatus.textContent = `${Gameboard.currentTurn}'s turn`;
}

function isWinner() {
    let roundWon = false;

    for (let i = 0; i < Gameboard.winningSolutions.length; i++) {
        const currCondition = Gameboard.winningSolutions[i];
        const cellA = Gameboard.gameboard[currCondition[0]];
        const cellB = Gameboard.gameboard[currCondition[1]];
        const cellC = Gameboard.gameboard[currCondition[2]];

        if (cellA === "" || cellB === "" || cellC === "") {
            continue
        }
        if (cellA == cellB && cellB == cellC) {
            roundWon = true;
            break;
        }
    };

    if (roundWon) {
        gameStatus.textContent = `${Gameboard.currentTurn} Wins!`;
        Gameboard.gameRunning = false;
        return
    } else if (!Gameboard.gameboard.includes("")) {
        gameStatus.textContent = "It's a Draw!";
        Gameboard.gameRunning = false;
        return

    }
    swapTurn();
}

function resetGame() {
    Gameboard.gameboard = ["", "", "", "", "", "", "", "", ""];
    Gameboard.currentTurn = "X";
    Gameboard.gameRunning = true;
    gameStatus.textContent = `${Gameboard.currentTurn}'s turn`;
    squares.forEach((cell) => cell.textContent = "");
}

function addSymbolToBoard(event) {
    let currCell = event.target.id;
    if (event.target.textContent == "" && Gameboard.gameRunning) {
        event.target.textContent = Gameboard.currentTurn;
    }
    Gameboard.gameboard[currCell] = Gameboard.currentTurn;
    isWinner();
}


resetBtn.addEventListener("click", resetGame);

squares.forEach(square => {
    square.addEventListener("click", addSymbolToBoard);
});
