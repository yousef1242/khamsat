let product = document.querySelector(".products")
let comunity = document.querySelector(".comunity")
let khamsat = document.querySelector(".khamsat")
let hid = document.querySelector(".hid")
let hid2 = document.querySelector(".hid2")
let hid3 = document.querySelector(".hid3")
let rotate1 = document.getElementById("rotate1")
let rotate2 = document.getElementById("rotate2")
let rotate3 = document.getElementById("rotate3")
let nav2 = document.querySelector(".nav2")
let overlay = document.querySelector(".over-lay")
let fabars = document.querySelector(".fa-bars")

product.onclick = function(){
    hid.classList.toggle("none")
    rotate1.classList.toggle("rotate")
}
comunity.onclick = function(){
    hid2.classList.toggle("none")
    rotate2.classList.toggle("rotate")
}
khamsat.onclick = function(){
    hid3.classList.toggle("none")
    rotate3.classList.toggle("rotate")
}

fabars.onclick = function(){
    nav2.classList.toggle("open")
    overlay.classList.toggle("opa")
}

