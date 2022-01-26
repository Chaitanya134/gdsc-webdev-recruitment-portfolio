// Hamburger menu animation
const hamburgerMenu = document.getElementById("hamburger-menu");
const hamburgerLines = document.querySelectorAll(".hamburger-lines");
const modalBg = document.querySelector(".modal-bg");
const modal = document.querySelector(".modal");

hamburgerMenu.addEventListener('click', function (){
    hamburgerMenu.classList.toggle("active");
    if (hamburgerMenu.className.includes("active")){
        hamburgerLines.forEach(line => line.classList.add("active-line"));
        hamburgerLines.forEach(line => line.classList.remove("inactive-line"));        
        
        // Fade-In animation
        modalBg.classList.remove("fade-out");        
        modal.classList.remove("fade-out");      
        modalBg.classList.add("fade-in");        
        modal.classList.add("fade-in"); 
    } else {
        hamburgerLines.forEach(line => line.classList.add("inactive-line"));
        hamburgerLines.forEach(line => line.classList.remove("active-line"));
        
        // Fade-Out animation
        modalBg.classList.remove("fade-in");        
        modal.classList.remove("fade-in");
        modalBg.classList.add("fade-out");        
        modal.classList.add("fade-out");
    }
});



function scrollToSection(section) {
    const element = document.getElementById(section);
    element.scrollIntoView({ behavior: "smooth" });
    document.querySelector(".hero-nav-link.active").classList.remove("active");
    document.querySelector(".hero-modal-link.active").classList.remove("active");
    document.getElementById(`${section}-nav-link`).classList.add("active");
    document.getElementById(`${section}-modal-link`).classList.add("active");
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