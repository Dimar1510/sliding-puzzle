import Board from "./board"
import render from "./dom"

const game = function() {

    function newGame(size) {
            const gameboard = new Board(size)
            // gameboard.shuffle()
            render.renderGrid(gameboard) 
            render.renderMessage('Make a move')
            render.gameOver(false)   
    }

    async function move(gameboard, cell, i, grid) {
        if (!gameboard.checkSpace(i)) return
        const index = i + gameboard.checkSpace(i)
        const column = index % gameboard.size
        const row = (index - column) / gameboard.size
        grid.style.setProperty('--row', `${row + 1}/${row + 2}`)
        grid.style.setProperty('--column', `${column + 1}/${column + 2}`)
        grid.style.pointerEvents = 'none'
        cell.classList.add('active')
        cell.style.gridRow = `${row + 1}/${row + 2}`
        cell.style.gridColumn = `${column + 1}/${column + 2}`
        await timeOut()
        cell.classList.remove('active')
        gameboard.moveCell(i) 
        render.renderGrid(gameboard) 
        grid.style.pointerEvents = 'all'
        if (!gameboard.checkWin()) {
            render.renderMessage(`You've made ${gameboard.moves} moves`)
        } else {
            render.renderMessage(`Congratulations!\nYou beat the game in ${gameboard.moves} moves!`)
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