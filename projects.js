const projects = [
    {
        title: "Fake News Detection",
        description: "A machine learning model that detects fake news using ML.",
        tech: "Python, BERT, SVM",
        github: "https://github.com/Kirti055/Fake-News-Detection"
    },
    {
        title: "Library Seat Reservation",
        description: "A web app for students to reserve library seats and issue books.",
        tech: "JavaScript, ReactJs, Firebase",
        github: "https://github.com/sukritichawla/Nexathon"
    },
    {
        title: "Portfolio Website",
        description: "My personal website showcasing my projects, skills, and experience.",
        tech: "HTML, CSS, JavaScript",
    }
];

// Function to Load Projects Dynamically
function loadProjects() {
    const container = document.getElementById("projects-container");
    projects.forEach((project, index) => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");
        projectCard.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
        projectCard.onclick = () => openModal(index);
        container.appendChild(projectCard);
    });
}

// Modal Functionality
function openModal(index) {
    document.getElementById("modal-title").innerText = projects[index].title;
    document.getElementById("modal-description").innerText = projects[index].description;
    document.getElementById("modal-tech").innerText = projects[index].tech;
    document.getElementById("modal-github").href = projects[index].github;
    document.getElementById("project-modal").style.display = "flex";
}

document.querySelector(".close").onclick = function() {
    document.getElementById("project-modal").style.display = "none";
};

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target == document.getElementById("project-modal")) {
        document.getElementById("project-modal").style.display = "none";
    }
};

window.onload = loadProjects;
