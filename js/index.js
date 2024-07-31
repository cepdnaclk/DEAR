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

    if (btn.style.display === "none") {
        closeShowDown();
        btn.style.display = "block";
    }else{
        btn.style.display = "none"
    }
}

function closeShowDown() {
    const areas = document.querySelectorAll(".area-content");

    areas.forEach((area) => {
        area.style.display = "none";
    });
}

// image slider fuctionality
let sliderImages = [
    'https://cdna.artstation.com/p/assets/images/images/029/996/332/large/emilio-r-camarena-emkun-paisaje3.jpg?1599263064',
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ff5db77d-8078-4e30-b33b-1af4bd776e89/decomno-187d4a21-f2d1-4b57-ae66-8040cd23b01e.png/v1/fill/w_1192,h_670,q_70,strp/speedpainting___random_landscape_by_waltjan_decomno-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZmY1ZGI3N2QtODA3OC00ZTMwLWIzM2ItMWFmNGJkNzc2ZTg5XC9kZWNvbW5vLTE4N2Q0YTIxLWYyZDEtNGI1Ny1hZTY2LTgwNDBjZDIzYjAxZS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.vZKoyTD7urPQBHiteKm6nZ40PpDf5LMYrnvLiNg8J8U",
    "https://external-preview.redd.it/LFBF4F-CO-8tTDo7DeEnB51FiknK_ZoelMoNCkqwyA4.png?auto=webp&s=ebeb411f4ad89cf333372bd91b85e90bec14d422"
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
    