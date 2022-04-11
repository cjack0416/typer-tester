import {startTime} from './timer.js';
import {fillText} from './util.js';

function startTest() {
    fillText();
    startTime();
    
    document.getElementById("index-0").style.backgroundColor = "green";
    
    const missEl = document.getElementById("miss-count");
    const wpmEl = document.getElementById("wpm");

    missEl.style.visibility = "visible";
    missEl.innerHTML = "miss count: 0";

    wpmEl.style.visibility = "visible";
    wpmEl.innerHTML = "wpm: 0";

    document.querySelector("button").style.visibility = "hidden";

}

document.querySelector("button").addEventListener("click", () => {
    startTest();
});