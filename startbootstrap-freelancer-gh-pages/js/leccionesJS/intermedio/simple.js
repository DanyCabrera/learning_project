const micSimple = document.getElementById('micSimple'); //micrfono
const imagenSimple = document.getElementById('simplesIMG'); //imagenes
const flechaIzquierda3 = document.getElementById('arrowLeft3'); //flecha izquierda
const flechaDerecha3 = document.getElementById('arrowRight3'); //flecha derecha
(() => {
    let index = 0;

    const imgSimple = [
        '<img src="/startbootstrap-freelancer-gh-pages/assets/img/principiante/palabras simples-20250216T220736Z-001/palabras simples/simple1.jpg" alt="" width="250">',
        '<img src="/startbootstrap-freelancer-gh-pages/assets/img/principiante/palabras simples-20250216T220736Z-001/palabras simples/simple2.jpg" alt="" width="250">',
        '<img src="/startbootstrap-freelancer-gh-pages/assets/img/principiante/palabras simples-20250216T220736Z-001/palabras simples/simple3.jpg" alt="" width="250">',
        '<img src="/startbootstrap-freelancer-gh-pages/assets/img/principiante/palabras simples-20250216T220736Z-001/palabras simples/simple4.jpg" alt="" width="250">',
        '<img src="/startbootstrap-freelancer-gh-pages/assets/img/principiante/palabras simples-20250216T220736Z-001/palabras simples/simple5.jpg" alt="" width="250">',
        '<img src="/startbootstrap-freelancer-gh-pages/assets/img/principiante/palabras simples-20250216T220736Z-001/palabras simples/simple6.jpg" alt="" width="250">',
        '<img src="/startbootstrap-freelancer-gh-pages/assets/img/principiante/palabras simples-20250216T220736Z-001/palabras simples/simple7.jpg" alt="" width="250">',
        '<img src="/startbootstrap-freelancer-gh-pages/assets/img/principiante/palabras simples-20250216T220736Z-001/palabras simples/simple8.jpg" alt="" width="250">',
        '<img src="/startbootstrap-freelancer-gh-pages/assets/img/principiante/palabras simples-20250216T220736Z-001/palabras simples/simple9.jpg" alt="" width="250">',
        '<img src="/startbootstrap-freelancer-gh-pages/assets/img/principiante/palabras simples-20250216T220736Z-001/palabras simples/simple10.jpg" alt="" width="250">',
        '<img src="/startbootstrap-freelancer-gh-pages/assets/img/principiante/palabras simples-20250216T220736Z-001/palabras simples/simple11.jpg" alt="" width="250">',
        '<img src="/startbootstrap-freelancer-gh-pages/assets/img/principiante/palabras simples-20250216T220736Z-001/palabras simples/simple12.jpg" alt="" width="250">',
        '<img src="/startbootstrap-freelancer-gh-pages/assets/img/principiante/palabras simples-20250216T220736Z-001/palabras simples/simple13.jpg" alt="" width="250">',
        '<img src="/startbootstrap-freelancer-gh-pages/assets/img/principiante/palabras simples-20250216T220736Z-001/palabras simples/simple14.jpg" alt="" width="250">',
        '<img src="/startbootstrap-freelancer-gh-pages/assets/img/principiante/palabras simples-20250216T220736Z-001/palabras simples/simple15.jpg" alt="" width="250">',
        '<img src="/startbootstrap-freelancer-gh-pages/assets/img/principiante/palabras simples-20250216T220736Z-001/palabras simples/simple16.jpg" alt="" width="250">',
        '<img src="/startbootstrap-freelancer-gh-pages/assets/img/principiante/palabras simples-20250216T220736Z-001/palabras simples/simple17.jpg" alt="" width="250">',
        '<img src="/startbootstrap-freelancer-gh-pages/assets/img/principiante/palabras simples-20250216T220736Z-001/palabras simples/simple18.jpg" alt="" width="250">',
        '<img src="/startbootstrap-freelancer-gh-pages/assets/img/principiante/palabras simples-20250216T220736Z-001/palabras simples/simple19.jpg" alt="" width="250">',
        '<img src="/startbootstrap-freelancer-gh-pages/assets/img/principiante/palabras simples-20250216T220736Z-001/palabras simples/simple20.jpg" alt="" width="250">'
    ]

    const palabrasSimples = [
        "araña",
        "iguana",
        "pala",
        "estrella",
        "ojo",
        "papá",
        "mamá",
        "lana",
        "sopa",
        "lupa",
        "moto",
        "abeja",
        "botas",
        "barco",
        "bebé",
        "escoba",
        "árbol",
        "silla",
        "lápiz",
        "mesa"
    ]


    // Función para actualizar la imagen
    function actualizarImagen() {
        imagenSimple.innerHTML = imgSimple[index];
    }

    // Función para leer la palabra en voz alta
    function leerPalabra(palabra) {
        const speech = new SpeechSynthesisUtterance(palabra);
        speech.lang = "es-ES";
        window.speechSynthesis.speak(speech);
    }

    // Event listeners para las flechas
    flechaIzquierda3.addEventListener('click', (event) => {
        event.preventDefault();
        index = (index - 1 + imgSimple.length) % imgSimple.length;
        actualizarImagen();
    });

    flechaDerecha3.addEventListener('click', (event) => {
        event.preventDefault();
        index = (index + 1) % imgSimple.length;
        actualizarImagen();
    });

    // Event listener para el micrófono
    micSimple.addEventListener('click', (event) => {
        event.preventDefault();
        actualizarImagen();
        leerPalabra(palabrasSimples[index]);
    });

    // Inicializar la primera imagen
    actualizarImagen();
})();

