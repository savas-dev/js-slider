

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const imageContainer = document.querySelector('.imageContainer');
const allImages = document.querySelectorAll('img');
let timeOut;

let currentImage = 1;


prev.addEventListener('click', e=>{
    currentImage--;
    clearTimeout(timeOut);
    UpdateImage();
});

next.addEventListener('click', e=>{
    currentImage++;
    clearTimeout(timeOut);
    UpdateImage();
});



function UpdateImage() {
    if(currentImage > allImages.length){
        currentImage = 1;
    }else if(currentImage < 1){
        currentImage = allImages.length;
    }
    imageContainer.style.transform = `translateX(-${(currentImage -1) * 700}px)`;
    
    
    timeOut = setTimeout(() =>{
        currentImage++;
        UpdateImage();
    }, 4000)
}

UpdateImage();