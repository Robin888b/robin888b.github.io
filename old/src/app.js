let translations = websiteTranslations.aboutMeContent
// fetch du json  //  modalJson = résultat du fetch


console.log(websiteTranslations)

alert(`OUTDATED WEBSITE\nRebuild coming soon ^w^`)

function SetLanguage(lang) {
    var content = document.querySelector(".content")
    var nav = document.querySelector(".nav")
    let trans = translations.pageContent[lang]
    content.innerHTML = trans.content
    nav.innerHTML = trans.nav
    getCountDown()
}

var interval = setInterval(function() {
    if(document.readyState === 'complete') {
        clearInterval(interval);
        SetLanguage("english");
        getCountDown()
        var loader = document.querySelector(".loader")
        loader.classList.add("load")
    }    
}, 100);

// Compteur de jours

// définition des variables
let now = new Date()
const dayOffsetInMinutes = now.getTimezoneOffset()
const SpecialDay = new Date("2022/11/04")
const OneDayMs = 1000 * 60 * 60 * 24
const OneHourMs = 1000 * 60 * 60
const OneMinuteMs = 1000 * 60

// fonction de compte
function getCountDown() {
    let textYo = document.getElementById("year-old")// fonctionne que sur la page En
    let textage = document.getElementById("age")// fonctionne que sur la page Fr
    let años = document.getElementById("años")// fonctionne que sur la page espa.
    let now = Date.now();
    let remainingTime = SpecialDay - now + dayOffsetInMinutes * OneMinuteMs + 13.5 * OneHourMs
    if (remainingTime > 0){ // si il reste du temps avant mes 18 ans

        let nbDay = Math.floor(remainingTime / OneDayMs)
        let nbHoursWithoutDay = Math.floor((remainingTime - nbDay * OneDayMs) / OneHourMs)

        if (textYo){
            textYo.textContent = `I'm actualy 17Yo but i will be 18 in ${nbDay} day and ${nbHoursWithoutDay} hours.`
        } else if (textage)
        { // ↑ Anglais     ↓ Français
            textage.textContent = `j'ai actuellement 17 ans mais j'en aurai 18 dans ${nbDay} jours et ${nbHoursWithoutDay} heures.`
        } else {
            años.textContent = `Actualmente tengo 17 años, pero cumpliré 18 en ${nbDay} días y ${nbHoursWithoutDay} horas.`
        }

    } else { // si j'ai 18 ans

        let nbDay = Math.floor((remainingTime *-1) / OneDayMs)
        let nbHoursWithoutDay = Math.floor(((remainingTime*-1) - nbDay * OneDayMs) / OneHourMs)
        
        if (textYo){
            textYo.textContent = `I'm 18Yo.`
        } else if (textage)
        { // ↑ Anglais     ↓ Français
            textage.textContent = `j'ai 18 ans.`
        } else {// ↓ espagnol
            años.textContent = `Actualmente tengo 18 años.`
        }
    }
}
// Lancement de la fonction de compte
let countDownInterval = setInterval(getCountDown, 600000)
getCountDown()

function menuToggle(){  // TOGGLE MENU          TOGGLE MENU         TOGGLE MENU
    var nav = document.getElementById("nav")
    nav.classList.toggle("active")
    var toggle = document.getElementById("toggle")
    toggle.classList.toggle("active")
}


//...
function toggleModal(type){
    var mondalContainer = document.querySelector(".modal-container")
    var modalContent = document.getElementById("modal-content")
    var modalTitle = document.getElementById("modal-title")
    modalTitle.textContent = translations.modalComtent.title[type]
    modalContent.innerHTML = translations.modalComtent.content[type]    
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
 - : -------------------
 6 : Discord -> espa
 7 : Gay Def -> espa
 8 : Fur Def -> espa

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





// ajout de l'event "input"
document.addEventListener('input', function (event) {
	if (event.target.id !== 'selectLanguage') return; // ← run seulement le bon menu
	console.log(event.target.value); // ← affiche la valeur dans les logs     ↓ redirige vers la bonne page
    SetLanguage(event.target.value)
}, false);
