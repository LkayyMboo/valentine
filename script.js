/* ========================= */
/* TYPING EFFECT ON INDEX.HTML ONLY */
const messageIndex = {
    index: 0,
    message: "To the most beautiful girl I know, Unathi Tsholofelo Kambule 💜"
};

function typeWriter(elementId, messageStr, speed = 50) {
    let i = 0;
    function type() {
        if (i < messageStr.length) {
            document.getElementById(elementId).innerHTML += messageStr.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

window.onload = function() {
    if (document.getElementById("typed")) {
        typeWriter("typed", messageIndex.message, 50);
    }
    startLoveTimer();
};

/* ========================= */
/* BACKGROUND MUSIC */
function startMusic() {
    const audio = document.getElementById("bgMusic");
    if (audio) audio.play();
}

/* ========================= */
/* FOREVER BUTTON */
function foreverYes() {
    window.location.href = "message.html";
}

/* ========================= */
/* LOVE TIMER ON INDEX.HTML */
function startLoveTimer() {
    const startDate = new Date("2024-08-25");
    const timerEl = document.getElementById("loveTimer");
    if (!timerEl) return;

    setInterval(() => {
        const now = new Date();
        const diff = now - startDate;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        timerEl.innerHTML = days + " Days 💜";
    }, 1000);
}

/* ========================= */
/* COVER PAGE FUNCTIONS */
function loveExplosion() {
    const yesBtn = document.querySelector(".btn-yes-glow");
    if (yesBtn) yesBtn.disabled = true;

    for (let i = 0; i < 40; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💜";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = Math.random() * window.innerHeight + "px";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 2000);
    }

    setTimeout(() => {
        const cover = document.getElementById("cover");
        if (cover) cover.classList.add("fade-out");

        setTimeout(() => {
            window.location.href = "home.html";
        }, 1000);
    }, 3000);
}

/* ========================= */
/* NO BUTTON RUNAWAY */
document.addEventListener("DOMContentLoaded", function() {
    const noBtn = document.getElementById("noBtn");
    if (!noBtn) return;

    noBtn.addEventListener("mouseover", function() {
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 50);

        noBtn.style.position = "absolute";
        noBtn.style.left = x + "px";
        noBtn.style.top = y + "px";
    });
});

/* ========================= */
/* CAROUSEL MANUAL + SWIPE */
document.addEventListener("DOMContentLoaded", function() {
    const carouselEl = document.getElementById("memoryCarousel");
    if (!carouselEl) return;

    const carousel = new bootstrap.Carousel(carouselEl, {
        interval: false,
        ride: false,
        wrap: true
    });

    let startX = 0;

    carouselEl.addEventListener("touchstart", e => startX = e.touches[0].clientX);
    carouselEl.addEventListener("touchend", e => {
        let endX = e.changedTouches[0].clientX;
        if (startX - endX > 50) carousel.next();
        if (endX - startX > 50) carousel.prev();
    });
});
