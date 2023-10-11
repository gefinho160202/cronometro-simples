

const startButton = document.querySelector(".start")
const stoptButton = document.querySelector(".stop")
const limparButton = document.querySelector(".limpar")

let horas = 0
let minutos = 0
let segundos = 0


let cron
let h2 = document.querySelector("h2")


function start() {

    startButton.setAttribute("disabled", true)
    stoptButton.removeAttribute("disabled")
    limparButton.removeAttribute("disabled")

    cron = setInterval(function () {
        timer()

    }, 1000)

}

function stop() {

    clearInterval(cron)
}

function zerar() {
    clearInterval(cron)
    horas = 0
    minutos = 0
    segundos = 0

    h2.innerText = '00:00:00'
}

function timer() {
    segundos++

    if (segundos == 60) { //Verifica se deu 59 segundos
        segundos = 0; //Volta os segundos para 0
        minutos++; //Adiciona +1 na variável mm

        if (minutos == 60) { //Verifica se deu 59 minutos
            minutos = 0;//Volta os minutos para 0
            horas++;//Adiciona +1 na variável hora
        }
    }

    let format = (horas < 10 ? '0' + horas : horas) +
        ':' + (minutos < 10 ? '0' + minutos : minutos) +
        ':' + (segundos < 10 ? '0' + segundos : segundos);

    h2.innerText = format

    return format
}

startButton.onclick = () => {
    startButton.setAttribute("disabled", true)
    start()
}

stoptButton.onclick = () => {
    startButton.removeAttribute("disabled",true)
    stop()
}

limparButton.onclick = ()=>{
    startButton.removeAttribute("disabled",true)
    zerar()
}
