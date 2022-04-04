
const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secEl  = document.getElementById('sec')

let newYears = "15 Aug 2022";

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const total_seconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(total_seconds / 3600 /24);
    const hours = Math.floor(total_seconds / 3600) % 24;
    const minutes = Math.floor(total_seconds /60 )%60;
    const seconds = Math.floor (total_seconds)%60;


     if (days < 0) {
         newYears = "12 Dec 2025";
     } 

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secEl.innerHTML = formatTime(seconds);


   

}

function formatTime(time){
    return time < 10 ? `0${time}`:time;
}
// Initial call of Function
countdown();


setInterval(countdown,1000)