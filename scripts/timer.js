let timer = 60;
let timePerMin;

function startTime() {

    const interval = setInterval(function() {
        document.getElementById("timer").innerHTML = `time left: ${timer}`;
        timer--;

        timePerMin = (timer - 60) / 60;
    
        if (timer === -1) clearInterval(interval);
    }, 1000);

}

export {startTime, timePerMin};