const homeDisplay = document.getElementById('homeDisplay')
const guestDisplay = document.getElementById('guestDisplay')

const home1 = document.getElementById('+1home')
const home2 = document.getElementById('+2home')
const home3 = document.getElementById('+3home')

const guest1 = document.getElementById('+1guest')
const guest2 = document.getElementById('+2guest')
const guest3 = document.getElementById('+3guest')

const newGame = document.getElementById('newGame')

let homeScore = 0
let guestScore = 0

home1.addEventListener('click', () =>{
    homeScore += 1
    homeDisplay.textContent = homeScore
})

home2.addEventListener('click', () =>{
    homeScore += 2
    homeDisplay.textContent = homeScore
})

home3.addEventListener('click', () =>{
    homeScore += 3
    homeDisplay.textContent = homeScore
})


guest1.addEventListener('click', () =>{
    guestScore += 1
    guestDisplay.textContent = guestScore
})

guest2.addEventListener('click', () =>{
    guestScore += 2
    guestDisplay.textContent = guestScore
})

guest3.addEventListener('click', () =>{
    guestScore += 3
    guestDisplay.textContent = guestScore
})


newGame.addEventListener('click', () =>{
    reset = homeScore = 0, guestScore = 0
    homeDisplay.textContent = reset
    guestDisplay.textContent = reset
})

function winner() {
    if (homeScore > guestScore) {
        homeDisplay.classList.add('winning')
        guestDisplay.classList.add('losing')
    }
}