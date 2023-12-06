function openLightbox(imagePath) {
    var lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.innerHTML = '<img src="' + imagePath + '" alt="Car Image"><span class="close" onclick="closeLightbox()">&times;</span>';
    document.body.appendChild(lightbox);
}

function closeLightbox() {
    var lightbox = document.querySelector(".lightbox");
    if (lightbox) {
        lightbox.remove();
    }
}

