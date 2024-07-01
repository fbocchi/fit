

// Funzione di supporto per creare un link di navigazione
function createNavLink(text, href) {
    const link = document.createElement('a');
    link.classList.add('nav-link');
    link.href = href;
    link.textContent = text;
    return link;
}

// ...
const createNavbar = () => {
    // Creazione degli elementi HTML
    const nav = document.createElement('nav');
    nav.classList.add('navbar', 'navbar-expand-lg', 'bg-dark', 'border-bottom', 'border-body');
    nav.setAttribute('data-bs-theme', 'dark');

    const containerFluid = document.createElement('div');
    containerFluid.classList.add('container-fluid');

    const brandLink = document.createElement('a');
    brandLink.classList.add('navbar-brand');
    brandLink.href = '#';
    brandLink.textContent = 'FitTrackr';

    const togglerButton = document.createElement('button');
    togglerButton.classList.add('navbar-toggler');
    togglerButton.type = 'button';
    togglerButton.setAttribute('data-bs-toggle', 'collapse');
    togglerButton.setAttribute('data-bs-target', '#navbarSupportedContent');
    togglerButton.setAttribute('aria-controls', 'navbarSupportedContent');
    togglerButton.setAttribute('aria-expanded', 'false');
    togglerButton.setAttribute('aria-label', 'Toggle navigation');
    togglerButton.innerHTML = '<span class="navbar-toggler-icon"></span>';

    const navbarCollapse = document.createElement('div');
    navbarCollapse.classList.add('collapse', 'navbar-collapse');
    navbarCollapse.id = 'navbarSupportedContent';

    const navLinks = document.createElement('div');
    navLinks.classList.add('navbar-nav', 'me-auto', 'mb-2', 'mb-lg-0');
    const homeLink = createNavLink('Home', '#');
    const scopriLink = createNavLink('Scopri', '#');
    navLinks.appendChild(homeLink);
    navLinks.appendChild(scopriLink);

    const searchForm = document.createElement('form');
    searchForm.classList.add('d-flex', 'd-none'); // !!!
    searchForm.setAttribute('role', 'search');

    const searchInput = document.createElement('input');
    searchInput.classList.add('form-control', 'me-2');
    searchInput.type = 'search';
    searchInput.placeholder = 'Cerca';
    searchInput.setAttribute('aria-label', 'Cerca');

    const searchButton = document.createElement('button');
    searchButton.classList.add('btn', 'btn-outline-light');
    searchButton.type = 'submit';
    searchButton.textContent = 'Cerca';

    searchForm.appendChild(searchInput);
    searchForm.appendChild(searchButton);

    navbarCollapse.appendChild(navLinks);
    navbarCollapse.appendChild(searchForm);

    containerFluid.appendChild(brandLink);
    containerFluid.appendChild(togglerButton);
    containerFluid.appendChild(navbarCollapse);

    nav.appendChild(containerFluid);

    return nav;
};

export {
    createNavbar
};