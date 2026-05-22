// javascript file

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
    const text_bubbles = document.querySelectorAll(".text-bubble");
    const social_a = document.querySelectorAll(".social a")
    const selected_pages = document.querySelectorAll(".selected-page");

    if (home_image) {
        home_image.addEventListener("click", () => {
            // apply a class directly to an element
            document.body.classList.add("grayscale");
            document.body.classList.add("grayscale-scrollbar-thumb");
            home_image.classList.add("roll-away");
            sad_mp3.currentTime = 0;
            sad_mp3.play().catch(e => console.error("Audio playback failed:", e));

            text_bubbles.forEach(i => {
                i.classList.add("grayscale-text");
            });
            social_a.forEach(i => {
                i.classList.add("grayscale-socials")
            });
            selected_pages.forEach(i => {
                i.classList.add("grayscale-selected")
            });
        });
    };
    
    // CLICK POMNI FOR HONK-ACTION
    const fnaf_honk = new Audio("assets/audio/fnaf-honk.mp3")
    const pomni_img = document.getElementById("pomni-img");
    
    pomni_img.addEventListener("click", () => {
        fnaf_honk.currentTime = 0;
        fnaf_honk.play();
    
    });

});





