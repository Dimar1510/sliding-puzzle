/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Cell {\n    constructor(index) {\n        this.index = index\n    }\n}\n\nclass Board {\n    constructor(size) {\n        this.size = size\n        this.board = this.createBoard(size)\n        this.moves = 0\n    }\n\n    createBoard(size) {\n        let board = []\n        length = size * size\n        for (let i = 0; i < length; i++) {\n            board[i] = new Cell(i + 1)\n\n        }\n        board[length - 1] = null\n        return board\n    }\n\n    moveCell(i) {\n        if (!this.checkSpace(i)) return\n        this.board[i + this.checkSpace(i)] = this.board[i]\n        this.board[i] = null\n        this.moves ++\n    }\n\n    checkSpace(index) {\n        switch (null) {\n            case this.board[index + 1]:\n                if (index % this.size === this.size - 1) return false\n                return 1\n            case this.board[index - 1]:\n                if (index % this.size === 0) return false\n                return - 1\n            case this.board[index + this.size]:\n                return this.size\n            case this.board[index - this.size]:\n                return -this.size    \n            default:\n                return false;\n        }\n    }\n\n    shuffle() {\n        let currentIndex = this.board.length\n        while (currentIndex != 0) {\n            let randomIndex = Math.floor(Math.random() * currentIndex)\n            currentIndex --\n            [this.board[currentIndex], this.board[randomIndex]] = \n            [this.board[randomIndex], this.board[currentIndex]]\n        }\n    }\n\n    checkWin() {\n        for (let i = 0; i < this.board.length; i ++) {\n            if (this.board[i] && this.board[i].index !== i + 1) return false \n        }\n        return true\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Board);\n\n//# sourceURL=webpack://sliding-puzzle/./src/board.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nconst render = function() {\n    const grid = document.querySelector('.grid')\n    const buttonShuffle = document.getElementById('shuffle')\n    const buttonXSmall = document.getElementById('x-small')\n    const buttonSmall = document.getElementById('small')\n    const buttonMedium = document.getElementById('medium')\n    const buttonLarge = document.getElementById('large')\n    let over = false\n\n    function renderGrid(gameboard) {\n        grid.innerHTML = ''\n        for (let i = 0; i < gameboard.board.length; i++) {\n            grid.append(createCell(gameboard, i))\n        }\n        grid.style.setProperty('--size', gameboard.size)  \n        \n        buttonShuffle.onclick = () => _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].newGame(gameboard.size)\n    }\n\n    function createCell(gameboard, i) {\n        const cell = document.createElement('div')\n        const size = (document.body.clientWidth / gameboard.size) * 0.9\n        const cellSize = size > 100? 100 : size\n        grid.style.width = `${cellSize * gameboard.size}px`\n        \n        grid.style.setProperty('--cell-size', `${cellSize}px`)\n        if (gameboard.board[i]) {\n            cell.classList.add('cell')\n            const content = document.createElement('div')\n            cell.append(content)\n            content.innerText = gameboard.board[i].index\n            const column = i % gameboard.size\n            const row = (i - column) / gameboard.size\n            cell.style.left = `${(column) * cellSize}px`\n            cell.style.top = `${(row) * cellSize}px`\n            if (gameboard.board[i].index === i + 1) {\n                cell.classList.add('complete')\n            }\n            cell.onclick = () => {\n                if (over) return  \n                _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].move(gameboard, cell, i, grid)\n            }\n        }\n        return cell\n    }\n    \n    function renderMessage(message) {\n        const messageDiv = document.querySelector('.message')\n        messageDiv.innerText = message\n    }\n\n    function gameOver(bool) {\n        over = bool\n    }\n\n    function renderDialog(gameboard) {\n        const dialog = document.querySelector('.dialog')\n        const messageDiv = document.querySelector('.win-message')\n        const button = document.getElementById('play-again')\n        messageDiv.textContent = gameboard.moves\n        dialog.showModal()\n        button.onclick = () => {\n            _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].newGame(gameboard.size)\n            dialog.close()\n        }\n    }\n\n\n    buttonXSmall.onclick = () => _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].newGame(3)\n    buttonSmall.onclick = () => _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].newGame(4)\n    buttonMedium.onclick = () => _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].newGame(5)\n    buttonLarge.onclick = () => _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].newGame(6)\n\n    return { renderGrid, renderMessage, gameOver, renderDialog }\n}()\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);\n\n\n//# sourceURL=webpack://sliding-puzzle/./src/dom.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n\nconst game = function() {\n\n    function newGame(size) {\n            const gameboard = new _board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](size)\n            gameboard.shuffle()\n            _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].renderGrid(gameboard) \n            _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].renderMessage('Complete the puzzle')\n            _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gameOver(false)   \n    }\n\n    async function move(gameboard, cell, i, grid) {\n        if (!gameboard.checkSpace(i)) return\n        const size = (document.body.clientWidth / gameboard.size) * 0.9\n        const cellSize = size > 100? 100 : size\n        const index = i + gameboard.checkSpace(i)\n        const column = index % gameboard.size\n        const row = (index - column) / gameboard.size\n        cell.style.left = `${(column) * cellSize}px`\n        cell.style.top = `${(row) * cellSize}px`\n        grid.style.pointerEvents = 'none'\n        await timeOut()\n        gameboard.moveCell(i) \n        _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].renderGrid(gameboard) \n        grid.style.pointerEvents = 'all'\n        if (!gameboard.checkWin()) {\n            _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].renderMessage(`You've made ${gameboard.moves} moves`)\n        } else {\n            _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].renderDialog(gameboard)\n            _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gameOver(true)\n        }\n        \n    }\n\n    function consoleBoard(gameboard) {\n        let board = []\n        let boardIndex = 0\n        for (let i = 0; i < gameboard.size; i++) {\n            board[i] = []\n            for (let j = 0; j < gameboard.size; j++) {\n                if (gameboard.board[boardIndex]) {\n                    board[i][j] = gameboard.board[boardIndex].index    \n                } else {\n                    board[i][j] = null\n                }\n                boardIndex++\n            }\n        }\n        console.log(board)\n    }\n    \n    function timeOut() {   \n        return new Promise((resolve) => setTimeout(resolve, 250))\n    }\n\n    return { newGame, move }\n}()\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (game);\n\n//# sourceURL=webpack://sliding-puzzle/./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

eval("/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\n_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].newGame(4)\n\n\n\n//# sourceURL=webpack://sliding-puzzle/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;