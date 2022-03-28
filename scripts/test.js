import {startTime} from './timer.js';

let typingText;
let currChar = 0;
let typingTextLen;

function startTest() {
    fillText();
    //startTime();
    
    document.getElementById('index-0').style.color = "green";
}

function fillText() {
    typingText = "Lorem ipsum "
    + "dolor sit amet, consectetur adipiscing elit, sed do eiusmod "
    + "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad "
    + "minim veniam, quis nostrud exercitation ullamco laboris nisi ut "
    + "aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit "
    + "in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
    + "Excepteur sint occaecat cupidatat non proident, sunt in culpa "
    + "qui officia deserunt mollit anim id est laborum.";

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

document.querySelector("button").addEventListener("click", () => {
    startTest();
});

document.addEventListener("keypress", (e) => {

    if (e.key === typingText.charAt(currChar)) {
        document.getElementById(`index-${currChar}`).style.color = "black";
        currChar++;
    }

    if (currChar != typingTextLen) {
        document.getElementById(`index-${currChar}`).style.color = "green"
    }
});