let langage =0
async function switchLang(lang, e){
    if (lang == 3){alert("Wir haben die Seite noch nicht ins Deutsche übersetzt")}else{
        let socialList = await document.getElementById("socialList").children
        document.getElementById("headerList").innerHTML = pageTranslation[2][lang].menuText
        document.getElementById("title").innerHTML = pageTranslation[2][lang].title
        document.getElementById("pageDesc").innerHTML = pageTranslation[2][lang].desc
        for(let i = 0; i<socialList.length; i++){
            let social = await socialList[i]
            social.children[1].children[0].innerText = await pageTranslation[2][lang].social[i].title
            social.children[1].children[1].innerText = await pageTranslation[2][lang].social[i].desc
        }
        langage = lang
        if(!e){
            toggleModal(lang, 3)
        }
    }
}

document.getElementById("itemDiscord").addEventListener("click", ()=>{
    toggleModal(langage,2)
})

function load(){
    if(localStorage.length != 0){
        let lang_ = localStorage.getItem("lang")
        let theme_ = localStorage.getItem("theme")
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
            switchLang(lang_, "e")
        }
    }
}
load()