const symbols = ['★', '☆', '◯', '◊', '△', '▽', '□', '❖'];
let sequence = [];
let playerSequence = [];
let level = 1;
let score = 0;
let timeLeft = 60;
let timerInterval;

const codeSequence = document.getElementById('code-sequence');
const symbolGrid = document.getElementById('symbol-grid');
const message = document.getElementById('message');
const startButton = document.getElementById('start-button');
const levelDisplay = document.getElementById('level');
const timeDisplay = document.getElementById('time');
const scoreDisplay = document.getElementById('points');
const introModal = document.getElementById('intro-modal');
const closeIntroButton = document.getElementById('close-intro');

startButton.addEventListener('click', startGame);
closeIntroButton.addEventListener('click', closeIntroModal);

function closeIntroModal() {
    introModal.style.display = 'none';
}

function startGame() {
    level = 1;
    score = 0;
    timeLeft = 60;
    updateDisplay();
    startButton.style.display = 'none';
    nextLevel();
    startTimer();
}

function nextLevel() {
    sequence = [];
    playerSequence = [];
    for (let i = 0; i < level + 2; i++) {
        sequence.push(symbols[Math.floor(Math.random() * symbols.length)]);
    }
    displaySequence();
    createSymbolGrid();
}

function displaySequence() {
    codeSequence.innerHTML = '';
    sequence.forEach(symbol => {
        const div = document.createElement('div');
        div.className = 'code-symbol';
        div.textContent = symbol;
        codeSequence.appendChild(div);
    });
    setTimeout(() => {
        codeSequence.innerHTML = sequence.map(() => '<div class="code-symbol">?</div>').join('');
    }, level * 1000);
}

function createSymbolGrid() {
    symbolGrid.innerHTML = '';
    symbols.forEach(symbol => {
        const div = document.createElement('div');
        div.className = 'symbol';
        div.textContent = symbol;
        div.addEventListener('click', () => selectSymbol(symbol));
        symbolGrid.appendChild(div);
    });
}

function selectSymbol(symbol) {
    playerSequence.push(symbol);
    updateSequenceDisplay();
    if (playerSequence.length === sequence.length) {
        checkSequence();
    }
}

function updateSequenceDisplay() {
    const codeSymbols = codeSequence.getElementsByClassName('code-symbol');
    for (let i = 0; i < playerSequence.length; i++) {
        codeSymbols[i].textContent = playerSequence[i];
    }
}

function checkSequence() {
    if (playerSequence.every((symbol, index) => symbol === sequence[index])) {
        score += level * 10;
        level++;
        message.textContent = 'Correct! Advancing to next level...';
        message.style.color = '#00ff00';
        updateDisplay();
        setTimeout(nextLevel, 1500);
    } else {
        endGame('Incorrect sequence! Mission failed.');
    }
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        updateDisplay();
        if (timeLeft <= 0) {
            endGame('Time\'s up! Mission failed.');
        }
    }, 1000);
}

function updateDisplay() {
    levelDisplay.textContent = level;
    timeDisplay.textContent = timeLeft;
    scoreDisplay.textContent = score;
}

function endGame(msg) {
    clearInterval(timerInterval);
    message.textContent = msg;
    message.style.color = '#ff0000';
    startButton.style.display = 'block';
    startButton.textContent = 'Retry Mission';
}