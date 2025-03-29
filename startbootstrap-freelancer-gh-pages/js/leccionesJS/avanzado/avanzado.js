const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function createLetter() {
    const letter = document.createElement('div');
    letter.className = 'letter';
    letter.textContent = letters.charAt(Math.floor(Math.random() * letters.length));
    letter.style.left = `${Math.random() * 90}vw`;
    letter.style.top = `${Math.random() * 90}vh`;
    letter.style.animationDuration = `${Math.random() * 3 + 2}s`;
    letter.style.fontSize = `${Math.random() * 2 + 1.5}rem`;
    document.body.appendChild(letter);

    setTimeout(() => {
        letter.remove(); // Elimina la letra después de un tiempo
    }, 5000);
}
//acordeon
const accordions = document.querySelectorAll('.accordion-header');

accordions.forEach(header => {
    header.addEventListener('click', function () {
        const content = this.nextElementSibling;
        const isOpen = content.style.maxHeight;

        // Cierra todos los demás contenidos
        document.querySelectorAll('.accordion-content').forEach(c => {
            c.style.maxHeight = null;
            c.style.padding = '0';
        });

        // Abre o cierra el contenido actual
        if (isOpen) {
            content.style.maxHeight = null;
            content.style.padding = '0';
        } else {
            content.style.maxHeight = content.scrollHeight + "px"; // Ajusta el tamaño
            content.style.padding = '15px'; // Añade padding al abrir
        }
    });
});

setInterval(createLetter, 200); // Crea letras constantemente}

document.getElementById("inicio").addEventListener("click", () => {
    window.location.href = "First.html";
})

//Instrucciones
const recognition = new webkitSpeechRecognition();
recognition.continuous = false;
recognition.lang = 'es-ES';
recognition.interimResults = false;

const mensajeBienvenida = "Bienvenido a la leccion de avanzados, aca aprenderas oraciones y como ejercicio aprenderas a ordenar palabras";

function leerBienvenida() {
    const speech = new SpeechSynthesisUtterance(mensajeBienvenida);
    speech.volume = 1;
    speech.rate = 1.5;
    speech.pitch = 0.4;
    speech.lang = 'es-ES';
    window.speechSynthesis.speak(speech);
}
leerBienvenida(mensajeBienvenida);

//SECCIÓN DE APRENDER ORACIONES
const imgAvanzado = document.getElementById('imgAvanzados');
const mic =  document.getElementById('mic');
const right = document.getElementById('arrowRight');
const left = document.getElementById('arrowLeft');

let index = 0;
//imagenes
const imgOraciones = [
    '<img src="./assets/img/avanzado/Oraciones/Oraciones/1.jpg" alt="" width="250">',
    '<img src="./assets/img/avanzado/Oraciones/Oraciones/2.jpg" alt="" width="250">',
    '<img src="./assets/img/avanzado/Oraciones/Oraciones/3.jpg" alt="" width="250">',
    '<img src="./assets/img/avanzado/Oraciones/Oraciones/4.jpg" alt="" width="250">',
    '<img src="./assets/img/avanzado/Oraciones/Oraciones/5.jpg" alt="" width="250">',
    '<img src="./assets/img/avanzado/Oraciones/Oraciones/6.jpg" alt="" width="250">',
    '<img src="./assets/img/avanzado/Oraciones/Oraciones/7.jpg" alt="" width="250">',
    '<img src="./assets/img/avanzado/Oraciones/Oraciones/8.jpg" alt="" width="250">',
    '<img src="./assets/img/avanzado/Oraciones/Oraciones/9.jpg" alt="" width="250">',
    '<img src="./assets/img/avanzado/Oraciones/Oraciones/10.jpg" alt="" width="250">',
];
//oraciones
const oraciones = [
    'Juan, compra pan',
    'Yo tengo el lápiz',
    'La mesa es roja',
    'La flor es bonita',
    'El perro corre',
    'El gato duerme en el sofá verde',
    'Mi mamá cocina arroz con pollo',
    'La niña corre rápido en el parque',
    'Compré frutas frescas en el mercado',
    'El tren pasa temprano por la estación'
];

    //función para actualizar las imagenes
    function updateIMG(){
        imgAvanzado.innerHTML = imgOraciones[index];
    };
    //funcion para usar el asistente de vos
    function talk(palabra) {
        const speech = new SpeechSynthesisUtterance(palabra);
        speech.lang = 'es-ES';
        window.speechSynthesis.speak(speech);
    };

    left.addEventListener('click', () => {
        index = (index - 1 + imgOraciones.length) % imgOraciones.length;
        updateIMG();
    });
    
    right.addEventListener('click', () => {
        index = (index + 1) % imgOraciones.length;
        updateIMG()
    });

    mic.addEventListener('click', () => {
        updateIMG();
        talk(oraciones[index]);
    });
    updateIMG()


