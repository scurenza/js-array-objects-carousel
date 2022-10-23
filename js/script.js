// Consegna:
// Dato un array di oggetti letterali con:
//  - url dell’immagine
//  - titolo
//  - descrizione
// Creare un carosello come nella foto allegata. Attenzione! Le immagini nello screenshot sono differenti da quelli  che vi invio, ma il layout non cambia.
// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
// BONUS 1:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
// BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
// BONUS 3:
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

// Dati
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const items = document.querySelector(".items");
const thumbs = document.querySelector(".thumbs");

// Popolo lo slider principale con le img
insertItem();

// Popolo i thumbs con le img
insertThumb();

// STATO INIZIALE DELLO SLIDER
const sliderItems = document.getElementsByClassName("item");
const thumbItems = document.getElementsByClassName("thumb");

let activeItem = 0;
sliderItems[activeItem].classList.add("active");
thumbItems[activeItem].classList.add("active");

// Spostarsi all'interno dello slider
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

// Azione al click del bottone "avanti"
nextBtn.addEventListener("click", function () {
    // Funzione per poter passare all'immagine successiva

    // Rimuovo l'active all'immagine "precedente"
    sliderItems[activeItem].classList.remove("active");
    thumbItems[activeItem].classList.remove("active");

    // Aggiungo l'active all'immagine "succesiva" SE POSSO
    if (activeItem < sliderItems.length - 1) {
        activeItem++;
    } else {
        activeItem = 0;
    }

    // Mostro l'immagine "successiva"
    sliderItems[activeItem].classList.add("active");
    thumbItems[activeItem].classList.add("active");
});

// Azione al click del bottone "indietro"
prevBtn.addEventListener("click", function() {
    // Rimuovo l'active all'immagine "precedente"
    sliderItems[activeItem].classList.remove("active");
    thumbItems[activeItem].classList.remove("active");

     // Aggiungo l'active all'immagine "precendente" SE POSSO
     if (activeItem > 0) {
        activeItem--;
    } else {
        activeItem = sliderItems.length - 1;
    }

    // Mostro l'immagine "precendente"
    sliderItems[activeItem].classList.add("active");
    thumbItems[activeItem].classList.add("active");
});


// Aggiungere eventListener ad ogni img del thumb

for (let i = 0; i < thumbItems.length; i++) {
    const thisThumb = thumbItems[i]

    thisThumb.addEventListener("click", function() {

        // Rimuovo lo stato di active dall'elemento corrente
        thumbItems[activeItem].classList.remove("active");
        sliderItems[activeItem].classList.remove("active");
    
        // Assegno ad activeItem il valore di index
        activeItem = i;
    
        // Aggiungo lo stato active all'elemento selezionato
        thumbItems[activeItem].classList.add("active");
        sliderItems[activeItem].classList.add("active");
})};

// Imposto l'autoplay
const autoplay = setInterval(autoplayFunction, 3000);
// const revertAutoplay = setInterval(revertAutoplayFunction, 3000);
const stopBtn = document.getElementById("stop-autoplay");
const invertBtn = document.getElementById("invert-autoplay");
let isRevertAutoplay = false;



// Fermo l'autoplay
stopBtn.addEventListener("click", function() {
    clearInterval(autoplay);
})

// Inverto l'autoplay
invertBtn.addEventListener("click", function() {
    isRevertAutoplay = true;
})



/**
 * Funzione per gestire l'autoplay
 * @returns {any} senso di visualizzazione delle immagini
 */
function autoplayFunction () {
    if(!isRevertAutoplay) {
                // Rimuovo l'active all'immagine "precedente"
                sliderItems[activeItem].classList.remove("active");
                thumbItems[activeItem].classList.remove("active");
            
                // Aggiungo l'active all'immagine "succesiva" SE POSSO
                if (activeItem < sliderItems.length - 1) {
                    activeItem++;
                } else {
                    activeItem = 0;
                }
            
                // Mostro l'immagine "successiva"
                sliderItems[activeItem].classList.add("active");
                thumbItems[activeItem].classList.add("active");
    } else {
                // Rimuovo l'active all'immagine "precedente"
                sliderItems[activeItem].classList.remove("active");
                thumbItems[activeItem].classList.remove("active");
            
                    // Aggiungo l'active all'immagine "precendente" SE POSSO
                    if (activeItem > 0) {
                    activeItem--;
                } else {
                    activeItem = sliderItems.length - 1;
                }
            
                // Mostro l'immagine "precendente"
                sliderItems[activeItem].classList.add("active");
                thumbItems[activeItem].classList.add("active");
    }
};



/**
 * Funzione per popolare lo slider principale con immagine e testi
 * @returns {array}
 */
function insertItem () { images.forEach(element => {
    items.innerHTML += `        <div class="item">
                                    <div class="item-text">
                                        <h2 id="itemTitle">${element.title}</h2>
                                        <p id="itemPar">
                                            ${element.text}                                            
                                        </p>
                                    </div>
                                    <img src="${element.image}" alt="Supereroe" />
                                </div>`
})};


/**
 * Funzione per popolare i thumbs con le immagini
 * @returns {array}
 */
function insertThumb () { images.forEach(elemento => {
    thumbs.innerHTML += `       <div class="thumb">
                                    <img src="${elemento.image}" alt="Supereroe" />
                                </div>`
})};













// let item = [];

// images.forEach(element => {
    
//     item.push(element);
// });

// console.log(item);