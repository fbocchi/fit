import { createHome } from "./pages/home.js";

// Si occupa del routing verso la pagina appropriata

// La prima pagina deve sempre essere quella di login

// A seconda del tipo di utente che accede, o home oppure admin/home

// Recupera header e mainContainer da index.html
const header = document.getElementById('header');
const mainContainer = document.getElementById('mainContainer');

// e invoca createHome
createHome();

// imposta routing con page.js (le varie funzioni invocate da page.js si occuperanno di modificare header, mainContainer e body in base alla pagina gestita)