
const countdownDuration = 60 * 60; 
let timeRemaining = countdownDuration;

function updateTimer() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    const demo = document.getElementById("demo");
    demo.innerHTML = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    if (timeRemaining > 0) {
        timeRemaining--;
        setTimeout(updateTimer, 1000);
    } else {
        demo.innerHTML = "Deal Expired";
    }
}

window.onload = function () {
    updateTimer(); 
};

