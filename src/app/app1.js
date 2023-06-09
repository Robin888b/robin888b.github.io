// card => see card.js

function load(){
    if(localStorage.getItem("lang") != null || localStorage.getItem("theme") != null){
        let lang_ = localStorage.getItem("lang")
        let theme_ = localStorage.getItem("theme")
        let pageText = document.getElementById("text")
        if (theme_ == 0){
            theme = 0
            document.documentElement.style.setProperty('--BackColor1','#1e2340')
            document.documentElement.style.setProperty('--BackColor2','#5e5ba6')
            document.documentElement.style.setProperty('--TextColor1','#FFFFFF')
            document.documentElement.style.setProperty('--TextColor2','#b4baff')
            document.documentElement.style.setProperty('--phoneHeaderBack','#00000080')
        }else{
            theme = 1
            document.documentElement.style.setProperty('--BackColor1','#FFFFFF')
            document.documentElement.style.setProperty('--BackColor2','#b4baff')
            document.documentElement.style.setProperty('--TextColor1','#1e2340')
            document.documentElement.style.setProperty('--TextColor2','#5e5ba6')
            document.documentElement.style.setProperty('--phoneHeaderBack','#ffffff80')
        }
        if(lang_ != 0){
            let navText = document.getElementById("headerList")
            let discordLink = document.getElementById("discordLink")
            pageText.innerHTML = pageTranslation[0][lang_].pageText
            navText.innerHTML = pageTranslation[0][lang_].menuText
            discordLink.innerHTML = `<img onclick="toggleModal(${lang_},2)" src="./src/img/svg/discord.svg" alt="discord">`
        }
    } else {
        try {
            var userLang = navigator.language || navigator.userLanguage;
            if(userLang.includes("fr")){
                document.getElementById("text").innerHTML = pageTranslation[0][1].pageText
                document.getElementById("headerList").innerHTML = pageTranslation[0][1].menuText
                document.getElementById("discordLink").innerHTML = `<img onclick="toggleModal(${1},2)" src="./src/img/svg/discord.svg" alt="discord">`
                console.log("fr")
            }else if (userLang.includes("es")){
                document.getElementById("text").innerHTML = pageTranslation[0][2].pageText
                document.getElementById("headerList").innerHTML = pageTranslation[0][2].menuText
                document.getElementById("discordLink").innerHTML = `<img onclick="toggleModal(${2},2)" src="./src/img/svg/discord.svg" alt="discord">`
            }

        } catch (error) {
            console.error(error)
        }
    }
}
load()

async function switchLang(lang){/*    LANG        LANG        LANG    */
    if (lang == 3){alert("Wir haben die Seite noch nicht ins Deutsche übersetzt")}
    let pageText = document.getElementById("text")
    let navText = document.getElementById("headerList")
    let discordLink = document.getElementById("discordLink")
    pageText.innerHTML = await pageTranslation[0][lang].pageText
    navText.innerHTML = await pageTranslation[0][lang].menuText
    discordLink.innerHTML = `<img onclick="toggleModal(${lang},2)" src="./src/img/svg/discord.svg" alt="discord">`
    toggleModal(lang, 3)
}