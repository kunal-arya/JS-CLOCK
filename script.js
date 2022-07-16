const secondsEl = document.querySelector(".sec-hand");
const minuteEl = document.querySelector(".min-hand");
const hourEl = document.querySelector(".hour-hand");

function getSeconds() {
    const now = new Date();
    const minute = now.getMinutes();
    const seconds = now.getSeconds();
    const hour = now.getHours();
    const secondsDeg = ((seconds/60) * 360 ) + 90;
    const minuteDeg  = ((minute / 60) * 360 ) + 90;
    const hourDeg    = ((hour / 12) * 360) + 90;

    secondsEl.style.transform = `rotate(${secondsDeg}deg)`;
    minuteEl.style.transform = `rotate(${minuteDeg}deg)`;
    hourEl.style.transform = `rotate(${hourDeg}deg)`;
    console.log(seconds,secondsDeg)
}

setInterval(getSeconds,1000);