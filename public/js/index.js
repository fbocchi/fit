import { createLoggedInPage } from "./pages/loggedIn.js";

// La prima pagina deve sempre essere quella di login

// Recupera header e mainContainer da index.html
const header = document.getElementById('header');
const mainContainer = document.getElementById('mainContainer');

createLoggedInPage(false, header, mainContainer);

// routing?