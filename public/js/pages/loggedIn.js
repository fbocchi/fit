import { createHome } from "./home.js";
import { createAdminHome } from "./admin/home.js";
import { createNavbar } from "../components/navbar.js";
import { createAdminNavbar } from "./admin/components/navbar.js";

// Invece di scrivere due funzioni separate, scrivere un'unica createNavbar
// che utilizzi isAdmin per distinguere

// Si noti che i link sono diversi, ma non è un problema: piuttosto, si scrivano
// due funzioni diverse per i link che createNavbar richiama.

// ...
const populateHeader = (isAdmin, header) => {
    const navbar = isAdmin ? createAdminNavbar() : createNavbar();
    header.appendChild(navbar);
};


import { createTrainingPage } from "./training.js";

// ...
const createLoggedInPage = (isAdmin, header, mainContainer) => {
    populateHeader(isAdmin, header);
    if (isAdmin) {
        createAdminHome();
    } else {
        createTrainingPage(header, mainContainer, { id: 56, name: 'Sette camicie' });
        // createHome(header, mainContainer);
    }
};

export {
    createLoggedInPage
};