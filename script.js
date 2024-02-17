let timer;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;

function startStopwatch() {
    if (!timer) {
        timer = setInterval(updateTime, 10);
        document.getElementById("startBtn").innerText = "Pause";
    } else {
        clearInterval(timer);
        timer = null;
        document.getElementById("startBtn").innerText = "Resume";
    }
}

function resetStopwatch() {
    clearInterval(timer);
    timer = null;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    updateDisplay();
    document.getElementById("startBtn").innerText = "Start";
}

function updateTime() {
    milliseconds += 10;
    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("minutes").innerText = padTime(minutes);
    document.getElementById("seconds").innerText = padTime(seconds);
    document.getElementById("milliseconds").innerText = padTime(milliseconds / 10);
}

function padTime(value) {
    return value < 10 ? "0" + value : value;
}