//EJERCICIO DE ORDENAR ORACIONES
//IMAGENES DE LAS PALABRAS
const acordeon = document.getElementById('execiseSilaba');
const instEjer = "En este ejercicio vas a verificar la imagen que se te presente y completaras en nombre de dicha imagen.";
let instE = false;

acordeon.addEventListener('click', () => {
    if (!instE) {
        const speech = new SpeechSynthesisUtterance(instEjer);
        speech.lang = 'es-ES';
        window.speechSynthesis.speak(speech)
    }
    instE = true;
});

const imgSilaba = document.getElementById('imgAprendizaje');
let imgExer = 0;
const imgExercises = [
    '<img src="./assets/img/intermedio/ejercicios intermedio/1.jpg" width="250" alt="">',
    '<img src="./assets/img/intermedio/ejercicios intermedio/2.jpg" width="250" alt="">',
    '<img src="./assets/img/intermedio/ejercicios intermedio/3.jpg" width="250" alt="">',
    '<img src="./assets/img/intermedio/ejercicios intermedio/4.jpg" width="250" alt="">',
    '<img src="./assets/img/intermedio/ejercicios intermedio/5.jpg" width="250" alt="">',
    '<img src="./assets/img/intermedio/ejercicios intermedio/6.jpg" width="250" alt="">',
    '<img src="./assets/img/intermedio/ejercicios intermedio/7.jpg" width="250" alt="">',
    '<img src="./assets/img/intermedio/ejercicios intermedio/8.jpg" width="250" alt="">',
    '<img src="./assets/img/intermedio/ejercicios intermedio/9.jpg" width="250" alt="">',
    '<img src="./assets/img/intermedio/ejercicios intermedio/10.jpg" width="250" alt="">',
];

function actualizarImg() {
    imgSilaba.innerHTML = imgExercises[imgExer];
}
//PALABRAS PARA COMPLETAS
const exercises = [
    { word: "Ca_", options: ["sa", "ma", "bo"], answer: "sa" },
    { word: "Pa_", options: ["co", "pá", "na"], answer: "pá" },
    { word: "Ca_", options: ["bra", "ma", "lo"], answer: "bra" },
    { word: "Lu_", options: ["na", "mo", "pa"], answer: "na" },
    { word: "Me_", options: ["sa", "ta", "re"], answer: "sa" },
    { word: "Pa_", options: ["to", "ca", "le"], answer: "to" },
    { word: "Va_", options: ["ca", "ma", "do"], answer: "ca" },
    { word: "Ti_", options: ["gre", "me", "ta"], answer: "gre" },
    { word: "Ye_", options: ["ma", "ra", "de"], answer: "ma" },
    { word: "Zo_", options: ["rro", "ta", "mo"], answer: "rro" }
];
let currentIndex = 0;

function toggleAccordion() {
    document.querySelector(".accordion-content").classList.toggle("show");
}

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

