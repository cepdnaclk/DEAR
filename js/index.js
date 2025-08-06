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
    
    
// function showdown(val) {
    
//     const btn = document.getElementById(val)

//     if (btn.classList.contains("hidden")) {
//         closeShowDown();
//         btn.classList.remove("hidden")
//     }else{
//         btn.classList.add("hidden");
//     }
// }

// function closeShowDown() {
//     const areas = document.querySelectorAll(".area-content");

//     areas.forEach((area) => {
//         area.classList.add("hidden");
//     });
// }

// image slider fuctionality
// let sliderImages = [
//     '../assets/images/imageSlider/1.JPG',
//     '../assets/images/imageSlider/2.JPG',
//     '../assets/images/imageSlider/3.JPG',
// ]

// const image = document.getElementById('image')
// let current = 0;

// function fade(){
    
//     const thumbnails = document.querySelectorAll('.dot');
//     thumbnails.forEach((thumb) => {
//         thumb.classList.remove("active")
//     });
    
//     thumbnails[current].classList.add("active"); 
// }

// function selectImage(index) {
//     current = index-1;
//     image.src = sliderImages[index-1];
//     fade();

// }

// function previousImage() {
//     current = Math.abs(current -1)%sliderImages.length
//     image.src = sliderImages[current];
//     fade();
// }
// function nextImage() {
//     current = Math.abs(current +1)%sliderImages.length
//     image.src = sliderImages[current];
//     fade();
// }

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activee", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " activee";
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("activee");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

document.getElementById("year").textContent = new Date().getFullYear();
    