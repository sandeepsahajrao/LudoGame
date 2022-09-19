let btn = document.getElementById('btn2');
let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")
let win2 = document.getElementsByClassName("win")

console.log(win2[0].innerText)
btn.addEventListener("click", function () {
    let pic1 = Math.floor(Math.random() * 6) + 1
    let pic2 = Math.floor(Math.random() * 6) + 1
    let s = `Ludoimg/dice-png-${pic1}.png`
    img1.src = s
    let f = `Ludoimg/dice-png-${pic2}.png`
    img2.src = f
    if (pic1 > pic2) {
        win2[0].innerText = "Player 1 win-:)"
    } else if (pic1 < pic2) {
        win2[0].innerText = "Play 2 win:-)"
    } else {
        win2[0].innerText = "Draw-:)"
    }

})
