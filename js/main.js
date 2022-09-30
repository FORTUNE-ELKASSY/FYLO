const nav = document.querySelector(".nav-links")
const menuOpen = document.querySelector(".ri-menu-fill")
const menuClose = document.querySelector(".ri-close-fill")
const navLinks = document.querySelectorAll('.nav-links a')

function navOpen(){
    nav.style.top = "24%"
    menuOpen.style.display = "none"
    menuClose.style.display = "block"
}

function navClose(){
    nav.style.top = "-24%"
    menuOpen.style.display = "block"
    menuClose.style.display = "none"
}

navLinks.forEach(navLink => {
    navLink.addEventListener("click", function(){
        nav.style.top = "-24%"
        menuOpen.style.display = "block"
        menuClose.style.display = "none"
    })
})