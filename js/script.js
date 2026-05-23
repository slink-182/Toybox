// javascript file

// FIREFLIES ACROSS THE PAGE
document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("fireflies");
    const count = 20;

    const fireflies = [];

    const rect = () => container.getBoundingClientRect();

    function random(min, max) {
        return Math.random() * (max - min) + min;
    }

    // create fireflies
    for (let i = 0; i < count; i++) {

        const el = document.createElement("div");
        el.classList.add("firefly");
        container.appendChild(el);

        fireflies.push({
            el,
            x: random(0, rect().width),
            y: random(0, rect().height),
            vx: random(-0.5, 0.5),
            vy: random(-0.5, 0.5)
        });
    }

    function update() {

        const bounds = rect();

        for (const f of fireflies) {

            // slight random drift (gives "alive" feel)
            f.vx += random(-0.05, 0.05);
            f.vy += random(-0.05, 0.05);

            // clamp speed
            const speedLimit = 1.2;
            const speed = Math.hypot(f.vx, f.vy);

            if (speed > speedLimit) {
                f.vx = (f.vx / speed) * speedLimit;
                f.vy = (f.vy / speed) * speedLimit;
            }

            f.x += f.vx;
            f.y += f.vy;

            // wrap edges (keeps them inside main)
            if (f.x < 0) f.x = bounds.width;
            if (f.x > bounds.width) f.x = 0;

            if (f.y < 0) f.y = bounds.height;
            if (f.y > bounds.height) f.y = 0;

            f.el.style.transform = `translate(${f.x}px, ${f.y}px)`;
        }

        requestAnimationFrame(update);
    }

    update();


    // HOME IMAGE ROLL AWAY WITH SAD MUSIC AND GRAYSCALE
    const sad_mp3 = new Audio("assets/audio/2sad4me.mp3");
    const home_image = document.getElementById("home-image");
    const firefly_class = document.querySelectorAll(".firefly");
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

            firefly_class.forEach(i => {
                i.classList.add("grayscale-firefly");
            });
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
    const fnaf_honk = new Audio("assets/audio/fnaf-honk.mp3");
    const ramona_img = document.getElementById("ramona-img");
    var total_clicks = 0;
    
    if (ramona_img) {
        ramona_img.addEventListener("click", () => {
            fnaf_honk.currentTime = 0;
            fnaf_honk.play();
            total_clicks += 1;
            console.log(total_clicks);
        });
    }

    // SET AS DARK THEME
    document.getElementById("theme-toggle").addEventListener("click", () => {
        document.body.classList.toggle("dark");
    });



});





