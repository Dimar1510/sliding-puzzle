import Board from "./board"
import render from "./dom"

const game = function() {

    function newGame(size) {
            const gameboard = new Board(size)
            gameboard.shuffle()
            render.renderGrid(gameboard) 
            render.renderMessage('Complete the puzzle')
            render.gameOver(false)   
    }

    async function move(gameboard, cell, i, grid) {
        if (!gameboard.checkSpace(i)) return
        const size = (document.body.clientWidth / gameboard.size) * 0.9
        const cellSize = size > 100? 100 : size
        const index = i + gameboard.checkSpace(i)
        const column = index % gameboard.size
        const row = (index - column) / gameboard.size
        cell.style.left = `${(column) * cellSize}px`
        cell.style.top = `${(row) * cellSize}px`
        grid.style.pointerEvents = 'none'
        await timeOut()
        gameboard.moveCell(i) 
        render.renderGrid(gameboard) 
        grid.style.pointerEvents = 'all'
        if (!gameboard.checkWin()) {
            render.renderMessage(`You've made ${gameboard.moves} moves`)
        } else {
            render.renderDialog(gameboard)
            render.gameOver(true)
        }
        
    }

    function consoleBoard(gameboard) {
        let board = []
        let boardIndex = 0
        for (let i = 0; i < gameboard.size; i++) {
            board[i] = []
            for (let j = 0; j < gameboard.size; j++) {
                if (gameboard.board[boardIndex]) {
                    board[i][j] = gameboard.board[boardIndex].index    
                } else {
                    board[i][j] = null
                }
                boardIndex++
            }
        }
        console.log(board)
    }
    
    function timeOut() {   
        return new Promise((resolve) => setTimeout(resolve, 250))
    }

    return { newGame, move }
}()

export default game