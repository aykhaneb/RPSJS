let rock = document.querySelector(".rock")
let paper = document.querySelector(".paper")
let scissors = document.querySelector(".scissors")
let images = document.querySelectorAll(".img1")
let rps = [rock, paper, scissors]
let res = document.querySelector(".res")
let oppimg = document.querySelector(".opp-img")
let countWin = 0
let countLose = 0


rock.onclick = function Rock() {
    let random = Math.floor(Math.random() * 3)
    let result = document.querySelector(".result")
    // scissors.classList.add("d-none")
    // paper.classList.add("d-none")

    if (rps[random] === rock) {
        oppimg.src = 'https://www.rpsgame.org/assets/img/rock.svg'
        result.innerHTML = "Draw"
    }
    else if (rps[random] === paper) {
        oppimg.src = 'https://www.rpsgame.org/assets/img/paper.svg'
        result.innerHTML = "Lose"
        countLose++
    }
    else if (rps[random] === scissors) {
        oppimg.src = 'https://www.rpsgame.org/assets/img/scissors.svg'
        result.innerHTML = "Win"
        countWin++
    }
    res.innerHTML = `${countWin}:${countLose}`
    RestartLose()
    RestartWin()
}

paper.onclick = function Rock() {
    let random = Math.floor(Math.random() * 3)
    let result = document.querySelector(".result")
    // scissors.classList.add("d-none")
    // paper.classList.add("d-none")

    if (rps[random] === rock) {
        oppimg.src = 'https://www.rpsgame.org/assets/img/rock.svg'
        result.innerHTML = "Win"
        countWin++
    }
    else if (rps[random] === paper) {
        oppimg.src = 'https://www.rpsgame.org/assets/img/paper.svg'
        result.innerHTML = "Draw"
    }
    else if (rps[random] === scissors) {
        oppimg.src = 'https://www.rpsgame.org/assets/img/scissors.svg'
        result.innerHTML = "Lose"
        countLose++
    }
    res.innerHTML = `${countWin}:${countLose}`

    RestartLose()
    RestartWin()

}
scissors.onclick = function Rock() {
    let random = Math.floor(Math.random() * 3)
    let result = document.querySelector(".result")
    // scissors.classList.add("d-none")
    // paper.classList.add("d-none")

    if (rps[random] === rock) {
        oppimg.src = 'https://www.rpsgame.org/assets/img/rock.svg'
        result.innerHTML = "Lose"
        countLose++
    }
    else if (rps[random] === paper) {
        oppimg.src = 'https://www.rpsgame.org/assets/img/paper.svg'
        result.innerHTML = "Win"
        countWin++
    }
    else if (rps[random] === scissors) {
        oppimg.src = 'https://www.rpsgame.org/assets/img/scissors.svg'
        result.innerHTML = "Draw"
    }
    res.innerHTML = `${countWin}:${countLose}`
    RestartLose()
    RestartWin()
    
}

function RestartWin() {
    let one = document.querySelector(".one")
    let two = document.querySelector(".two")
    let three = document.querySelector(".three")
    if (countWin === 1) {
        one.classList.add("active")
    }
    else if (countWin === 2) {
        two.classList.add("active")
    }
    else if (countWin === 3) {
        three.classList.add("active")
        restartt.style.display = "block"
        // location.reload()
    }
    if(countWin===3){
        rest_win.classList.remove("d-none")
 }
 if(countLose===3){
    rest_lose.classList.remove("d-none")
}

 

}
function RestartLose() {

    let one1 = document.querySelector(".one1")
    let two1 = document.querySelector(".two1")
    let three1 = document.querySelector(".three1")

    if (countLose === 1) {
        one1.classList.add("active")
    }
    else if (countLose === 2) {
        two1.classList.add("active")
    }
    else if (countLose === 3) {
        three1.classList.add("active")
    }
        if(countWin===3 ){
            rest_win.classList.remove("d-none")
     }
     if(countLose===3){
        rest_lose.classList.remove("d-none")
 }
        // location.reload()
}

let rest_win=document.querySelector(".rest-win")
let rest_lose=document.querySelector(".rest-lose")
let restartt=document.querySelector(".btn-restart")
let restartt_l=document.querySelector(".btn-restart-lose")
    restartt.onclick = function RestartBtn() {
        location.reload()
    }
    restartt_l.onclick = function RestartBtn() {
        location.reload()
    }
// function Rest() 
    

    // function A() {
    //     if (countWin===3) {
    //         restartt.classList.remove("d-none")
    //     }
    // }