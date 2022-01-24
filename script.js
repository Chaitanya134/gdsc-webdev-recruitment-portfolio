const heroNavLinks = document.querySelectorAll(".hero-nav-link");

function scrollToSection(section) {
    const element = document.getElementById(section);
    element.scrollIntoView({ behavior: "smooth" });
    document.querySelector(".hero-nav-link.active").classList.remove("active");
    document.getElementById(`${section}-nav-link`).classList.add("active");
}