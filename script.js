let interval;      
let minutes = 0;   
let seconds = 0;  
let milliseconds = 0; 

const displayMinutes = document.getElementById('minutes');
const displaySeconds = document.getElementById('seconds');
const displayMilliseconds = document.getElementById('milliseconds');
const lapsContainer = document.getElementById('laps');

document.getElementById('startButton').onclick = start;
document.getElementById('pauseButton').onclick = pause;
document.getElementById('resetButton').onclick = reset;
document.getElementById('lapButton').onclick = recordLap;

function start() {
    clearInterval(interval); 
    interval = setInterval(() => {
        milliseconds++;
        
        if (milliseconds >= 100) {
            milliseconds = 0;
            seconds++;
        }
        
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }
        
        updateDisplay();
    }, 10); 
}

function pause() {
    clearInterval(interval); 
}

function reset() {
    clearInterval(interval); 
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
    lapsContainer.innerHTML = ''; 
}

function recordLap() {
    const lapTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
    const lapItem = document.createElement('li');
    lapItem.textContent = lapTime;
    lapItem.classList.add('lap');
    lapsContainer.appendChild(lapItem);
}

function updateDisplay() {
    displayMinutes.textContent = String(minutes).padStart(2, '0');
    displaySeconds.textContent = String(seconds).padStart(2, '0');
    displayMilliseconds.textContent = String(milliseconds).padStart(2, '0');
}