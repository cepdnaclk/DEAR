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
    if (btn.style.display === "" || btn.style.display === "none") {
        btn.style.display = "block"
    }else{
        btn.style.display = "none"
    }
}
    