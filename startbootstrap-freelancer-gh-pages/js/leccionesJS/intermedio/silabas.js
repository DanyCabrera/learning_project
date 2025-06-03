const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function createLetter() {
    const letter = document.createElement('div');
    letter.className = 'letter';
    letter.textContent = letters.charAt(Math.floor(Math.random() * letters.length));
    letter.style.left = `${Math.random() * 80}vw`;
    letter.style.top = `${Math.random() * 100}vh`;
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

const recognition = new webkitSpeechRecognition();
recognition.continuous = false;
recognition.lang = 'es-ES';
recognition.interimResults = false;

const mensajeBienvenida = "Bienvenido a la lección de las sílabas, palabras simples. Escucha y repite las palabras que se te presentarán, en el modúlo dos vas a poder practicar a pronunciar las palabras, Al final encontrarás ejercicios que te ayudaran a reforzar la pronunciación de las letras que aprenderas a lo largo de este módulo ¡Vamos a comenzar!";
let l = false;
window.addEventListener('load', () => {
    if (!l) {
        const speech = new SpeechSynthesisUtterance(mensajeBienvenida);
        speech.volume = 1;
        speech.rate = 1.5;
        speech.pitch = 0.4;
        speech.lang = 'es-ES';
        window.speechSynthesis.speak(speech);
    }
    l = true;
});

const micSilaba = document.getElementById('micSilaba'); //micrfono
const imagenSilaba = document.getElementById('imgSilaba'); //imagenes
const flechaIzquierda2 = document.getElementById('arrowLeft2'); //flecha izquierda
const flechaDerecha2 = document.getElementById('arrowRight2'); //flecha derecha

(() => {
    let index = 0;
    const imgSilaba = [
        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/1.png" alt=""  width="250">',
        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/2.png" alt=""  width="250">',
        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/3.png" alt=""  width="250">',
        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/4.png" alt=""  width="250">',
        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/5.png" alt=""  width="250">',
        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/6.png" alt=""  width="250">',
        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/7.png" alt=""  width="250">',
        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/8.png" alt=""  width="250">',
        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/9.png" alt=""  width="250">',
        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/10.png" alt=""  width="250">',
        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/11.png" alt=""  width="250">',
        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/12.png" alt=""  width="250">',
        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/13.png" alt=""  width="250">',
        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/14.png" alt=""  width="250">',
        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/15.png" alt=""  width="250">',
        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/16.png" alt=""  width="250">',

        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/17.png" alt=""  width="250">',
        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/18.png" alt=""  width="250">',

        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/20.png" alt=""  width="250">',
        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/21.png" alt=""  width="250">',
        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/22.png" alt=""  width="250">',
        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/23.png" alt=""  width="250">',
        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/24.png" alt=""  width="250">',
        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/25.png" alt=""  width="250">',
        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/26.png" alt=""  width="250">',
        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/27.png" alt=""  width="250">',
        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/28.png" alt=""  width="250">',
        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/29.png" alt=""  width="250">',
        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/30.png" alt=""  width="250">',
        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/31.png" alt=""  width="250">',
        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/32.png" alt=""  width="250">',
        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/33.png" alt=""  width="250">',
        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/34.png" alt=""  width="250">',
        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/35.png" alt=""  width="250">',
        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/36.png" alt=""  width="250">',
        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/37.png" alt=""  width="250">',
        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/38.png" alt=""  width="250">',
        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/39.png" alt=""  width="250">',
        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/40.png" alt=""  width="250">',
        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/41.png" alt=""  width="250">',
        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/42.png" alt=""  width="250">',
        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/43.png" alt=""  width="250">',
        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/44.png" alt=""  width="250">',
        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/45.png" alt=""  width="250">',
        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/46.png" alt=""  width="250">',
        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/47.png" alt=""  width="250">',
        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/48.png" alt=""  width="250">',
        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/49.png" alt=""  width="250">',
        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/50.png" alt=""  width="250">',
        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/51.png" alt=""  width="250">',
        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/52.png" alt=""  width="250">',
        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/53.png" alt=""  width="250">',
        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/54.png" alt=""  width="250">',
        '<img src="./assets/img/intermedio/El texto del párrafo/El texto del párrafo/55.png" alt=""  width="250">',

    ];
    const palabraSilaba = [
        'Esta es la letra M. Con la eme formamos las siguientes sílabas. ma, me, mi, mo, mu. ahora escucha y repite conmigo otra vez. ma. me. mi. mo. mu. Por ejemplo, en la palabra, MAMÁ.',
        'Esta es la letra P. Con la P formamos las siguientes sílabas. pa, pe, pi, po, pu. ahora escucha y repite conmigo otra vez. pa. pe. pi. po. pu. Por ejemplo, en la palabra, PAPÁ.',
        'Esta es la letra S. Con la S formamos las siguientes sílabas. sa, se, si, so, su. ahora escucha y repite conmigo otra vez. sa. se. si. so. su. Por ejemplo, en la palabra, sapo.',
        'Estas son las combinaciones, as, es, is, os, us. escucha y repite conmigo. AS. ES. IS. OS. us. por ejemplo, en la palabra, papas.',
        'Esta es la letra L. Con la L formamos las siguientes sílabas. la, le, li, lo, lu. ahora escucha y repite conmigo otra vez. la. le. li. lo. lu. Por ejemplo en la palabra, lupa.',
        'Esta es la letra D. Con la D formamos las siguientes sílabas. da, de, di, do, du. ahora escucha y repite conmigo otra vez. da. de. di. do. du. Por ejemplo, en la palabra. dedo.',
        'Estas son las combinaciones, al, el, il, ol, ul. Ahora escucha y repite conmigo otra vez. al. el. il. ol. ul. Por ejemplo, en la palabra. sol.',
        'Esta es la letra N. Con la N formamos las siguientes sílabas. na, ne, ni, no, nu. ahora escucha y repite conmigo. na. ne. ni. no. nu. Por ejemplo, en la palabra. nido.',
        'Estas son las combinaciones, an, en, in, on, un. ahora escucha y repite conmigo. AN. EN. IN. ON. UN. Por ejemplo, en la palabra. ensalada.',
        'Esta es la letra T. Con la T formamos las siguientes sílabas. ta, te, ti, to, tu. ahora escucha y repite conmigo. ta. te. ti. to. tu. Por ejemplo, en la palabra. tomate.',
        'Esta es la letra R suave. Con la R formamos las siguientes sílabas. ra, re, ri, ro, ru. ahora escucha y repite conmigo. ra. re. ri. ro. ru. por ejemplo, en la palabra. rosa.',
        'Estas son las combinaciones, ar, er, ir, or, ur. Ahora escucha y repite conmigo. AR. ER. IR. OR. UR. Por ejemplo, en la palabra. arpa.',
        'Estas son las combinaciones, rra, rre, rri, rro, rru. ahora escucha y repite conmigo. rra. rre. rri. rro. rru. La doble R suena fuerte, Por ejemplo, en la palabra. perro.',
        'Esta es la letra F. Con la F formamos las siguientes sílabas. fa, fe, fi, fo, fu. ahora escucha y repite conmigo. fa. fe. fi. fo. fu. Por ejemplo, en la palabra. sofá.',
        'Esta es la letra C. Con la C formamos las siguientes sílabas. ca, co, cu. ahora escucha y repite conmigo. ca. co. cu. Por ejemplo, en la palabra. casa.',
        'Esta es la letra G. Con la G formamos las siguientes silabas. ga, go, gu. Ahora escucha y repite conmigo. ga. go. gu. Por ejemplo, en la palabra. gato.',
        //seguir desde aca
        'Estas son las combinaciones, GUE. GUI. Escucha y repite conmigo. GUE. GUI. Por ejemplo. gui. en la palabra águila.',
        'Esta es la combinación, GÜE. GÜI. Escucha y repite conmigo. GÜE. GÜI. La diéresis hace que la U suene. Por ejemplo en la palabra pingüino.',
        'Esta es la letra B, Con la B formamos las sílabas. ba. be. bi. bo. bu. Escucha y repite conmigo. ba. be. bi. bo. bu. Por ejemplo. bu. en la palabra burro.',
        'Esta es la letra Q, Siempre va con la U y forma, que. y qui. Escucha y repite conmigo. que. qui. Por ejemplo. que. en la palabra queso.',
        'Estas son las combinaciones, AM. EM. IM. OM. UM. Escucha y repite conmigo. AM. EM. IM. OM. UM. Por ejemplo. am. como en campana.',
        'Estas son las combinaciones, AI. AU. EI. EU. Escucha y repite conmigo. AI. AU. EI. EU. Por ejemplo. ai. en la palabra caimán.',
        'Estas son las combinaciones, IA. UA. IE. UE. Escucha y repite conmigo. IA. UA. IE. UE. Por ejemplo. ia. en la palabra piano.',
        'Estas son las combinaciones, IO. IU. OI. UI. Escucha y repite conmigo. IO. IU. OI. UI. Por ejemplo. io. en la palabra canario.',
        'Estas son las combinaciones, AE. AO. EA. EO. Escucha y repite conmigo. AE. AO. EA. EO. Por ejemplo. ao. en la palabra cacao.',
        'Estas son las combinaciones, OA. OE. EE. OO. Escucha y repite conmigo. OA. OE. EE. OO. Por ejemplo. ee. en la palabra leer.',
        'Estas son las combinaciones, CLA. CLE. CLI. CLO. CLU. Escucha y repite conmigo. CLA. CLE. CLI. CLO. CLU. Por ejemplo. cli. en la palabra clínica.',
        'Estas son las combinaciones, CRA. CRE. CRI. CRO. CRU. Escucha y repite conmigo. CRA. CRE. CRI. CRO. CRU. Por ejemplo. cra. en la palabra cráter.',
        'Estas son las combinaciones, BRA. BRE. BRI. BRO. BRU. Escucha y repite conmigo. BRA. BRE. BRI. BRO. BRU. Por ejemplo. bra. en la palabra cabra.',
        'Estas son las combinaciones, BLA. BLE. BLI. BLO. BLU. Escucha y repite conmigo. BLA. BLE. BLI. BLO. BLU. Por ejemplo. blo. en la palabra pueblo.',
        'Estas son las combinaciones, PRA. PRE. PRI. PRO. PRU. Escucha y repite conmigo. PRA. PRE. PRI. PRO. PRU. Por ejemplo. pro. en la palabra profesora.',
        'Estas son las combinaciones, PLA. PLE. PLI. PLO. PLU. Escucha y repite conmigo. PLA. PLE. PLI. PLO. PLU. Por ejemplo. pla. en la palabra planeta.',
        'Estas son las combinaciones, TRA. TRE. TRI. TRO. TRU. Escucha y repite conmigo. TRA. TRE. TRI. TRO. TRU. Por ejemplo. tre. en la palabra tren.',
        'Estas son las combinaciones, TLA. TLE. TLI. TLO. TLU. Escucha y repite conmigo. TLA. TLE. TLI. TLO. TLU. Por ejemplo. tla. en la palabra atletas.',
        'Estas son las combinaciones, CHA. CHE. CHI. CHO, CHU. Escucha y repite conmigo. CHA. CHE. CHI. CHO, CHU. Por ejemplo. cha. en la palabra plancha.',
        'Esta es la letra UVE. Con la uve formamos las sílabas, va. ve. vi. vo. vu. Escucha y repite conmigo. va. ve. vi. vo. vu. Por ejemplo. va. en la palabra vaca.',
        'Esta es la letra enie. Con la enie formamos las sílabas, nia. niee. ñi. nio. niu. Escucha y repite conmigo. nia. niee. ñi. nio. niu. Por ejemplo. nia. en la palabra piniata.',
        'Esta es la letra H. No tiene sonido, pero acompaña a las vocales, Por ejemplo la palabra hipopótamo.',
        'Estas son las combinaciones, FRA. FRE. FRI. FRO. FRU. Escucha y repite conmigo. FRA. FRE. FRI. FRO. FRU. Por ejemplo. fru. en la palabra frutas.',
        'Estas son las combinaciones, FLA. FLE. FLI. FLO. FLU. Escucha y repite conmigo. FLA. FLE. FLI. FLO. FLU. Por ejemplo. fla. en la palabra flores.',
        'Estas son las combinaciones, GLA. GLE. GLI. GLO. GLU. Escucha y repite conmigo. GLA. GLE. GLI. GLO. GLU. Por ejemplo. glú. en la palabra iglú.',
        'Estas son las combinaciones, GRA. GRE. GRI. GRO. GRU. Escucha y repite conmigo. GRA. GRE. GRI. GRO. GRU. Por ejemplo. gre. en la palabra tigre.',
        'Estas son las combinaciones, DRA. DRE. DRI. DRO. DRU. Escucha y repite conmigo. DRA. DRE. DRI. DRO. DRU. Por ejemplo. dri. en la palabra golondrina.',
        'Esta es la letra J. Con la J formamos las sílabas, ja. je. ji. jo. ju. Escucha y repite conmigo. ja. je. ji. jo. ju. Por ejemplo. ji. en la palabra jirafa.',
        'Estas son las combinaciones, GE. GI. Escucha y repite conmigo. GE. GI. Por ejemplo. ge. en la palabra gemelos.',
        'Esta es la letra LL. Con la LL formamos las sílabas, lla. lle. lli. llo. llu. Escucha y repite conmigo. lla. lle. lli. llo. llu. Por ejemplo. llu. en la palabra lluvia.',
        'Esta es la letra Y. Con la Y formamos las sílabas, ya. ye. yi. yo. yu. Escucha y repite conmigo. ya. ye. yi. yo. yu. Por ejemplo. ye. en la palabra yema.',
        'Estas son las combinaciones, AY. EY. OY. UY. Escucha y repite conmigo. AY. EY. OY. UY. Por ejemplo. ey. En la palabra maguey.',
        'Esta es la letra K. Con la K formamos, ka. ke. ki. ko. ku. Escucha y repite conmigo. ka. ke. ki. ko. ku. Por ejemplo. ko. en la palabra koala.',
        'Esta es la letra Z. Con la Z formamos, za. zo. zu. Escucha y repite conmigo. za. zo. zu. Por ejemplo. zo. en la palabra zorro.',
        'Esta es la letra C, y tenemos combinaciones, CE. CI. Escucha y repite conmigo. CE. CI. Por ejemplo. ce. en la palabra cebra',
        'Esta es la letra w, y formamos las sílabas, wa. we. wi. wo. Escucha y repite conmigo. wa. we. wi. wo. Por ejemplo. wi. en la palabra kiwi',
        'Esta es la letra x, y formamos las sílabas, xa. xe. xi. xo. xu. Escucha y repite conmigo. xa. xe. xi. xo. xu. Por ejemplo. xi. en la palabra xilófono',
        'Estas son las combinaciones, ax. ex. ix. ox. ux. Escucha y repite conmigo. ax. ex. ix. ox. ux. por ejemplo. ix. en la palabra Fél ix',
    ];
    // Función para actualizar la imagen
    function actualizarImagen() {
        imagenSilaba.innerHTML = imgSilaba[index];
    }

    // Función para leer la palabra en voz alta
    function leerPalabra(palabra) {
        const speech = new SpeechSynthesisUtterance(palabra);
        speech.lang = "es-ES";
        speech.rate = 1;
        speech.pitch = 0.3;
        window.speechSynthesis.speak(speech);
    }

    // Event listeners para las flechas
    flechaIzquierda2.addEventListener('click', () => {
        index = (index - 1 + imgSilaba.length) % imgSilaba.length;
        actualizarImagen();
    });

    flechaDerecha2.addEventListener('click', () => {
        index = (index + 1) % imgSilaba.length;
        actualizarImagen();
    });

    // Event listener para el micrófono
    micSilaba.addEventListener('click', () => {
        actualizarImagen();
        leerPalabra(palabraSilaba[index]);
    });

    // Inicializar la primera imagen
    actualizarImagen();
})();

