// firefly effect over whole page
document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("fireflies");
    const count = 20;

    for (let i = 0; i < count; i++) {
        const f = document.createElement("div");
        f.classList.add("firefly");

        f.style.left = Math.random() * 100 + "vw";
        f.style.top = Math.random() * 100 + "vh";
        f.style.animationDuration = 6 + Math.random() * 6 + "s";
        f.style.animationDelay = Math.random() * 5 + "s";

        container.appendChild(f);
    }

    // click index home image for sad music
    const pop = new Audio("assets/audio/2sad4me.mp3");

    document.querySelectorAll(".home-image").forEach(img => {
        img.addEventListener("click", () => {
            // play sound
            pop.currentTime = 0;
            pop.play();

            // roll away - adds the class to trigger the CSS transition
            img.classList.add("roll-away");

            // grayscale background - changed from documentElement to body
            document.body.classList.add("grayscale");
        });
    });
});