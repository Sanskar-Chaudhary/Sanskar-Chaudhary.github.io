function toggleMenu() {
    document.querySelector(".navbar").classList.toggle("active");
}

// Auto-close menu when clicking outside
document.addEventListener("click", function (event) {
    const navbar = document.querySelector(".navbar");
    const hamburger = document.querySelector(".hamburger");

    if (!navbar.contains(event.target) && !hamburger.contains(event.target)) {
        navbar.classList.remove("active");
    }
});
