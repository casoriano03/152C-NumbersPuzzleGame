let numbers = [1, 2, 5, 7, '😎', 3, 4, 8, 6];
let squareHtml = '';
let hasWon = false;

createNumberPuzzle()

function createNumberPuzzle(params) {
    createSquares()
    document.getElementById('app').innerHTML = /*html*/`
    <h1 class="heading">Numbers Puzzle Game<h1>
    <div>${hasWon?gameEndDisplay():''}</div>
    </br>
    </br>
    <div id="gameDiv"> ${squareHtml}</div>
    `;
}

function createSquares() {
    for (let index = 0; index < numbers.length; index++) {
        squareHtml+=`<div class=squares ${hasWon?'':`onclick="switchSquares(${index})"`}>${numbers[index]}</div>`
    }
}

function switchSquares(squareIndex) {
    squareHtml='';
    for (let i = 0; i < numbers.length; i++) {
        if (squareIndex-3===i||squareIndex+3===i||squareIndex-1===i||squareIndex+1===i) {
            if (numbers[i]==='😎'){           
                numbers[i]=numbers[squareIndex]
                numbers[squareIndex]='😎'
            }
        }
    }
    winCondition()
    createNumberPuzzle()
}

function winCondition() {
    let winningArrangement = [1,2,3,4,5,6,7,8,null]
    if (numbers.toString() === winningArrangement.toString()) {
        hasWon = true
    }
    gameEndDisplay()
}

function gameEndDisplay() {
    if (hasWon) {
        return `<h4 class="winningHeading">Congratulations!!! You won<h4>
        <button onclick="location.reload()">Restart</button>
        `
    }
}
