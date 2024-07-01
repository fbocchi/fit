import { createForm, createTrainingFormInAside } from '../components/trainingForm.js';

// ...
const updateNavbar = (header) => {
    // Seleziona il navbar all'interno dell'header
    const navbar = header.querySelector('nav');

    // Rendi il link Home attivo 
    const homeLink = navbar.querySelector('.nav-link[href="#"]'); // # sarà da aggiornare!!!
    if (homeLink) {
        homeLink.classList.add('active');
        homeLink.setAttribute('aria-current', 'page');
    }

    // Mostra il form di ricerca che è inizialmente nascosto
    const searchForm = navbar.querySelector('form');
    if (searchForm) {
        searchForm.classList.remove = 'd-none';
    }
};


const craeteMainSection = () => {

};

const createFormInAside = (form) => {
    // Stilizza il form come nell'aside
};

const createAside = () => {

    // Il form va creato con la funzione, ma stilizzato qui, perchè non deve essere stilizzato così da nessuna altra parte
    // cioè viene fatto solo qui e quindi non ha senso avere una funzione in un altro file che lo faccia perché non deve
    // deve essere riutilizzata da nessuno

    const form = createForm();
    createTrainingFormInAside(form)

};

const populateMainContainer = (mainContainer) => {

    // create flex-container

    // flex-items
    
    const mainSection = craeteMainSection();
        // intestazione
            // ...
        // filtri
            // ...
        // trainings
            // cards

    const aside = createAside();
        // sticky
            // instestazione
            // form

    // aggiungili a flex-container

    // fab e modale?

}

// ...
const createHome = (header, mainContainer) => {
    updateNavbar(header);
    populateMainContainer(mainContainer);
    // fab e modale?
};

export {
    createHome
};