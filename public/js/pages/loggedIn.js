import { createHome } from "./home.js";
import { createAdminHome } from "./admin/home.js";
import { createNavbar } from "../components/navbar.js";
import { createAdminNavBar} from "./admin/components/navbar.js";

// ...
const populateHeader = (isAdmin, header) => {
    const navbar = null;
    if (isAdmin) {
        navbar = createAdminNavBar();
    } else {
        navbar = createNavbar();
    }
    header.appendChild(navbar);
};

// ...
const populateMainContainer = (isAdmin, mainContainer) => {
    // A questo livello il mainContainer non dovrebbe cambiare tra admin e regular

    // flex-container
    // Però, almeno per ora, il main dell'admin non è diviso in due sezioni, ma ha un'unica sezione con una tabella
};

// ...
const createLoggedInPage = (isAdmin, header, mainContainer) => {
    populateHeader(isAdmin, header);
    populateMainContainer(mainContainer);
    if (isAdmin) {
        createAdminHome();
    } else {
        createHome(header, mainContainer);
    }
};

export {
    createLoggedInPage
};