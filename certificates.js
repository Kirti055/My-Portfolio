// Ensure modal is hidden on page load
window.onload = function () {
    document.getElementById("certificateModal").style.display = "none";
};

// Open Modal with Certificate Preview (PDF or Image)
function openModal(certSrc) {
    const modal = document.getElementById("certificateModal");
    const modalContent = document.getElementById("modalContent");

    // Check if it's a PDF or an image
    if (certSrc.endsWith(".pdf")) {
        modalContent.innerHTML = `<embed src="${certSrc}" type="application/pdf" class="modal-preview">`;
    } else {
        modalContent.innerHTML = `<img src="${certSrc}" class="modal-preview">`;
    }

    modal.style.display = "flex";
}

// Close Modal
function closeModal() {
    document.getElementById("certificateModal").style.display = "none";
}

// Prevent Click from Closing Modal
document.getElementById("modalContent").addEventListener("click", function (event) {
    event.stopPropagation();
});
