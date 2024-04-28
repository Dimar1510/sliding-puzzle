class Cell {
    constructor(index) {
        this.index = index
    }
}

class Board {
    constructor(size) {
        this.size = size
        this.board = this.createBoard(size)
    }

    createBoard(size) {
        let board = []
        length = size * size
        for (let i = 0; i < length; i++) {
            board[i] = new Cell(i + 1)

        }
        board[length - 1] = null
        return board
    }

    moveCell(i) {
        if (!this.checkSpace(i)) return
        this.board[i + this.checkSpace(i)] = this.board[i]
        this.board[i] = null
    }

    checkSpace(index) {
        switch (null) {
            case this.board[index + 1]:
                return 1
            case this.board[index - 1]:
                return - 1
            case this.board[index + this.size]:
                return this.size
            case this.board[index - this.size]:
                return -this.size    
            default:
                return false;
        }
    }

    shuffle() {
        let currentIndex = this.board.length
        while (currentIndex != 0) {
            let randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex --
            [this.board[currentIndex], this.board[randomIndex]] = 
            [this.board[randomIndex], this.board[currentIndex]]
        }
    }

    checkWin() {
        for (let i = 0; i < this.board.length; i ++) {
            if (this.board[i] && this.board[i].index !== i + 1) return false 
        }
        return true
    }
}

export default Board