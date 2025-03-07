document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress");
    progressBars.forEach(bar => {
        bar.style.width = bar.dataset.width;
    });
});