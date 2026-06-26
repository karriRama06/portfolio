document.getElementById("btn").addEventListener("click", function () {
    alert("Resume download will start soon!");
});

// Smooth scrolling
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});