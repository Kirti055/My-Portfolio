window.onload = function () {
    document.getElementById("certificateModal").style.display = "none";
};

function openModal(certSrc) {
    const modal = document.getElementById("certificateModal");
    const modalContent = document.getElementById("modalContent");

    modalContent.innerHTML = `
        <span class="close" onclick="closeModal()">&times;</span>
        ${certSrc.endsWith(".pdf") 
            ? `<embed src="${certSrc}" type="application/pdf" class="modal-pdf">`
            : `<img src="${certSrc}" class="modal-preview">`}
    `;

    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById("certificateModal").style.display = "none";
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
