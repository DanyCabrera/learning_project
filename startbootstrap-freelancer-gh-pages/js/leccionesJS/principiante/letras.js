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

setInterval(createLetter, 200); // Crea letras constantemente

document.getElementById("inicio").addEventListener("click", () => {
    window.location.href = "First.html";
})

const recognition = new webkitSpeechRecognition();
recognition.continuous = false;
recognition.lang = 'es-ES';
recognition.interimResults = false;

const mensajeBienvenida = "Bienvenido, En este módulo aprenderás como se pronuncian las vocales. Seguidamente aprenderás como se pronuncia cada letra del abecedario. Al final encontrarás ejercicios que te ayudaran a reforzar la pronunciación de las letras que aprenderas a lo largo de este módulo";

function leerBienvenida() {
    const speech = new SpeechSynthesisUtterance(mensajeBienvenida);
    speech.volume = 1; // Volumen ajustado a un valor válido (0-1)
    speech.rate = 1.5;
    speech.pitch = 0.4;
    speech.lang = 'es-ES';
    window.speechSynthesis.speak(speech);
}

leerBienvenida(mensajeBienvenida)

const micVocales = document.getElementById('micVocales');
const imagenVocales = document.getElementById('vocales');
const flechaIzquierdaVocales = document.getElementById('arrowLeftVocales');
const flechaDerechaVocales = document.getElementById('arrowRightVocales');

let indexVocales = 0;

// Imágenes de las vocales
const imgVocales = [
    '<img src="./assets/img/principiante/VOCALES/Vocales/Vocales/Vocal a.jpg" alt="vocal A" width="250">',
    '<img src="./assets/img/principiante/VOCALES/Vocales/Vocales/Vocal e.jpg" alt="vocal E" width="250">',
    '<img src="./assets/img/principiante/VOCALES/Vocales/Vocales/Vocal i.jpg" alt="vocal I" width="250">',
    '<img src="./assets/img/principiante/VOCALES/Vocales/Vocales/Vocal o.jpg" alt="vocal O" width="250">',
    '<img src="./assets/img/principiante/VOCALES/Vocales/Vocales/Vocal u.jpg" alt="vocal U" width="250">'
];

// Palabras asociadas a cada vocal
const Lvocales = [
    "Esta es la vocal A, con esta vocal empiezan palabras como árbol, avión, abeja. Escucha bien: áááár-bol, aaaa-vión, aaaa-beja.",
    "Esta es la vocal E, con esta vocal empiezan palabras como elefante, estrella, enanito. Escucha bien: eeeele-fante, eeeestre-lla, eeeena-nito.",
    "Esta es la vocal I, con esta vocal empiezan palabras como isla, indio, iglú. Escucha bien: iiiis-la, iiiin-dio, iiii-glú.",
    "Esta es la vocal O, con esta vocal empiezan palabras como oso, ojo, oreja, oruga. Escucha bien: oooo-so, oooo-jo, oooore-ja, ooooru-ga",
    "Esta es la vocal U, con esta vocal empiezan palabras como uva, unicornio, uno, universo. Escucha bien: uuuu-va, uuuu-nicornio, uuuu-no, uuuuni-verso."
];

const palabrasClave = [
    ["áááár-bol", "aaaa-vión", "aaaa-beja"],
    ["eeeele-fante", "eeeestre-lla", "eeeena-nito"],
    ["iiiis-la", "iiiin-dio", "iiii-glú"],
    ["oooo-so", "oooo-jo", "oooore-ja", "ooooru-ga"],
    ["uuuu-va", "uuuu-nicornio", "uuuu-no", "uuuuni-verso"]
];

// Función para actualizar la imagen
function actualizarImagenVocales() {
    imagenVocales.innerHTML = imgVocales[indexVocales];
}

// Función para leer el texto en voz alta con ajuste de velocidad
function leerVocales(texto, palabrasClave) {
    const synth = window.speechSynthesis;
    let partes = texto.split(new RegExp(`(${palabrasClave.join("|")})`, "g"));

    partes.forEach((parte) => {
        let utterance = new SpeechSynthesisUtterance(parte);
        utterance.lang = "es-ES";

        // Reducir velocidad en palabras clave
        if (palabrasClave.includes(parte)) {
            utterance.rate = .3;
        } else {
            utterance.rate = .9;
        }

        synth.speak(utterance);
    });
}

// Event listeners para las flechas
flechaIzquierdaVocales.addEventListener('click', () => {
    indexVocales = (indexVocales - 1 + imgVocales.length) % imgVocales.length;
    actualizarImagenVocales();
});

flechaDerechaVocales.addEventListener('click', () => {
    indexVocales = (indexVocales + 1) % imgVocales.length;
    actualizarImagenVocales();
});

// Event listener para el micrófono
micVocales.addEventListener('click', () => {
    actualizarImagenVocales();
    leerVocales(Lvocales[indexVocales], palabrasClave[indexVocales]);
});

// Inicializar la primera imagen
actualizarImagenVocales();


