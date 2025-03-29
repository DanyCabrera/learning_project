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
    if (!instE){
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