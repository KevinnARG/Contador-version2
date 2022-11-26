let numero = document.getElementById("numero");
let mas = document.getElementById("mas");
let menos = document.getElementById("menos");
let container = document.getElementsByClassName("numero-container")

let contador = 0

function sumar() {

    contador ++

    numero.innerHTML = contador

    numero.classList.toggle("sumado")

}

function restar() {

    contador --

    numero.innerHTML = contador

    numero.classList.toggle("sumado")
}

function reset() {

    contador = 0 
    
    numero.innerHTML = contador

}

numero.onclick = function () {
    let nuevo_numero = Number(prompt("Que numero querés q sea ahora?"))

    contador = nuevo_numero

    contador.innerHTML = contador
}

/////////////////////////ARRIBA CONTADOR///////////////////////////////////

