
// Tag list
let tagList = [
    "photo", //9
    "illustration",//1
    "video",//2
    "furry",//3
    "notFurry",//4
    "convention",//5
    "furMeet",//6
    "2022",//7
    "2023"//8
]
let langage =0
let activeTag = [-1]
function toggleTag(tag) {
    if (tag != -1) {
        if (activeTag.find(el => el === -1)) {
            activeTag.splice(activeTag.indexOf(-1), 1)
            document.getElementById(`itemTag-1`).classList.remove("selectedTag")
        }
    }
    if (activeTag.find(el => el === tag)) {
        activeTag.splice(activeTag.indexOf(tag), 1)
        document.getElementById(`itemTag${tag}`).classList.remove("selectedTag")
    }else{
        activeTag.push(tag)
        document.getElementById(`itemTag${tag}`).classList.add("selectedTag")
    }
    if (activeTag[0] == null){
        activeTag.push(-1)
        document.getElementById(`itemTag-1`).classList.add("selectedTag")
    }
    if (activeTag.find(el => el === -1)){
        console.log("search for all tags")
        let itemList = ""
        galleryContent.forEach(item => {
            if (item.src != null && item.id != null){
                itemList += `<button class="btnNoStyle galleryItem" onclick="showDetail('${item.id}')"><img loading="lazy" class="galleryItem" src="${item.src}" alt="${item.title}" style="background-image: url('${item.srcBlur}'); min-width: ${item.size.width * 250 / item.size.height}px;"></button>`
            }
        })
        if (itemList == ""){ itemList = pageTranslation[1][langage].nothingFind}
        document.getElementById("gallery").innerHTML = itemList
    }else{
        console.log(`search for the folowing tags : ${activeTag}`)
        let itemList = ""
        galleryContent.forEach(item => {
            let containTag = false
            item.tags.forEach(tag => {
                if (activeTag.find(el => el === tag)){containTag = true}
            })
            if (containTag == true){
                itemList += `<button class="btnNoStyle galleryItem" onclick="showDetail('${item.id}')"><img loading="lazy" class="galleryItem" src="${item.src}" alt="${item.title}" style="background-image: url('${item.srcBlur}'); min-width: ${item.size.width * 250 / item.size.height}px;"></button>`
            console.log("2")
            }
        })
        if (itemList == ""){ itemList = pageTranslation[1][langage].nothingFind}
        document.getElementById("gallery").innerHTML = itemList
    }
}

function showDetail(id){
    let itemDetail
    galleryContent.forEach(el => {if (el.id == id){itemDetail = el;}})

    if(itemDetail.link){ modalTitle.innerHTML = `<a href="${itemDetail.link}">${itemDetail.title}</a>`
    }else{modalTitle.innerHTML = itemDetail.title}

    let itemType = itemDetail.src.split(".")
    itemType = itemType[itemType.length - 1]
    let desc = itemDetail.description

    if (itemDetail.isVideo == false){
        modalContent.innerHTML = `${desc}  <img id="DetailImg" src="${itemDetail.src}" alt="${itemDetail.title}">`
    } else {
        modalContent.innerHTML = `${desc}  <iframe id="DetailImg" style="min-width: 40vw;min-height: 22.5vw;" frameborder="0" src="${itemDetail.link.replace("watch?v=", "embed/")}"allowfullscreen></iframe>`
    }
    document.querySelector("[data-overlay]").classList.add("active");
        document.querySelector("[data-modal]").classList.add("active");
        document.querySelector("[data-modal]").showModal()
}


function load(){
    if(localStorage.getItem("lang") != null || localStorage.getItem("theme") != null){
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
            document.getElementById("headerList").innerHTML = pageTranslation[1][lang_].menuText
            langage = lang_
        }
    }else {
        try {
            var userLang = navigator.language || navigator.userLanguage;
            if(userLang.includes("fr")){
                document.getElementById("headerList").innerHTML = pageTranslation[1][1].menuText
            }else if (userLang.includes("es")){
                document.getElementById("headerList").innerHTML = pageTranslation[1][2].menuText
            }

        } catch (error) {
            console.error(error)
        }
    }
    let itemList = ""
    galleryContent.forEach(item => {if (item.src != null && item.id != null){
            itemList += `<button class="btnNoStyle galleryItem" onclick="showDetail('${item.id}')"><img loading="lazy" class="galleryItem" src="${item.src}" alt="${item.title}" style="background-image: url('${item.srcBlur}'); min-width: ${item.size.width * 250 / item.size.height}px;"></button>`
        }})
    document.getElementById("gallery").innerHTML = itemList
}
load()
async function switchLang(lang){/*    LANG        LANG        LANG    */
    if (lang == 3){alert("Wir haben die Seite noch nicht ins Deutsche übersetzt")} else {
        document.getElementById("headerList").innerHTML = await pageTranslation[1][lang].menuText
        toggleModal(lang, 3)
        langage = lang
    }
}
