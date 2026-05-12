const container = document.getElementById("fireflies");
const count = 20; // number of fireflies

for (let i = 0; i < count; i++) {
    const f = document.createElement("div");
    f.classList.add("firefly");

    f.style.left = Math.random() * 100 + "vw";
    f.style.top = Math.random() * 100 + "vh";
    f.style.animationDuration = 6 + Math.random() * 6 + "s";
    f.style.animationDelay = Math.random() * 5 + "s";

    container.appendChild(f);
}