const exit = document.getElementById('exit');
exit.addEventListener("click", (e) => {
    window.location.href = "index.html";
});

const nivel1 = document.getElementById('nivel1');
const nivel2 = document.getElementById('nivel2');
const nivel3 = document.getElementById('nivel3');

const recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.lang = 'es-ES';
recognition.interimResults = false;

//principiante
const principiante = "Esta es la lección principiante, has click en la flecha amarilla que esta abajo para comenzar las lecciones";
let bienvenidaDicha = false;

nivel1.addEventListener("click", (e) => {
    if (!bienvenidaDicha) {
        recognition.abort();
        leerBienvenida(() => {
            recognition.start();
        });
        bienvenidaDicha = true;
    }
})

function leerBienvenida() {
    const speech = new SpeechSynthesisUtterance(principiante);
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 0.4;
    speech.lang = 'es-ES';
    window.speechSynthesis.speak(speech);
}

//intermedio
const intermedio = "Esta es la lección intermedio, has click en la flecha amarilla que esta abajo para comenzar las lecciones";
let intermedioDicho = false;

nivel2.addEventListener("click", (e) => {
    if (!intermedioDicho) {
        recognition.abort();
        leerBienvenida2(() => {
            recognition.start();
        });
        intermedioDicho = true;
    }
})

function leerBienvenida2() {
    const speech = new SpeechSynthesisUtterance(intermedio);
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 0.4;
    speech.lang = 'es-ES';
    window.speechSynthesis.speak(speech);
}

//avanzado
const avanzado = "Esta es la lección avanzado, has click en la flecha amarilla que esta abajo para comenzar las lecciones";
let avanzadoDicho = false;

nivel3.addEventListener("click", (e) => {
    if (!avanzadoDicho) {
        recognition.abort();
        leerBienvenida3(() => {
            recognition.start();
        });
        avanzadoDicho = true;
    }
})

function leerBienvenida3() {
    const speech = new SpeechSynthesisUtterance(avanzado);
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 0.4;
    speech.lang = 'es-ES';
    window.speechSynthesis.speak(speech);
}

const flechaPrincipiante = document.getElementById('arrow1');
flechaPrincipiante.addEventListener("click", (e) => {
    window.location.href = "principiante.html";
})

const flechaIntermedio = document.getElementById('arrow2');
flechaIntermedio.addEventListener("click", (e) => {
    window.location.href = "intermedio.html";
})

const flechaAvanzado = document.getElementById('arrow3');
flechaAvanzado.addEventListener("click", (e) => {
    window.location.href = "avanzado.html";
})