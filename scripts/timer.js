function startTime() {
    let time = 60;

    setInterval(showTime, 1000);
    
    if (time == 0) return;
}

function showTime() {
    document.getElementById("timer").innerHTML = time;
    time -= 1;
}

export {startTime};