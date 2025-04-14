document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const images = document.querySelectorAll(".galeria-img");
    const close = document.querySelector(".close");

    images.forEach(image => {
        image.addEventListener("click", () => {
            lightbox.style.display = "flex";
            lightboxImg.src = image.src;
        });
    });

    close.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target !== lightboxImg) {
            lightbox.style.display = "none";
        }
    });
});