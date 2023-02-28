const images = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp" ];

const slider = document.querySelector(".slider");

for (let i = 0; i < images.length; i++) {

    const imageContainer =  

    `<div class="image_container">
        <img class=image src="${images[i]}"/>
    </div>`;

    slider.innerHTML += imageContainer;
}

const   imageContainerArray = document.getElementsByClassName("image_container");

let currentImage = 0;

imageContainerArray[currentImage].classList.add("d-block");

const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

next.addEventListener("click", function() {

    if (currentImage < images.length - 1) {
            imageContainerArray[currentImage].classList.remove("d-block");
            currentImage++;
            imageContainerArray[currentImage].classList.add("d-block");
        }
    }
);

prev.addEventListener("click", function() {

    if (currentImage > 0) {
            imageContainerArray[currentImage].classList.remove("d-block");
            currentImage--;
            imageContainerArray[currentImage].classList.add("d-block");
        }
    }
);

