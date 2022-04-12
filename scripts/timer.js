import {currChar} from "./util.js"

let wpm;
let timer = 60;
let timePerMin;

function startTime() {

    const interval = setInterval(function() {
        document.getElementById("timer").innerHTML = `time left: ${timer}`;
        timer--;
    
        if (timer < 0) clearInterval(interval);
    }, 1000);
    
    const wpmInterval = setInterval(function() {
        timePerMin = (60 - timer) / 60;

        wpm = timePerMin !== 0 ? Math.round((currChar / 5) / timePerMin) : 0;

        document.getElementById("wpm").innerHTML = `wpm: ${wpm}`;

        if (timer < 0) clearInterval(wpmInterval);
    }, 1);
}

export {startTime, timePerMin, timer};