//SECCIÓN DE EJERCICIO
const exercAvan = document.getElementById('execiseAvanzado');
const inst = "En este modúlo aprenderas a ordenar las oraciones de lo que aprendiste anteriormente"
let leer = false
exercAvan.addEventListener('click', () => {
    if(!leer) {
        const speech = new SpeechSynthesisUtterance(inst);
        speech.lang = 'es-ES';
        window.speechSynthesis.speak(speech);
    }
    leer = true;
})
const oracioness = [
    { texto: 'Juan compra pan', imagen: './assets/img/avanzado/Oraciones/Ejercicio/1.jpg' },
    { texto: 'Yo tengo el lápiz', imagen: './assets/img/avanzado/Oraciones/Ejercicio/2.jpg' },
    { texto: 'La mesa es roja', imagen: './assets/img/avanzado/Oraciones/Ejercicio/3.jpg' },
    { texto: 'La flor es bonita', imagen: './assets/img/avanzado/Oraciones/Ejercicio/4.jpg' },
    { texto: 'El perro corre', imagen: './assets/img/avanzado/Oraciones/Ejercicio/5.jpg' },
    { texto: 'El gato duerme en el sofá verde', imagen: './assets/img/avanzado/Oraciones/Ejercicio/6.jpg' },
    { texto: 'Mi mamá cocina arroz con pollo', imagen: './assets/img/avanzado/Oraciones/Ejercicio/7.jpg' },
    { texto: 'La niña corre rápido en el parque', imagen: './assets/img/avanzado/Oraciones/Ejercicio/8.jpg' },
    { texto: 'Compré frutas frescas en el mercado', imagen: './assets/img/avanzado/Oraciones/Ejercicio/9.jpg' },
    { texto: 'El tren pasa temprano por la estación', imagen: './assets/img/avanzado/Oraciones/Ejercicio/10.jpg' }
];

let indiceActual = 0;
let oracionCorrecta = "";
let palabrasDesordenadas = [];
let oracionUsuario = [];

function cargarOracion() {
    oracionCorrecta = oracioness[indiceActual].texto;
    palabrasDesordenadas = oracionCorrecta.split(" ").sort(() => Math.random() - 0.5);
    oracionUsuario = [];

    document.getElementById("oracion-img").src = oracioness[indiceActual].imagen;
    document.getElementById("oracion-construida").innerText = "";
    document.getElementById("resultado").innerText = "";
    crearBotones();
}

function crearBotones() {
    const container = document.getElementById("buttons-container");
    container.innerHTML = "";
    palabrasDesordenadas.forEach((palabra, index) => {
        let btn = document.createElement("button");
        btn.innerText = palabra;
        btn.classList.add("word-button");
        btn.onclick = () => agregarPalabra(index, btn);
        container.appendChild(btn);
    });
}

function agregarPalabra(index, btn) {
    oracionUsuario.push(palabrasDesordenadas[index]);
    document.getElementById("oracion-construida").innerText = oracionUsuario.join(" ");
    btn.style.display = "none";

    if (oracionUsuario.length === palabrasDesordenadas.length) {
        verificarOracion();
    }
}

function verificarOracion() {
    if (oracionUsuario.join(" ") === oracionCorrecta) {
        const speech = new SpeechSynthesisUtterance("Correcto, siga con el ejercicio");
        speech.lang = 'es-ES';
        window.speechSynthesis.speak(speech);
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Correcto",
            showConfirmButton: false,
            timer: 2000
        });
        //setTimeout(siguienteOracion, 3000);
    } else {
        const speech = new SpeechSynthesisUtterance("Incorrecto, intente de nuevo");
        speech.lang = 'es-ES';
        window.speechSynthesis.speak(speech);
        Swal.fire({
            position: "top-center",
            icon: "error",
            title: "Incorrecto",
            showConfirmButton: false,
            timer: 2000
        });
        setTimeout(cargarOracion, 3000);
    }
}

function siguienteOracion() {
    indiceActual = (indiceActual + 1) % oracioness.length;
    cargarOracion();
}

function anteriorOracion() {
    indiceActual = (indiceActual - 1 + oracioness.length) % oracioness.length;
    cargarOracion();
}

document.getElementById("izquierda").addEventListener("click", anteriorOracion);
document.getElementById("derecha").addEventListener("click", siguienteOracion);

cargarOracion();