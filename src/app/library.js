// Spoileur
async function toggleSpoiler(id) {
    let spoiler = await document.getElementById(id) // ← trouve le spoileur
    let classes = await spoiler.classList // ← classes
    if (classes == "spoiler"){ // ← si le spoileur n'est pas cliqué
        spoiler.classList.add("clicked"); // ← ajout de la classe "clicked"
        console.log(`the spoiler ${id} was clicked`)// ← log l'action
    }
}

//modal
const modalSection = document.getElementById("sModal")
const modalTitle = document.getElementById("modalTitle")
const modalContent = document.getElementById("modalContent")
function toggleModal(lang, content){
    if (content == null){
        modalSection.classList.remove("active")
        modalTitle.innerHTML = "modalContentList[content][lang].title"
        modalContent.innerHTML = "modalContentList[content][lang].content"
    }else{
        modalTitle.innerHTML = modalContentList[content][lang].title
        modalContent.innerHTML = modalContentList[content][lang].content
        if (content == 3 && theme == 1) {
            const sw = document.getElementById("sw1")
            sw.classList.add("on")
        }
        if (menu.classList.contains("active")) {
        menu.classList.remove("active")
        menuIcon.classList.remove("active")
        }
        modalSection.classList.add("active")
    }
}

//Phone menu
let menuIcon = document.getElementById("menuIcon")
let menu = document.getElementById("header")
function toggleMenu(){
    if (menu.classList.contains("active")){
        menu.classList.remove("active")
        menuIcon.classList.remove("active")
    }else{
        menu.classList.add("active")
        menuIcon.classList.add("active")
    }
}

//switch
let theme = 0
function switchTheme(id){ /*   THEME        THEME       THEME   */
    let switchElement = document.getElementById(id)
    if (switchElement.classList.contains("on")||theme == 1){
        switchElement.classList.remove("on")
        switchElement.dataset == 0
        theme = 0
        document.documentElement.style.setProperty('--BackColor1','#1e2340')
        document.documentElement.style.setProperty('--BackColor2','#5e5ba6')
        document.documentElement.style.setProperty('--TextColor1','#FFFFFF')
        document.documentElement.style.setProperty('--TextColor2','#b4baff')
        document.documentElement.style.setProperty('--phoneHeaderBack','#00000080')
    }else{
        switchElement.classList.add("on")
        switchElement.dataset == 1
        theme = 1
        document.documentElement.style.setProperty('--BackColor1','#FFFFFF')
        document.documentElement.style.setProperty('--BackColor2','#b4baff')
        document.documentElement.style.setProperty('--TextColor1','#1e2340')
        document.documentElement.style.setProperty('--TextColor2','#5e5ba6')
        document.documentElement.style.setProperty('--phoneHeaderBack','#ffffff80')
    }
}

function remember(lang){
    let theme_
    if(document.getElementById("sw1").classList.contains("on")){theme_ = 1}else{theme_ = 0}
    document.cookie = `lang=${lang}/theme=${theme_}`
    localStorage.setItem("lang",lang)
    localStorage.setItem("theme",theme_)
    toggleModal(lang, null)
}