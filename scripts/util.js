import { timer, timePerMin } from "./timer.js";

let typingText;
let currChar = 0;
let typingTextLen;
let missCount = 0;
let uncorrectedMissCount = 0;
let readyFlag = false;

const baseBgColor = "rgb(216, 253, 253)";
const currColor = "#98F87E";
const missColor = "#FF6E6E";

function fillText() {

    readyFlag = true;

    typingText = "When writing JavaScript, most people would love to say that they use a debugger "
    + "all the time, but that's certainly not always the case. Sometimes, console logging is just a "
    + "necessary part of the development process, and turbo console log makes it incredibly easy. "
    + "With Turbo Console Log, you can highlight variables, use keyboard shortcuts to insert "
    + "multiple console logs, and delete all of them with a single command as well. It truly is "
    + "critical in speeding up JavaScript development and debugging."

    typingTextLen = typingText.length;

    let el = document.getElementById("typing-content");
    el.innerHTML = '';

    for (let i = 0; i < typingTextLen; i++) {

        const childEl = document.createElement("span");
        childEl.innerHTML = typingText.charAt(i);
        childEl.setAttribute("id", `index-${i}`);

        el.appendChild(childEl);
    }
}

function reset() {

    document.getElementById(`index-${currChar}`).style.backgroundColor = baseBgColor;
    currChar = 0;

    missCount = 0;
    uncorrectedMissCount = 0;

    readyFlag = false;
}

document.addEventListener("keypress", (e) => {


    if (timePerMin !== undefined && timer >= 0 && readyFlag === true) {
        if (e.key === typingText.charAt(currChar)) {
            document.getElementById(`index-${currChar}`).style.backgroundColor = baseBgColor;
            document.getElementById(`index-${currChar}`).style.textDecoration = "none";
            currChar++;

            if (currChar != typingTextLen) {
                document.getElementById(`index-${currChar}`).style.backgroundColor = currColor;
                document.getElementById(`index-${currChar}`).style.textDecoration = "underline";
            }
        }

        else {
            missCount++;
            uncorrectedMissCount++;
            document.getElementById("miss-count").innerHTML = `miss count: ${missCount}`;
            document.getElementById(`index-${currChar}`).style.backgroundColor = missColor;
            document.getElementById(`index-${currChar}`).style.textDecoration = "none";
            currChar++;
            document.getElementById(`index-${currChar}`).style.backgroundColor = currColor;
            document.getElementById(`index-${currChar}`).style.textDecoration = "underline";
        }
    }
});

document.addEventListener("keydown", (e) => {

    if (e.key === "Backspace") {
        if (document.getElementById(`index-${currChar-1}`).style.backgroundColor === missColor) uncorrectedMissCount--;
        document.getElementById(`index-${currChar}`).style.backgroundColor = baseBgColor;
        document.getElementById(`index-${currChar}`).style.textDecoration = "none";
        currChar--;
        document.getElementById(`index-${currChar}`).style.backgroundColor = currColor;
        document.getElementById(`index-${currChar}`).style.textDecoration = "underline";
    }
});

export {fillText, reset, currChar, uncorrectedMissCount};