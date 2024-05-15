const imgClick = document.querySelector("#imgClick")
const btnAgain = document.querySelector("#btnAgain")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const displayPhrase = document.querySelector("#displayPhrase")

let phrases = [
        "A sorte está a seu favor hoje!",
        "Grandes oportunidades estão a caminho.",
        "Seja paciente, o melhor ainda está por vir.",
        "Acredite em si mesmo e siga em frente!",
        "O universo está conspirando a seu favor.",
        "Sorria para a vida e ela sorriirá de volta para você."
]

//evntos
imgClick.addEventListener('click', handleTryClick)
btnAgain.addEventListener('click', handleTryClick)

function handleTryClick() {
    toggleScreen()
    randomPhrase()
}


function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function randomPhrase() {
    let randomPhrase = phrases[Math.floor(Math.random() * phrases.length)]

    displayPhrase.textContent = randomPhrase;
}