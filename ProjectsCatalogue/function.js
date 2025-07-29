document.addEventListener("DOMContentLoaded", function () {
    
    const images = document.querySelectorAll(".work-images img");
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    document.body.appendChild(lightbox);
    
    const lightboxImage = document.createElement("img");
    lightbox.appendChild(lightboxImage);
    
    const prevButton = document.createElement("button");
    prevButton.classList.add("prev");
    prevButton.innerHTML = "&#10094;";
    lightbox.appendChild(prevButton);
    
    const nextButton = document.createElement("button");
    nextButton.classList.add("next");
    nextButton.innerHTML = "&#10095;";
    lightbox.appendChild(nextButton);
    
    let currentIndex = 0;
    let imageArray = [];
    
    images.forEach((img, index) => {
        img.addEventListener("click", function () {
            imageArray = Array.from(this.parentElement.children).filter(el => el.tagName === "IMG");
            currentIndex = imageArray.indexOf(this);
            lightboxImage.src = this.src;
            lightbox.classList.add("show");
        });
    });
    
    prevButton.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            lightboxImage.src = imageArray[currentIndex].src;
        }
    });
    
    nextButton.addEventListener("click", function () {
        if (currentIndex < imageArray.length - 1) {
            currentIndex++;
            lightboxImage.src = imageArray[currentIndex].src;
        }
    });
    
    lightbox.addEventListener("click", function (e) {
        if (e.target !== lightboxImage && e.target !== prevButton && e.target !== nextButton) {
            lightbox.classList.remove("show");
        }
    });
});
