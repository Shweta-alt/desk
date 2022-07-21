const daysEl = document.getElementById('days');                 // taking reference of elements by their respective id using getElementById method of javascript.
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');


// const setTimer = "2 Aug 2022";                                      // set the date of countdown 



function countdown() {                                               // function of countdown which will provide the feature of counting :
    // day | hour | minute  | seconds 
    const countStarts = new Date(setTimer);                         // creating an constructor which will take the date as an input to set the timer.
    const currentDate = new Date();

    const totalSeconds = (countStarts - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);


}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
// countdown();

// if(formatTime == true){
//     alert(setInterval(countdown,1000));
// }
// else{
//     console.log("enter the date to set the timer");
// }

