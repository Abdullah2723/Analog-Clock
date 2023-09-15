
// get the clock Hands
const minHand = document.querySelector('.mint')
const hrHand = document.querySelector('.hr')
const secHand = document.querySelector('.sec')

// global variable to set the vale of time
let sec;
let mint;
let hour;

// function to perform a clock
let analog = () => {
    let date = new Date();
    sec = date.getSeconds() / 60 * 360;
    mint = date.getMinutes() / 60 * 360;
    hour = date.getHours() / 12 * 360;

    secHand.style.transform = `rotate(${sec}deg)`
    minHand.style.transform = `rotate(${mint}deg)`
    hrHand.style.transform = `rotate(${hour}deg)`
}
// setInterval on the clock function call after 1second
setInterval(analog, 1000)
