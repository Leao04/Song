window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");

    const colors = [
        "red",
        " saddlebrown",
        " rgb(245, 80, 51)",
        " fuchsia",
        "green",
        "black"
    ];


    // Lets get going with the sound here - isso é excelente
    pads.forEach((pad, index) => {
        pad.addEventListener("click", function () {
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBublles(index);
        });
    });

    // Creation a function that makes bubbles

    const createBublles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener("animationend", function () {
            visual.removeChild(this);
        })
    }

});