//aprender los abecedarios
const mic = document.getElementById('mic');
const imagen = document.getElementById('letras');
const flechaIzquierda = document.getElementById('arrowLeft');
const flechaDerecha = document.getElementById('arrowRight');

let index = 0;
//Imagenes de los abecedarios
const imgABC = [
    '<img src="./assets/img/principiante/Letras2.0-20250216T180012Z-001/Letras2.0/aa.jpg" alt="" width="250">',
    '<img src="./assets/img/principiante/Letras2.0-20250216T180012Z-001/Letras2.0/bb.jpg" alt="" width="250">',
    '<img src="./assets/img/principiante/Letras2.0-20250216T180012Z-001/Letras2.0/cc.jpg" alt="" width="250">',
    '<img src="./assets/img/principiante/Letras2.0-20250216T180012Z-001/Letras2.0/dd.jpg" alt="" width="250">',
    '<img src="./assets/img/principiante/Letras2.0-20250216T180012Z-001/Letras2.0/ee.jpg" alt="" width="250">',
    '<img src="./assets/img/principiante/Letras2.0-20250216T180012Z-001/Letras2.0/ff.jpg" alt="" width="250">',
    '<img src="./assets/img/principiante/Letras2.0-20250216T180012Z-001/Letras2.0/gg.jpg" alt="" width="250">',
    '<img src="./assets/img/principiante/Letras2.0-20250216T180012Z-001/Letras2.0/hh.jpg" alt="" width="250">',
    '<img src="./assets/img/principiante/Letras2.0-20250216T180012Z-001/Letras2.0/ii.jpg" alt="" width="250">',
    '<img src="./assets/img/principiante/Letras2.0-20250216T180012Z-001/Letras2.0/jj.jpg" alt="" width="250">',
    '<img src="./assets/img/principiante/Letras2.0-20250216T180012Z-001/Letras2.0/k.jpg" alt="" width="250">',
    '<img src="./assets/img/principiante/Letras2.0-20250216T180012Z-001/Letras2.0/L.jpg" alt="" width="250">',
    '<img src="./assets/img/principiante/Letras2.0-20250216T180012Z-001/Letras2.0/M.jpg" alt="" width="250">',
    '<img src="./assets/img/principiante/Letras2.0-20250216T180012Z-001/Letras2.0/N.jpg" alt="" width="250">',
    '<img src="./assets/img/principiante/Letras2.0-20250216T180012Z-001/Letras2.0/Ñ.jpg" alt="" width="250">',
    '<img src="./assets/img/principiante/Letras2.0-20250216T180012Z-001/Letras2.0/O.jpg" alt="" width="250">',
    '<img src="./assets/img/principiante/Letras2.0-20250216T180012Z-001/Letras2.0/P.jpg" alt="" width="250">',
    '<img src="./assets/img/principiante/Letras2.0-20250216T180012Z-001/Letras2.0/Q.jpg" alt="" width="250">',
    '<img src="./assets/img/principiante/Letras2.0-20250216T180012Z-001/Letras2.0/R.jpg" alt="" width="250">',
    '<img src="./assets/img/principiante/Letras2.0-20250216T180012Z-001/Letras2.0/S.jpg" alt="" width="250">',
    '<img src="./assets/img/principiante/Letras2.0-20250216T180012Z-001/Letras2.0/T.jpg" alt="" width="250">',
    '<img src="./assets/img/principiante/Letras2.0-20250216T180012Z-001/Letras2.0/U.jpg" alt="" width="250">',
    '<img src="./assets/img/principiante/Letras2.0-20250216T180012Z-001/Letras2.0/V.jpg" alt="" width="250">',
    '<img src="./assets/img/principiante/Letras2.0-20250216T180012Z-001/Letras2.0/W.jpg" alt="" width="250">',
    '<img src="./assets/img/principiante/Letras2.0-20250216T180012Z-001/Letras2.0/X.jpg" alt="" width="250">',
    '<img src="./assets/img/principiante/Letras2.0-20250216T180012Z-001/Letras2.0/Y.jpg" alt="" width="250">',
    '<img src="./assets/img/principiante/Letras2.0-20250216T180012Z-001/Letras2.0/Z.jpg" alt="" width="250">',
];
//Palabras de los abecedarios
const abecedarios = [
    "Esta es la letra A, con ella escribimos palabras como avión.",
    "Esta es la letra B, con ella escribimos palabras como ballena.",
    "Esta es la letra C, con ella escribimos palabras como casa.",
    "Esta es la letra D, con ella escribimos palabras como dados.",
    "Esta es la letra E, con ella escribimos palabras como elefante.",
    "Esta es la letra F, con ella escribimos palabras como flor.",
    "Esta es la letra G, con ella escribimos palabras como gusano.",
    "Esta es la letra H, con ella escribimos palabras como helado.",
    "Esta es la letra I, con ella escribimos palabras como iglú.",
    "Esta es la letra J, con ella escribimos palabras como jirafa.",
    "Esta es la letra K, con ella escribimos palabras como koala.",
    "Esta es la letra L, con ella escribimos palabras como león.",
    "Esta es la letra M, con ella escribimos palabras como manzana.",
    "Esta es la letra N, con ella escribimos palabras como nube.",
    "Esta es la letra Ñ, con ella escribimos palabras como ñandú.",
    "Esta es la letra O, con ella escribimos palabras como oso.",
    "Esta es la letra P, con ella escribimos palabras como pizza.",
    "Esta es la letra Q, con ella escribimos palabras como queso.",
    "Esta es la letra R, con ella escribimos palabras como rana.",
    "Esta es la letra S, con ella escribimos palabras como sol.",
    "Esta es la letra T, con ella escribimos palabras como tortuga.",
    "Esta es la letra U, con ella escribimos palabras como uvas.",
    "Esta es la letra V, con ella escribimos palabras como vaca.",
    "Esta es la letra W, con ella escribimos palabras como waffle.",
    "Esta es la letra X, con ella escribimos palabras como xilófono.",
    "Esta es la letra Y, con ella escribimos palabras como yoyo.",
    "Esta es la letra Z, con ella escribimos palabras como zorro."
];

