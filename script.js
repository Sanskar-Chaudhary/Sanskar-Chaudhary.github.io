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

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('a[href="#home"]').addEventListener("click", function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
    });
});
