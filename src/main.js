const modal = document.getElementById("modal");
const modalBtns = document.querySelectorAll(".modal-click");
const modalContent = document.getElementById("modal-container");
const modalClose = document.getElementById("modal-close");
let currentVideo;

modalBtns.forEach(function(modalBtn) {
    modalBtn.addEventListener("click", function(event) {
        event.stopPropagation();
        const dataType = this.getAttribute("data-type");
        const dataUrl = this.getAttribute("data-url");

        if (dataType === "image") {
            modalContent.innerHTML = `<img src="${dataUrl}" alt="Modal Image">`;
        } else if (dataType === "video") {
            modalContent.innerHTML = `<video controls autoplay><source src="${dataUrl}" type="video/mp4"></video>`;
            currentVideo = modalContent.querySelector("video");
        }
        modal.classList.add("active");
        document.body.style.overflow = "hidden";
    });
});

modalClose.addEventListener("click", function() {
    closeModal();
    document.body.style.overflow = "scroll";
});

document.body.addEventListener("click", function(event) {
    if (!modalContent.contains(event.target) && modal.classList.contains("active")) {
        closeModal();
        document.body.style.overflow = "scroll";
    }
});

function closeModal() {
    modal.classList.remove("active");
    if (currentVideo) {
        currentVideo.pause();
    }
}