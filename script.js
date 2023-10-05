const game = {
    board: [
        "", "", "",
        "", "", "",
        "", "", ""
    ],

    players: {
        player1Name: "",
        player2Name: ""
    },
}

function renderBoard() {
    const board = game.board;
    for (let i = 0; i < board.length; i++) {
        const square = board[i];
        const cellElm = createElement("div");
        cellElm.textContent = `${square}`;

    };
    return;
}