let flag=0;
function nav(){
    if (flag===0) {
        document.getElementById('side-nav').style.width = "50%"
        flag = 1
    }else{
        document.getElementById('side-nav').style.width = "0"
        flag = 0
    }
}

function goTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'});
    }
    
    const scrollToTopBtn = document.getElementById("go-top");
    window.onscroll = () => {
        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    };
    
    
function showdown(val) {
    
    const btn = document.getElementById(val)

    if (btn.classList.contains("hidden")) {
        closeShowDown();
        btn.classList.remove("hidden")
    }else{
        btn.classList.add("hidden");
    }
}

function closeShowDown() {
    const areas = document.querySelectorAll(".area-content");

    areas.forEach((area) => {
        area.classList.add("hidden");
    });
}

// image slider fuctionality
let sliderImages = [
    '../assets/images/imageSlider/1.JPG',
    '../assets/images/imageSlider/2.JPG',
    '../assets/images/imageSlider/3.JPG',
]

const image = document.getElementById('image')
let current = 0;

function fade(){
    
    const thumbnails = document.querySelectorAll('.dot');
    thumbnails.forEach((thumb) => {
        thumb.classList.remove("active")
    });
    
    thumbnails[current].classList.add("active"); 
}

function selectImage(index) {
    current = index-1;
    image.src = sliderImages[index-1];
    fade();

}

function previousImage() {
    current = Math.abs(current -1)%sliderImages.length
    image.src = sliderImages[current];
    fade();
}
function nextImage() {
    current = Math.abs(current +1)%sliderImages.length
    image.src = sliderImages[current];
    fade();
}
    