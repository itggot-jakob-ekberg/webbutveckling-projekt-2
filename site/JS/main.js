function menu1(event){
    let hea = document.querySelector("header")
    hea.classList.toggle("activate")

    let lines = document.querySelector(".menulines")
    lines.classList.toggle("linedown")
    
    let hom = document.querySelector(".Menubox1")
    hom.classList.toggle("ho")

    let histor = document.querySelector(".Menubox2")
    histor.classList.toggle("hi")

    let abo = document.querySelector(".Menubox3")
    abo.classList.toggle("ab")

    let icon = document.querySelector("#menubutton")
    if(icon.innerHTML == "close"){
        icon.innerHTML = "menu"
    }else{
        icon.innerHTML = "close"
    }
}