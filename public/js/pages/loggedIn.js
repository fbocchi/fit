import { createHome } from "./home.js";
import { createAdminHome } from "./admin/home.js";
import { createNavbar } from "../components/navbar.js";
import { createAdminNavbar } from "./admin/components/navbar.js";
import { initRouter } from "../router.js";

// ...
const populateHeader = (isAdmin, header) => {
    const navbar = isAdmin ? createAdminNavbar() : createNavbar();
    header.appendChild(navbar);
};


import { createTrainingPage } from "./training.js";

// ...
const createLoggedInPage = (isAdmin, header, mainContainer) => {
    initRouter();
    populateHeader(isAdmin, header);
    const navbar = header.querySelector('nav');
    if (isAdmin) {
        createAdminHome();
    } else {
        createTrainingPage(navbar, mainContainer, { id: 56, name: 'Sette camicie' });
        // createHome(navbar, mainContainer);
    }
};

export {
    createLoggedInPage
};