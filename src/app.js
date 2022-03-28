
var interval = setInterval(function() {
    if(document.readyState === 'complete') {
        alert("website under development")
        clearInterval(interval);
        var loader = document.querySelector(".loader")
        loader.classList.add("load")
    }    
}, 100);


function menuToggle(){  // TOGGLE MENU          TOGGLE MENU         TOGGLE MENU
    var nav = document.getElementById("nav")
    nav.classList.toggle("active")
    var toggle = document.getElementById("toggle")
    toggle.classList.toggle("active")
}


// Modal JSON DATA

//...
let modalJSONdata
// fetch du json  //  modalJson = résultat du fetch
fetch("https://raw.githubusercontent.com/Robin888b/robin888b.github.io/main/src/modalContent.json").then(ress => ress.json()).then(data => {modalJSONdata = data})
//...
function toggleModal(type){
    var mondalContainer = document.querySelector(".modal-container")
    var modalContent = document.getElementById("modal-content")
    var modalTitle = document.getElementById("modal-title")
    modalTitle.textContent = modalJSONdata.title[type]
    modalContent.innerHTML = modalJSONdata.content[type]    
    mondalContainer.classList.add("active")
    console.log(`Show modal ${type}`)
}

/*/ Type de modal :

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


// Spoileur
function toggleSpoiler(id) {
    let spoiler = document.getElementById(id) // ← trouve le spoileur
    let classes = spoiler.classList // ← classes du spoileur
    if (classes == "spoiler"){ // ← si le spoileur n'est pas cliqué
        spoiler.classList.add("clicked"); // ← ajout de la classe "clicked"
        console.log(`the spoiler ${id} was clicked`)// ← log l'action
    }
}



// Compteur de jours

// définition des variables
let textYo = document.getElementById("year-old")// fonctionne que sur la page En
let textage = document.getElementById("age")// fonctionne que sur la page Fr
let now = new Date()
const dayOffsetInMinutes = now.getTimezoneOffset()
const SpecialDay = new Date("2022/11/04")
const OneDayMs = 1000 * 60 * 60 * 24
const OneHourMs = 1000 * 60 * 60
const OneMinuteMs = 1000 * 60

// fonction de compte
const getCountDown = () => {
    let now = Date.now();
    let remainingTime = SpecialDay - now + dayOffsetInMinutes * OneMinuteMs + 13.5 * OneHourMs
    let nbDay = Math.floor(remainingTime / OneDayMs)
    let nbHoursWithoutDay = Math.floor((remainingTime - nbDay * OneDayMs) / OneHourMs)
    if (textYo){
        textYo.textContent = `I'm actualy 17Yo but i will be 18 in ${nbDay} day and ${nbHoursWithoutDay} hours.`
    } else { // ↑ Anglais     ↓ Français
        textage.textContent = `j'ai actuellement 17 ans mais j'en aurai 18 dans ${nbDay} jours et ${nbHoursWithoutDay} heures.`
    }
    // ↓ si le temp restant eest négatif; clear l'interval
    if (remainingTime < 0) { clearInterval(countDownInterval)}
}
// Lancement de la fonction de compte
let countDownInterval = setInterval(getCountDown, 600000)
getCountDown()


// ajout de l'event "input"
document.addEventListener('input', function (event) {
	if (event.target.id !== 'selectLanguage') return; // ← run seulement le bon menu
	console.log(event.target.value); // ← affiche la valeur dans les logs     ↓ redirige vers la bonne page
    if (event.target.value == "French"){window.open("./about-me/fr.html", '_self'); event.target.value = ""}
}, false);