let homeScore =document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homePoint = 0
let guestPoint = 0


function home1(){
    homePoint += 1
    homeScore.textContent = homePoint
}

function home2(){
    homePoint += 2
    homeScore.textContent = homePoint
}

function home3(){
    homePoint += 3
    homeScore.textContent = homePoint
}

function guest1(){
    guestPoint += 1
    guestScore.textContent = guestPoint
}

function guest2(){
    guestPoint += 2
    guestScore.textContent = guestPoint
}


function guest3(){
    guestPoint += 3
    guestScore.textContent = guestPoint
}