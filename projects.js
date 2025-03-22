const projects = [
    {
        title: "Fake News Detection",
        description: "A machine learning model that detects fake news using ML.",
        longDescription: "A machine learning model that detects and classifies news as real or fake using NLP techniques. It leverages the BERT transformer model for text embeddings and an SVM classifier to provide accurate predictions. This project processes news headlines and article bodies to determine their authenticity. It uses pre-trained transformer models to analyze text patterns and classify them with high accuracy. The dataset is preprocessed using tokenization and vectorization before being fed into a machine learning pipeline.",
        tech: "Python, BERT, SVM, NLP",
        github: "https://github.com/Kirti055/Fake-News-Detection"
    },
    {
        title: "Library Seat Reservation",
        description: "A web app for students to reserve library seats and issue books. ",
        longDescription: "A web application designed to help students reserve library seats in advance. It also includes a book finder and locker manager system, providing a seamless experience for library users. This system enables students to book library seats online, eliminating the hassle of physical reservations. It features a real-time availability checker, a book finder integrated with library databases, and a secure locker manager for book storage.",
        tech: "JavaScript, React.js, Firebase, SQLite",
        github: "https://github.com/sukritichawla/Nexathon"
    },
    {
        title: "Portfolio Website",
        description: "My personal website showcasing my projects, skills, and experience.",
        longDescription: "This website serves as an interactive resume where visitors can explore my technical skills, past projects, and achievements. It includes an animated About Me page, a dynamic project showcase, and a certificate download feature.",
        tech: "HTML, CSS, JavaScript, React.js",
        github: ""
    }
];

// Function to Load Projects Dynamically with a delay effect
function loadProjects() {
    const container = document.getElementById("projects-container");
    projects.forEach((project, index) => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");
        projectCard.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
        projectCard.onclick = () => openModal(index);
        container.appendChild(projectCard);
        
        // Add delay effect for each card
        projectCard.style.animationDelay = `${index * 0.2}s`;
    });
}

// Modal Functionality with smooth opening effect
function openModal(index) {
    document.getElementById("modal-title").innerText = projects[index].title;
    document.getElementById("modal-description").innerText = projects[index].longDescription;
    document.getElementById("modal-tech").innerText = projects[index].tech;
    document.getElementById("modal-github").href = projects[index].github;
    
    const modal = document.getElementById("project-modal");
    modal.style.display = "flex";
    modal.style.animation = "fadeIn 0.3s ease-in-out";
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

// Load projects with animation
window.onload = loadProjects;
