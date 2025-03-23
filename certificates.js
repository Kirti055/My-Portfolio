window.onload = function () {
    document.getElementById("certificateModal").style.display = "none";
};

function openModal(certSrc) {
    const modal = document.getElementById("certificateModal");
    const modalContent = document.getElementById("modalContent");

    if (certSrc.endsWith(".pdf")) {
        modalContent.innerHTML = `<embed src="${certSrc}" type="application/pdf" class="modal-preview">`;
    } else {
        modalContent.innerHTML = `<img src="${certSrc}" class="modal-preview">`;
    }

    modal.style.display = "flex";
    modal.classList.add("fade-in"); 
}

function closeModal() {
    const modal = document.getElementById("certificateModal");
    modal.classList.add("fade-out"); 

    setTimeout(() => {
        modal.style.display = "none";
        modal.classList.remove("fade-out");
    }, 300); 
}

document.getElementById("modalContent").addEventListener("click", function (event) {
    event.stopPropagation();
});


function downloadCertificate(event, certSrc) {
    event.stopPropagation(); 

    const link = document.createElement("a");
    link.href = certSrc;
    link.download = certSrc.split('/').pop(); 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
