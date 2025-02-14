// Spoiler
document.querySelectorAll(".spoiler").forEach(function(e){e.addEventListener("click", ()=> {e.classList.add("clicked")})})

// Mobile menu
let toggle = false
let menu = document.getElementById("headLinkList")
document.getElementById("menuToggle").addEventListener("click", e=>{

    if (toggle) {
        menu.classList.remove("active")
        toggle = false
    } else {
        menu.classList.add("active")
        toggle = true
    }
})




