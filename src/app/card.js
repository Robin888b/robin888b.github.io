const cardHover = document.getElementById("cardHover")
const card = document.getElementById("card")
const gradient = document.getElementById("gradient")
const sparkles = document.getElementById("sparkles")

cardHover.addEventListener('mousemove', event => {mouseMove(event)})
cardHover.addEventListener("touchmove", event => {mouseMove(event)})

function mouseMove(event){
    var pos = [event.offsetX, event.offsetY];
    if ( event.type === "touchmove" ) {
        pos = [ event.touches[0].clientX, event.touches[0].clientY ];
    }

    let h =  card.clientHeight
    let w =  card.clientWidth

    let x = pos[0]
    let y = pos[1]

    var px = Math.abs(Math.floor(100 / w * x)-100);
    var py = Math.abs(Math.floor(100 / h * y)-100);

    // gradient pos
    var lp = (50+(px - 50)/1.5);
    var tp = (50+(py - 50)/1.5);
    gradient.style.backgroundPosition = `${lp}% ${tp}%`

    // transform rotate
    var ty = ((tp - 50)/2) * -1;
    var tx = ((lp - 50)/1.5) * .5;
    card.style.transform = `rotateX(${ty}deg) rotateY(${tx}deg)`
}

cardHover.addEventListener("mouseleave", e => {setTimeout(mouseOut, 750)})
cardHover.addEventListener("touchend", e => {setTimeout(mouseOut, 750)})
cardHover.addEventListener("touchcancel", e => {setTimeout(mouseOut, 750)})

function mouseOut(){
    card.style.transform = `rotateX(0deg) rotateY(0deg)`
    gradient.style.backgroundPosition = `50% 50%`
}