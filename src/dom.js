import game from "./game"
import { wrapGrid } from "animate-css-grid"

const render = function() {
    const grid = document.querySelector('.grid')
    const buttonShuffle = document.getElementById('shuffle')
    const buttonXSmall = document.getElementById('x-small')
    const buttonSmall = document.getElementById('small')
    const buttonMedium = document.getElementById('medium')
    const buttonLarge = document.getElementById('large')
    let over = false

    wrapGrid(grid, {duration : 250})

    function renderGrid(gameboard) {
        grid.innerHTML = ''
        for (let i = 0; i < gameboard.board.length; i++) {
            grid.append(createCell(gameboard, i))
        }
        grid.style.setProperty('--size', gameboard.size)  
        
        buttonShuffle.onclick = () => game.newGame(gameboard.size)
    }

    function createCell(gameboard, i) {
        const cell = document.createElement('div')
        if (gameboard.board[i]) {
            cell.classList.add('cell')
            cell.innerText = gameboard.board[i].index
            const column = i % gameboard.size
            const row = (i - column) / gameboard.size
            cell.style.gridRow = `${row + 1}/${row + 2}`
            cell.style.gridColumn = `${column + 1}/${column + 2}`
            cell.onclick = () => {
                if (over) return  
                game.move(gameboard, cell, i, grid)
               
            }
        }
        return cell
    }
    
    function renderMessage(message) {
        const messageDiv = document.querySelector('.message')
        messageDiv.innerText = message
    }

    function gameOver(bool) {
        over = bool
    }

    function renderDialog(gameboard) {
        const dialog = document.querySelector('.dialog')
        const messageDiv = document.querySelector('.win-message')
        const button = document.getElementById('play-again')
        messageDiv.textContent = gameboard.moves
        dialog.showModal()
        button.onclick = () => {
            game.newGame(gameboard.size)
            dialog.close()
        }
    }


    buttonXSmall.onclick = () => game.newGame(3)
    buttonSmall.onclick = () => game.newGame(4)
    buttonMedium.onclick = () => game.newGame(5)
    buttonLarge.onclick = () => game.newGame(6)

    return { renderGrid, renderMessage, gameOver, renderDialog }
}()

export default render
