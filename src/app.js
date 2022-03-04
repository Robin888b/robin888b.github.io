
function menuToggle(){
    var nav = document.getElementById("nav")
    nav.classList.toggle("active")
    var toggle = document.getElementById("toggle")
    toggle.classList.toggle("active")
}

fetch("./modalContent.json").then(res => 
    console.log(res.title[1])
)
function toggleModal(type){
    var mondalContainer = document.querySelector(".modal-container")
    var modalContent = document.getElementById("modal-content")
    var modalTitle = document.getElementById("modal-title")
    
    modalTitle.textContent = modaltextjson.title[type]

    modalContent.innerHTML = modaltextjson.content[type]
    
    mondalContainer.classList.add("active")
    console.log(`Show modal ${type}`)
}


/*/ modal type :

 0 : Discord -> anglais
 1 : Gay Def -> anglais
 2 : Fur Def -> anglais
 - : -------------------
 3 : Discord -> français
 4 : Gay Def -> français
 5 : Fur Def -> français

*/




function closeModal(){
    var mondalContainer = document.querySelector(".modal-container")
    mondalContainer.classList.remove("active")
    console.log(`hide modal`)
}



function toggleSpoiler(id) {
    let spoiler = document.getElementById(id)
    let classes = spoiler.classList
    if (classes == "spoiler"){
        spoiler.classList.add("clicked");
        console.log(`the spoiler ${id} was clicked`)
    }
}

let textYo = document.getElementById("year-old")
let textage = document.getElementById("age")
let now = new Date()
const dayOffsetInMinutes = now.getTimezoneOffset()
const SpecialDay = new Date("2022/11/04")

const OneDayMs = 1000 * 60 * 60 * 24
const OneHourMs = 1000 * 60 * 60
const OneMinuteMs = 1000 * 60

const getCountDown = () => {
    let now = Date.now();
    let remainingTime = SpecialDay - now + dayOffsetInMinutes * OneMinuteMs + 13.5 * OneHourMs
    let nbDay = Math.floor(remainingTime / OneDayMs)
    let nbHoursWithoutDay = Math.floor((remainingTime - nbDay * OneDayMs) / OneHourMs)
    if (textYo){
        textYo.textContent = `I'm actualy 17Yo but i will be 18 in ${nbDay} day and ${nbHoursWithoutDay} hours.`
    } else {
        textage.textContent = `j'ai actuellement 17 ans mais j'en aurai 18 dans ${nbDay} jours et ${nbHoursWithoutDay} heures.`
    }
    if (remainingTime > 0) { clearInterval(countDownInterval) }
}
let countDownInterval = setInterval(getCountDown, 600000)
getCountDown() // start