// Función para actualizar la imagen
function actualizarImagen() {
    imagen.innerHTML = imgABC[index];
}

// Función para leer la palabra en voz alta
function leerPalabra(palabra) {
    const speech = new SpeechSynthesisUtterance(palabra);
    speech.lang = "es-ES";
    window.speechSynthesis.speak(speech);
}

// Event listeners para las flechas
flechaIzquierda.addEventListener('click', () => {
    index = (index - 1 + imgABC.length) % imgABC.length;
    actualizarImagen();
});

flechaDerecha.addEventListener('click', () => {
    index = (index + 1) % imgABC.length;
    actualizarImagen();
});

// Event listener para el micrófono
mic.addEventListener('click', () => {
    actualizarImagen();
    leerPalabra(abecedarios[index]);
});

// Inicializar la primera imagen
actualizarImagen();

//EJERCICIO DE APRENDIZAJE
//Audio de instrucciones para el ejercicio
const acordion = document.getElementById('accordion');
const inst = "En este modulo, practicaras las letras del abecedario, vas a identificar con que letra del abecedario comienza el nombre";
let Leerinst = false
acordion.addEventListener('click', () => {
    if (!Leerinst) {
        const speech = new SpeechSynthesisUtterance(inst);
        speech.lang = 'es-ES';
        window.speechSynthesis.speak(speech);
    }
    Leerinst = true
})
document.addEventListener("DOMContentLoaded", function (event) {
    event.preventDefault();
    const abecedario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split("");
    const btnOptions = document.querySelectorAll(".opcionesVocal button");
    const izquierda = document.getElementById('izquierda');
    const derecha = document.getElementById('derecha');
    const imagenn = document.getElementById('imgAprendizaje');
    const transcribirVoz = document.getElementById('transcript');

    let index = 0;
    let arregloPalabras = [
        'avión', 'ballena', 'casa', 'dados', 'elefante', 'flor', 'gusano', 'helado', 'iglú', 'jirafa',
        'koala', 'león', 'manzana', 'nube', 'ñandú', 'oso', 'pizza', 'queso', 'rana', 'sol',
        'tortuga', 'uvas', 'vaca', 'waffle', 'xilófono', 'yoyo', 'zorro'
    ];

    function generarLetras() {
        let letraCorrecta = abecedario[index];
        let letrasSeleccionadas = [letraCorrecta];

        while (letrasSeleccionadas.length < 4) {
            let letraAleatoria = abecedario[Math.floor(Math.random() * abecedario.length)];
            if (!letrasSeleccionadas.includes(letraAleatoria)) {
                letrasSeleccionadas.push(letraAleatoria);
            }
        }

        letrasSeleccionadas.sort(() => Math.random() - 0.5);

        btnOptions.forEach((btn, i) => {
            btn.textContent = letrasSeleccionadas[i];
            btn.onclick = () => verificarLetra(btn.textContent, letraCorrecta);
        });
    }

    function verificarLetra(letraSeleccionada, letraCorrecta) {
        if (letraSeleccionada === letraCorrecta) {
            const speech = new SpeechSynthesisUtterance("Correcto, letra reconocida");
            speech.lang = 'es-ES';
            window.speechSynthesis.speak(speech);
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Correcto",
                showConfirmButton: false,
                timer: 2000
            });
        } else {
            const speech = new SpeechSynthesisUtterance("Incorrecto, intenta de nuevo");
            speech.lang = 'es-ES';
            window.speechSynthesis.speak(speech);
            Swal.fire({
                position: "top-center",
                icon: "error",
                title: "Incorrecto",
                showConfirmButton: false,
                timer: 2000
            });
        }
    }

    function actualizarImg() {
        imagenn.innerHTML = imgABC[index]
        transcribirVoz.textContent = arregloPalabras[index];
        generarLetras();
    }

    izquierda.addEventListener('click', () => {
        index = (index - 1 + 27) % 27;
        actualizarImg();
    });

    derecha.addEventListener('click', () => {
        index = (index + 1) % 27;
        actualizarImg();
    });

    actualizarImg();
});

const btnmic = document.getElementById("micAbecedario");