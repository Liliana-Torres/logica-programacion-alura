let numeroSecreto;
let intentos;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
};

function generarNnumeroSecreto() {
    let numeroAleatoreo = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(numeroAleatoreo);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento ('p', 'Ya se sortearon todos los números posibles');
    } else {
        if (listaNumerosSorteados.includes(numeroAleatoreo)) {
            return generarNnumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroAleatoreo)
            return numeroAleatoreo
        }
    }
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto);
    console.log(numeroDeUsuario);

    if (numeroDeUsuario == numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarInput();
    }
    return;
}

function limpiarInput() {
    let valorInput = document.querySelector('#valorUsuario');
    valorInput.value = '';
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número de 1 al ${numeroMaximo}`);
    numeroSecreto = generarNnumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar el imput 
    limpiarInput();
    //indicar mensaje de intervalo de numero
    //generar numero secretro//
    //inicializar numero de intentos
    condicionesIniciales();
    //desabilitar el boton
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();


