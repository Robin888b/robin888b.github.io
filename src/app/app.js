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




const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let urp = urlParams.get('lang');

if (urp == "fr" || urp == "no") {// if URL parameters
    changeLang(urp)
} else if (urp == "en"){// if english change link href to add "?lang=en"
    if (document.getElementById("liLinks").href != null){ document.getElementById("liLinks").href += "?lang=en"}
    else{ document.getElementById("liHome").href += "?lang=en"}
}else {// if no valid URL parameters
    l = navigator.language.split("-")[0]
    if ((l == "fr" || l == "no" )&& window.location.search == "") {
        window.location.search = `lang=${l}`
    }
}


function changeLang(urp){
    document.getElementById("liHome").textContent = lang[urp]["header"][0]//  Header Link 0
    document.getElementById("liLinks").textContent = lang[urp]["header"][1]// Header Link 1
    document.getElementById("liGal").textContent = lang[urp]["header"][2]//   Header Link 2
    document.getElementById("langSelect").value = urp// select.value
    if (document.querySelectorAll(".contentText").length > 0) {
        document.querySelector(".contentText").innerHTML = lang[urp]["presentation"]//Presentation
        document.getElementById("liLinks").href+= `?lang=${urp}`
        // new spoilers have no eventListeners
        document.querySelectorAll(".spoiler").forEach(function(e){e.addEventListener("click", ()=> {e.classList.add("clicked")})})
    }else{
        let i = 0
        document.getElementById("liHome").href+= `?lang=${urp}`
        for (let link of document.querySelectorAll(".linkli")){// chage socials media links description
            link.children[0].children[1].children[1].innerHTML = lang[urp]["links"][i]
            if (link.href != null){link.href += `lang=${urp}`}
            i++
        }
    }
}

document.getElementById("langSelect").addEventListener("change",(e) => {
    window.location.search = `lang=${document.getElementById("langSelect").value}`
})