function showTime() {
    let date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    let formatHours = convertHours(hours);
    hours = checkTime(hours);

    hours = addZero(hours);
    mins = addZero(mins);
    secs = addZero(secs);

    document.getElementById('clock').innerHTML = `${hours} : ${mins} : ${secs} ${formatHours}`;
}

function convertHours(time) {
    let format = 'AM';
    if(time>=12) {
        format='PM';
    }
    return format;
}

function checkTime(time) {
    if(time>12) {
        time= time-12;
    }
    if(time===0) {
        time = 12;
    }
    return time;
}

function addZero(time) {
    if(time<10) {
        time = "0" +time
    }
    return time;
}

setInterval(showTime,1000);