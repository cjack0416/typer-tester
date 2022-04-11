import {currChar} from "./util.js"

let wpm;
let timer = 60;
let timePerMin;

function startTime() {

    const interval = setInterval(function() {
        document.getElementById("timer").innerHTML = `time left: ${timer}`;
        timer--;

        timePerMin = (60 - timer) / 60;

        wpm = Math.round((currChar / 5) / timePerMin);

        document.getElementById("wpm").innerHTML = `wpm: ${wpm}`;
    
        if (timer < 0) clearInterval(interval);
    }, 1000);

}

export {startTime, timePerMin, timer};