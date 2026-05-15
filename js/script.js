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

    // 2. Click interaction
    const pop = new Audio("assets/audio/2sad4me.mp3");
    const homeImg = document.getElementById("home-image");

    if (homeImg) {
        homeImg.addEventListener("click", () => {
            pop.currentTime = 0;
            pop.play().catch(e => console.error("Audio playback failed:", e));
            homeImg.classList.add("roll-away");
            document.body.classList.add("grayscale");
        });
    }
});