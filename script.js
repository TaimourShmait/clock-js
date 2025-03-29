const secondHand = document.querySelector("#second-hand");
const minuteHand = document.querySelector("#minute-hand");
const hourHand = document.querySelector("#hour-hand");

const timeDisplay = document.querySelector("#time-display"); 

function ensureTwoDigits (time) {
    if (time < 10) {
        time = `0${time}`;
        return time;
    }

    return time;
}


function setDate () {
    const currentTime = new Date();

    let seconds = currentTime.getSeconds();
    let secondsDegrees = ((seconds / 60) * 360) + 90; // Ensure default 90 degree position does not alter ticks 

    console.log("Current Second: " + seconds);
    
    let minutes = currentTime.getMinutes();
    let minutesDegrees = ((minutes / 60) * 360) + 90; 

    if (seconds == 59)
        console.log("Reached minute " + minutes);
    
    let hours = currentTime.getHours() % 12; // Ensure 12 hour format
    let hoursDegrees = ((hours / 12) * 360) + 90;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    seconds = ensureTwoDigits(seconds);
    minutes = ensureTwoDigits(minutes);
    hours = ensureTwoDigits(hours);

    timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;

}

setDate();

setInterval(setDate, 1000); // Run setDate() every second

