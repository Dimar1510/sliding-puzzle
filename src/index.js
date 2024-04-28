import { wrapGrid } from "animate-css-grid"
import Board from "./board"



let gameboard = new Board(6)
gameboard.shuffle()


console.log(gameboard.checkWin())
const grid = document.querySelector('.grid')
wrapGrid(grid, {duration : 250})

function renderGrid() {
    grid.innerHTML = ''
    for (let i = 0; i < gameboard.board.length; i++) {
        grid.append(createCell(i))
    }
    grid.style.setProperty('--size', gameboard.size)   
}

function createCell(i) {
    const cell = document.createElement('div')
    if (gameboard.board[i]) {
        cell.classList.add('cell')
        cell.innerText = gameboard.board[i].index
        const column = i % gameboard.size
        const row = (i - column) / gameboard.size
        cell.style.gridRow = `${row + 1}/${row + 2}`
        cell.style.gridColumn = `${column + 1}/${column + 2}`
        cell.onclick = () => {  
            move(cell, i)  
        }
    }
    return cell
}

async function move(cell, i) {
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
 
    renderGrid()
    grid.style.pointerEvents = 'all'
    console.log(gameboard.checkWin())
    
    // let board = []
    // let boardIndex = 0
    // for (let i = 0; i < gameboard.size; i++) {
    //     board[i] = []
    //     for (let j = 0; j < gameboard.size; j++) {
    //         if (gameboard.board[boardIndex]) {
    //             board[i][j] = gameboard.board[boardIndex].index    
    //         } else {
    //             board[i][j] = null
    //         }
    //         boardIndex++
            
    //     }
    // }

    // console.log(board)
}

function timeOut() {   
    return new Promise((resolve) => setTimeout(resolve, 250))
  }

renderGrid()

