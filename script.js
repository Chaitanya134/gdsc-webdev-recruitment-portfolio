const heroNavLinks = document.querySelectorAll(".hero-nav-link");

function scrollToSection(section) {
    const element = document.getElementById(section);
    element.scrollIntoView({ behavior: "smooth" });
    document.querySelector(".hero-nav-link.active").classList.remove("active");
    document.getElementById(`${section}-nav-link`).classList.add("active");
}

const skills = {
    HTML: {
        percent: "90%",
        icon: "fa fa-html5",
        color: "rgb(255 67 34)"
    },
    CSS: {
        percent: "80%",
        icon: "fa fa-css3",
        color: "rgb(0, 132, 255)"
    },
    JavaScript: {
        percent: "90%",
        icon: "fab fa-js",
        color: "rgb(255, 217, 0)"
    },
    ReactJs: {
        percent: "85%",
        icon: "fab fa-react",
        color: "#61dafb"
    },
    NodeJs: {
        percent: "60%",
        icon: "fab fa-node-js",
        color: "#6DA15D"
    },
    Git: {
        percent: "45%",
        icon: "fab fa-git-alt",
        color: "red"
    },
    Database: {
        percent: "85%",
        icon: "fas fa-database",
        color: "darkgray"
    }
}

function createSkills() {
    const skillsContainer = document.getElementById("skills-container");
    Object.keys(skills).map(skill => {
        const { percent, icon, color } = skills[skill];
        const skillsDiv = document.createElement("DIV");
        skillsDiv.className = `skills-div skills-${skill.toLowerCase()}`;
        skillsDiv.innerHTML = `
            <div>
                <i class="${icon}" style="color: ${color}"></i><span>${skill}</span>
            </div>
            <div class="progress-bar-container">
                <div class="progress-bar" style="width: ${percent}; background: ${color}"></div>
                <span class="progress-bar-percent">${percent}</span>
            </div>
            `
        skillsContainer.appendChild(skillsDiv);
    })
}

createSkills();