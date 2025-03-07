document.addEventListener("DOMContentLoaded", function () {
    // Smooth fade-in effect
    const aboutSection = document.querySelector(".about-section");
    aboutSection.style.opacity = "0";

    setTimeout(() => {
        aboutSection.style.transition = "opacity 1.5s ease-in-out";
        aboutSection.style.opacity = "1";
    }, 500);

    // Add a hover effect to social buttons
    const socialButtons = document.querySelectorAll(".social-btn");
    socialButtons.forEach((btn) => {
        btn.addEventListener("mouseover", () => {
            btn.style.transform = "scale(1.1)";
        });
        btn.addEventListener("mouseout", () => {
            btn.style.transform = "scale(1)";
        });
    });
});