function checkAnswer(button) {
    if (button.textContent === exercises[currentIndex].answer) {
        button.style.backgroundColor = "green";
        const speech = new SpeechSynthesisUtterance("Correcto");
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
        const speech = new SpeechSynthesisUtterance("Incorrecto");
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

function updateExercise() {
    document.getElementById("word").textContent = exercises[currentIndex].word;
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = ""; // Limpiar opciones anteriores


    let shuffledOptions = shuffleArray([...exercises[currentIndex].options]);
    shuffledOptions.forEach(option => {
        const button = document.createElement("button");
        button.className = "btn btn-primary";
        button.textContent = option;
        button.onclick = function () { checkAnswer(this); };
        optionsContainer.appendChild(button);
    });

    // Actualizar la imagen según el índice actual
    imgSilaba.innerHTML = imgExercises[currentIndex];
}

function prevExercise() {
    if (currentIndex > 0) {
        currentIndex--;
        updateExercise();
    }
}

function nextExercise() {
    if (currentIndex < exercises.length - 1) {
        currentIndex++;
        updateExercise();
    }
}

updateExercise();

//Ejercicios para verificar la escritura de las sílabas

const input = document.getElementById('imagen');
const preview = document.getElementById('preview');
const loader = document.getElementById('loader');
const resultado = document.getElementById('resultado');
const imgWrite = document.getElementById('imgWrite');
const imgLeft = document.getElementById('imgLeft');
const imgRight = document.getElementById('imgRight');
const execiseEscritura = document.getElementById('execiseEscritura');

const instEjerEscritura = "En este ejercicio vas a verificar la imagen que se te presente y escribiras el nombre de dicha imagen. Le tomaras foto y subiras la foto dandole click en el botón azul y luego darle click en el botón anaranjado para verificar la escritura.";
let instEEscritura = false;
execiseEscritura.addEventListener('click', () => {
    if (!instEEscritura) {
        const speech = new SpeechSynthesisUtterance(instEjerEscritura);
        speech.lang = 'es-ES';
        window.speechSynthesis.speak(speech)
    }
    instEEscritura = true;
});

let f = 0;
const palabrasSilabas = [
    'casa',
    'papá',
    'cabra',
    'luna',
    'mesa',
    'pato',
    'vaca',
    'tigre',
    'yema',
    'zorro'
]

function updateIMG() {
    imgWrite.innerHTML = imgExercises[f];
}

input.addEventListener('change', () => {
    const archivo = input.files[0];
    if (archivo) {
        const reader = new FileReader();
        reader.onload = () => {
            preview.src = reader.result;
            preview.style.display = 'block';
        };
        reader.readAsDataURL(archivo);
    }
});

// Limpiar resultado y resetear la imagen cuando se cambia de ejercicio
function limpiarEscaneoAnterior() {
    resultado.textContent = '';
    loader.style.display = 'none';
    preview.src = '';
    preview.style.display = 'none';
    input.value = ''; // También borramos el input para forzar que suba otra imagen
}

// Verificar si la palabra encontrada corresponde con la imagen actual
async function escanearImagen() {
    const archivo = input.files[0];
    if (!archivo) {
        resultado.textContent = '⚠️ Por favor selecciona una imagen.';
        return;
    }

    const reader = new FileReader();
    reader.onload = async () => {
        const base64 = reader.result;
        const formData = new FormData();
        formData.append('isTable', 'false');
        formData.append('OCREngine', '2'); // OCR Engine 2 es mejor con manuscrita
        formData.append('base64Image', base64);
        formData.append('language', 'spa'); // Cambia a 'eng' si es necesario
        formData.append('apikey', 'K84777560588957'); // Tu clave API

        loader.style.display = 'block';
        resultado.textContent = '';

        try {
            const response = await fetch('https://api.ocr.space/parse/image', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();
            const texto = data.ParsedResults?.[0]?.ParsedText?.toLowerCase() || "";

            // Normalizar texto y palabra esperada
            const textoNormalizado = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            const palabraEsperada = palabrasSilabas[f].normalize('NFD').replace(/[\u0300-\u036f]/g, '');

            if (textoNormalizado.includes(palabraEsperada)) {
                resultado.innerHTML = `✅ ¡Correcto! La palabra es <strong>${palabraEsperada}</strong>`;
                const speech = new SpeechSynthesisUtterance("Correcto, la palabra es " + palabraEsperada);
                speech.lang = 'es-ES';
                window.speechSynthesis.speak(speech);
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Correcto",
                    showConfirmButton: false,
                    timer: 3000
                });
            } else {
                resultado.innerHTML = `❌ Incorrecto. Esta imagen debe tener la palabra <strong>${palabraEsperada}</strong>`;
                const speech = new SpeechSynthesisUtterance("Incorrecto. Esta imagen debe tener la palabra " + palabraEsperada);
                speech.lang = 'es-ES';
                window.speechSynthesis.speak(speech);
                Swal.fire({
                    position: "top-center",
                    icon: "error",
                    title: "Incorrecto",
                    showConfirmButton: false,
                    timer: 3000
                });
            }
        } catch (err) {
            resultado.textContent = "❌ Error al procesar la imagen.";
            console.error(err);
        } finally {
            loader.style.display = 'none';
        }
    };
    reader.readAsDataURL(archivo);
}

// Eventos para cambiar de ejercicio con las flechas
imgLeft.addEventListener('click', () => {
    f = (f - 1 + imgExercises.length) % imgExercises.length;
    updateIMG();
    limpiarEscaneoAnterior();
});

imgRight.addEventListener('click', () => {
    f = (f + 1) % imgExercises.length;
    updateIMG();
    limpiarEscaneoAnterior();
});

// Botón de escanear (para iniciar el escaneo)
document.getElementById('escanear-btn').addEventListener('click', escanearImagen);

// Inicializar con la primera imagen
updateIMG();

