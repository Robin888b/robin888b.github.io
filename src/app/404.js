const canvas = document.getElementById("backgroundCanvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth
canvas.height = window.innerHeight

let particlesArray;
let mouse = {
    x: -5000,
    y: -5000,
    radius: (canvas.height/100)*(canvas.width/100)
}
window.addEventListener("mousemove", (event) => {mouse.x = event.x; mouse.y = event.y})

window.addEventListener("resize", init)

class Particle {
    constructor(x, y, directionX, directionY, size, color) {
        this.x = x
        this.y = y
        this.directionX = directionX
        this.directionY = directionY
        this.size = size
        this.color = color
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI*2, false);
        ctx.fillStyle = "#FFF"
        ctx.fill()
    }
    update(){
        if (this.x > canvas.width || this.x < 0){
            this.directionX = -this.directionX
        }
        if (this.y > canvas.height || this.y < 0){
            this.directionY = -this.directionY
        }

        let dX = mouse.x - this.x
        let dY = mouse.y - this.y
        let distance = Math.sqrt(dX*dX + dY*dY)
        if (distance < mouse.radius + this.size){
            if (mouse.x < this.x && this.x < canvas.width - this.size * 10){
                this.x += 10
            }
            if (mouse.x > this.x && this.x > this.size * 10){
                this.x -= 10
            }
            if (mouse.y < this.y && this.y < canvas.height - this.size * 10){
                this.y += 10
            }
            if (mouse.y > this.y && this.y > this.size * 10){
                this.y -= 10
            }

            
        }
        this.x += this.directionX
        this.y += this.directionY
        this.draw()
    }
}

function init(){
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    particlesArray = []
    let particlesNumber = Math.floor((canvas.height*canvas.width)/ 8000)
    for (let i = 0; i < particlesNumber; i++){
        let size = (Math.random()*8) + 1
        let x = (Math.random() * ((innerWidth - size * 2)- (size*2))+ size*2);
        let y = (Math.random() * ((innerHeight - size * 2)- (size*2))+ size*2);
        let dirrectionX = (Math.random()*5) - 2.5
        let dirrectionY = (Math.random()*5) - 2.5
        let color = "#FFF"
        particlesArray.push(new Particle(x, y, dirrectionX, dirrectionY, size, color))
    }
    console.log(`particles : ${particlesNumber}`)
}

function animate(){
    requestAnimationFrame(animate)
    ctx.clearRect(0,0,innerWidth, innerHeight)
    for (let i = 0; i < particlesArray.length; i++){
        particlesArray[i].update()
    }
    connect()
}


function connect(){
    for (let a = 0; a < particlesArray.length; a++){
        for (let b = 0; b < particlesArray.length; b++){
            let distance = ((particlesArray[a].x - particlesArray[b].x)*(particlesArray[a].x - particlesArray[b].x))+((particlesArray[a].y - particlesArray[b].y)*(particlesArray[a].y - particlesArray[b].y))

            if (distance < (canvas.width/7)* (canvas.height/7)){
                ctx.strokeStyle = "#FFF"
                ctx.lineWidth = 1.5
                ctx.beginPath()
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
                ctx.stroke()
            }
        }
    }
}

init()
animate()