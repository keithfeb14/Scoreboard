// put the <p> tag into a variable 
// .textContent
// 6 functions needed? but they have to add onto the score that is already there. Because the text content that is being updated is for different scores. 
// let count = 0 and i think it updates when each funtion is run. 

let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let count = 0 
let count2 = 0


//Home team score

function home1Point() {
    count += 1
    homeScore.textContent = count
}

function home2Point() {
    count += 2
    homeScore.textContent = count
}

function home3Point() {
    count += 3
    homeScore.textContent = count
}

//Guest team score

function guest1Point() {
    count2 += 1 
    guestScore.textContent = count2
    
}

function guest2Point() {
    count2 += 2 
    guestScore.textContent = count2
    
}

function guest3Point() {
    count2 += 3
    guestScore.textContent = count2
    
}

//Reset button

function reset() {
    count = 0
    count2 = 0 
    homeScore.textContent = count
    guestScore.textContent = count2
}