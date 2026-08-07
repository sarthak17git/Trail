const galleryImages = document.querySelectorAll(".work-item img");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");

const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

galleryImages.forEach((img,index)=>{

    img.addEventListener("click",()=>{

        currentIndex=index;

        showImage();

        lightbox.style.display="flex";

    });

});

function showImage(){

    lightboxImg.src=galleryImages[currentIndex].src;

}

closeBtn.addEventListener("click",()=>{

    lightbox.style.display="none";

});

nextBtn.addEventListener("click",()=>{

    currentIndex++;

    if(currentIndex>=galleryImages.length){

        currentIndex=0;

    }

    showImage();

});

prevBtn.addEventListener("click",()=>{

    currentIndex--;

    if(currentIndex<0){

        currentIndex=galleryImages.length-1;

    }

    showImage();

});

window.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.style.display="none";

    }

});

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        lightbox.style.display="none";

    }

});