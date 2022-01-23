const heroNavLinks = document.querySelectorAll(".hero-nav-link");

for (const heroNavLink of heroNavLinks) {
    heroNavLink.addEventListener("click", function() {
        document.querySelector(".hero-nav-link.active").classList.remove("active");
        this.classList.add("active");
    })
}

// let currentHeadingIndex = 0;
// const animationInterval = setInterval(() => {
//     const heroHeadings = document.querySelectorAll(".hero-heading-animation");
//     heroHeadings[currentHeadingIndex].style.display = "none";
//     currentHeadingIndex++;
//     if (currentHeadingIndex === 5) {
//         currentHeadingIndex = 0;
//     }
//     heroHeadings[currentHeadingIndex].style.display = "inline-block";
// }, 6000)