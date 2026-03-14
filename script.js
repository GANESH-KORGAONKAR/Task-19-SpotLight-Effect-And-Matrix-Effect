const btn = document.querySelector(".btn");

const btnText = btn.innerText;

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

let iteration = 0;
let interval = null;

function randomText() {

    const str = btnText.split("").map((char, index) => {

        if (index < iteration) {
            return char;
        }

        return characters[Math.floor(Math.random() * characters.length)];

    }).join("");

    btn.innerText = str;

    iteration += 0.25;

    if (iteration >= btnText.length) {
        clearInterval(interval);
        btn.innerText = btnText;
    }
}

btn.addEventListener("mouseenter", () => {

    iteration = 0;

    clearInterval(interval);

    interval = setInterval(randomText, 30);

});

addEventListener("mousemove", (e) => {

    document.body.style.setProperty("--x", e.clientX + "px");
    document.body.style.setProperty("--y", e.clientY + "px");

});