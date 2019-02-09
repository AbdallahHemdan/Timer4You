let h2 = document.getElementsByTagName('h2')[0],
    Start = document.getElementById('Start'),
    Stop = document.getElementById('Stop'),
    Reset = document.getElementById('Reset'),
    Seconds = 0,
    Minutes = 0,
    Hours = 0,
    t;


function Add() {
    Seconds++;
    if (Seconds >= 60) {
        Seconds = 0;
        Minutes++;
        if (Minutes >= 60) {
            Minutes = 0;
            Hours++;
        }
    }
    h2.textContent = (Hours ? (Hours > 9 ? Hours : "0" + Hours) : "00") +
        ":" + (Minutes ? (Minutes > 9 ? Hours : "0" + Minutes) : "00") +
        ":" + (Seconds ? (Seconds > 9 ? Seconds : "0" + Seconds) : "00");

    timer();
}

function timer() {
    t = setTimeout(Add, 1000);
}

timer();

Start.onclick = timer;

Stop.onclick = function () {
    clearTimeout(t);
}

Reset.onclick = function () {
    h2.textContent = "00:00:00";
    Hours = 0, Minutes = 0, Seconds = 0;
}
