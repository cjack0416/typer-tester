import {currChar, uncorrectedMissCount, reset} from "./util.js"

let wpm;
let grossWPM;
let timer = 60;
let timePerMin;

function startTime() {

    const interval = setInterval(function() {
        document.getElementById("timer").innerHTML = `time left: ${timer}`;
        timer--;
    
        if (timer < 0) {
            clearInterval(interval);
        }
    }, 1000);
    
    const wpmInterval = setInterval(function() {
        timePerMin = (60 - timer) / 60;

        grossWPM = timePerMin !== 0 ? currChar / 5 : 0;

        wpm = timePerMin !== 0 ? Math.round((grossWPM - uncorrectedMissCount) / timePerMin) : 0;

        wpm > 0 ? document.getElementById("wpm").innerHTML = `wpm: ${wpm}`
        : document.getElementById("wpm").innerHTML = `wpm: 0`;

        if (timer < 0) {
            clearInterval(wpmInterval);
            document.querySelector("button").style.visibility = "visible";
            document.getElementById("btn").innerHTML = "Retry";

            wpm = 0;
            grossWPM = 0;
            timer = 60;
            timePerMin = 0;
            
            reset();
        }
    }, 1);
}

export {startTime, timePerMin, timer, wpm, grossWPM};