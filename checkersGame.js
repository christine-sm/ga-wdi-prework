var checkerboard = [[null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null]];

function setSquare(player, row, col) {
    player = checkerboard[row][col];
}

function getPieceAt(row, col) {
    var piece = checkerboard [row][col];
    if (val == 'R' || val == 'B') {
        return piece;
    } else {
        return null;
    }
}

/*setSquare, which places a player (either 'R' or 'B') at a particular row and column on the board.
getPieceAt, which returns the piece at a particular row and column; if there's no piece at that position, it should return null*/
