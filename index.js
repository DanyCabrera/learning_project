const mensajeBienvenida = "Bienvenido a Tortulingo!!";//"Bienvenido a Tortulingo, Para empezar, necesitamos saber tu nombre. Pulsa el botón rojo y di tu nombre en voz alta. Luego, pulsa el botón amarillo para ingresar, Dentro de la aplicación encontraras tres modúlos de diferentes aprendizajes.";
let m = false;


// Función para leer el mensaje de bienvenida
function leerBienvenida() {
    const speech = new SpeechSynthesisUtterance(mensajeBienvenida);
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 0.4;
    speech.lang = 'es-ES';

    window.speechSynthesis.speak(speech);
}

// Escuchar el evento DOMContentLoaded para leer la bienvenida una vez al cargar la página
window.addEventListener("DOMContentLoaded", () => {
    if (!m) {
        leerBienvenida();
        m = true;
    }
});

//funciones para iniciar sesion y reconocimiento de voz
/*
function iniciarSesion() {
    const nombre = document.getElementById("nombre").value.trim();
    if (nombre === "") {
        const mensajeError = "Por favor, ingrese su nombre.";
        let m = false;
        if (!m) {
            const speech = new SpeechSynthesisUtterance(mensajeError);
            speech.lang = "es-ES";
            speech.rate = 1;
            speech.pitch = 1;
            speech.volume = 1;
            window.speechSynthesis.speak(speech);
            m = true;
        }
        return;
    } else {
        const mensajeBienvenida = "Bienvenido, " + nombre;
        const speech = new SpeechSynthesisUtterance(mensajeBienvenida);
        speech.lang = "es-ES";
        speech.rate = 1;
        speech.pitch = 1;
        speech.volume = 1;
        window.speechSynthesis.speak(speech);
    }
    window.location.href = "/startbootstrap-freelancer-gh-pages/First.html";
}

function iniciarReconocimiento() {
    const palabrasNoReconocidas = [
        'hola',
        'mi nombre es',
        'me llamo',
        'soy',
        'buenos dias',
        'buenas tardes',
        'buenas noches',
        'hola, soy',
        'hola, mi nombre es',
        'hola, me llamo',
        'buenos dias, soy',
        'buenas tardes, soy',
        'buenas noches, soy',
        'buenos dias, mi nombre es',
        'buenas tardes, mi nombre es',
        'buenas noches, mi nombre es',
        'buenos dias, me llamo',
        'buenas tardes, me llamo',
        'buenas noches, me llamo',
    ];

    const nombre = document.getElementById("nombre");
    const reconocimiento = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    reconocimiento.lang = "es-ES";
    reconocimiento.interimResults = false;

    reconocimiento.onresult = function (event) {
        let texto = event.results[0][0].transcript.toLowerCase().trim();

        // Buscar si el texto empieza con alguna frase del arreglo
        const fraseCoincidente = palabrasNoReconocidas.find(frase => texto.startsWith(frase));

        if (fraseCoincidente) {
            // Eliminar la frase coincidente del texto
            texto = texto.replace(fraseCoincidente, "").trim();
        }

        nombre.value = texto;
    };

    reconocimiento.onerror = function (event) {
        nombre.innerText = "Error: " + event.error;
    };

    reconocimiento.start();
}
*/

//funcion para mostrar el logo y el login
//const boxLogo = document.getElementById("box-logo");
//const boxLogin = document.getElementById("box-login");

window.addEventListener("load", () => {
    setTimeout(() => {
        window.location.href = "/startbootstrap-freelancer-gh-pages/First.html";
        //boxLogo.style.display = "none";
        //boxLogin.style.display = "block";
    }, 4000);
});
