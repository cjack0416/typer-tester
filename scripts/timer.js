let time = 10;

function startTime() {

    const interval = setInterval(function() {
        document.getElementById("timer").innerHTML = `time left: ${time}`;
        time -= 1;
    
        if (time === -1) clearInterval(interval);
    }, 1000);

}

export {startTime};