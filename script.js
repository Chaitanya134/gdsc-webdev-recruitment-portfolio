const heroNavLinks = document.querySelectorAll(".hero-nav-link");

for (const heroNavLink of heroNavLinks) {
    heroNavLink.addEventListener("click", function() {
        document.querySelector(".hero-nav-link.active").classList.remove("active");
        this.classList.add("active");
    })
}