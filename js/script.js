

// FIREFLIES ACROSS THE PAGE
document.addEventListener("DOMContentLoaded", () => {

    const fireflies = document.getElementById("fireflies");
    const count = 20;

    for (let i = 0; i < count; i++) {
        const f = document.createElement("div");
        f.classList.add("firefly");

        f.style.left = Math.random() * 100 + "vw";
        f.style.top = Math.random() * 100 + "vh";
        f.style.animationDuration = 6 + Math.random() * 6 + "s";
        f.style.animationDelay = Math.random() * 5 + "s";

        fireflies.appendChild(f);
    }


// HOME IMAGE ROLL AWAY WITH SAD MUSIC AND GRAYSCALE
    const sad_mp3 = new Audio("assets/audio/2sad4me.mp3");
    const home_image = document.getElementById("home-image");

    if (home_image) {
        home_image.addEventListener("click", () => {
            sad_mp3.currentTime = 0;
            sad_mp3.play().catch(e => console.error("Audio playback failed:", e));
            home_image.classList.add("roll-away");
            document.body.classList.add("grayscale");
        });
    }
});


// CLICK POMNI FOR HONK-ACTION
const fnaf_honk = new Audio("assets/audio/fnaf-honk.mp3")
const pomni_img = document.getElementById("pomni-img");

pomni_img.addEventListener("click", () => {
    fnaf_honk.currentTime = 0;
    fnaf_honk.play();

});



