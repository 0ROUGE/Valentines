document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Greeting
    const greeting = document.getElementById('greeting');
    const hour = new Date().getHours();
    greeting.innerText = hour < 12 ? "Good Morning," : hour < 18 ? "Good Afternoon," : "Good Evening,";

    // Music
    const music = document.getElementById('bgMusic');
    document.body.addEventListener('click', () => music.play().catch(() => {}), { once: true });

    // YES button — WhatsApp + confetti
    const yesBtn = document.getElementById('yesBtn');
    const response = document.getElementById('response');
    yesBtn.addEventListener('click', () => {
        response.innerText = "Then let me keep choosing you — today, and every day that follows.";

        // Confetti
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.7 },
            colors: ['#b8975e', '#d9c9a8', '#8c7a4b']
        });

        // WhatsApp
        const phoneNumber = "254797794518"; // your number
        const message = encodeURIComponent("She said YES! ❤️");
        const waURL = `https://wa.me/${phoneNumber}?text=${message}`;
        setTimeout(() => window.open(waURL, "_blank"), 1000);
    });

    // NO button dash
    const noBtn = document.getElementById('noBtn');
    function dashButton() {
        const maxX = window.innerWidth - noBtn.offsetWidth;
        const maxY = window.innerHeight - noBtn.offsetHeight;
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;
        noBtn.style.position = "fixed";
        gsap.to(noBtn, { left: randomX, top: randomY, duration: 0.4, ease: "power2.out" });
    }
    noBtn.addEventListener('mouseenter', dashButton);
    noBtn.addEventListener('touchstart', e => { e.preventDefault(); dashButton(); });
});
