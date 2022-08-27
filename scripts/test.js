import {startTime} from './timer.js';
import {fillText} from './util.js';

const currColor = "#98F87E";

function startTest() {
    fillText();
    startTime();
    
    const firstEl = document.getElementById("index-0");
    firstEl.style.backgroundColor = currColor;
    firstEl.style.textDecoration = "underline";
    
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