// Simple animation on scroll
window.addEventListener("scroll", () => {
    document.querySelectorAll(".card, .project-card").forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 50) {
            el.style.transform = "translateY(0)";
            el.style.opacity = "1";
        }
    });
});