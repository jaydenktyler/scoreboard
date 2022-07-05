let homeScoreBtn1 = document.getElementById("home-score-btn-1")
let homeScoreEl = document.getElementById("home-score")
let homeScore = 0
let guestScoreBtn1 = document.getElementById("guest-score-btn-1")
let guestScoreEl = document.getElementById("guest-score")
let guestScore = 0

function add1home() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
    
}

function add2home() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
    
}

function add3home() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function add1guest() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function add2guest() {
    guestScore += 2
    guestScoreEl.textContent = guestScore

}

function add3guest() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

