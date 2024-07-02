
// ...
const createNavbar = () => {
    // Create navbar
    const nav = document.createElement('nav');
    nav.classList.add('navbar', 'navbar-expand-lg', 'bg-dark', 'border-bottom', 'border-body');
    nav.setAttribute('data-bs-theme', 'dark');

    // Create container
    const containerFluid = document.createElement('div');
    containerFluid.classList.add('container-fluid');

    // Create brand link
    const brandLink = createBrandLink();

    // Create toggler button
    const togglerButton = createTogglerButton();

    // Create navbar collapse
    const navbarCollapse = document.createElement('div');
    navbarCollapse.classList.add('collapse', 'navbar-collapse');
    navbarCollapse.id = 'navbarSupportedContent';

    // Create nav links
    const navLinks = createNavLinks();

    // Create search form
    const searchForm = createSearchForm();

    // Append nav links and search form to to navbar collapse
    navbarCollapse.appendChild(navLinks);
    navbarCollapse.appendChild(searchForm);

    // Append brand link, toggler button and navbar collapse to container
    containerFluid.appendChild(brandLink);
    containerFluid.appendChild(togglerButton);
    containerFluid.appendChild(navbarCollapse);

    // Append container to navbar
    nav.appendChild(containerFluid);

    return nav;
};

const createBrandLink = () => {
    const brandLink = document.createElement('a');
    brandLink.classList.add('navbar-brand');
    brandLink.href = '#';
    brandLink.textContent = 'FitTrackr';
    return brandLink;
};

const createTogglerButton = () => {
    const togglerButton = document.createElement('button');
    togglerButton.classList.add('navbar-toggler');
    togglerButton.type = 'button';
    togglerButton.setAttribute('data-bs-toggle', 'collapse');
    togglerButton.setAttribute('data-bs-target', '#navbarSupportedContent');
    togglerButton.setAttribute('aria-controls', 'navbarSupportedContent');
    togglerButton.setAttribute('aria-expanded', 'false');
    togglerButton.setAttribute('aria-label', 'Toggle navigation');
    togglerButton.innerHTML = '<span class="navbar-toggler-icon"></span>';
    return togglerButton;
};

const createNavLinks = () => {
    const navLinks = document.createElement('div');
    navLinks.classList.add('navbar-nav', 'me-auto', 'mb-2', 'mb-lg-0');
    
    const homeLink = createLink('Home', '#');
    const discoverLink = createLink('Scopri', '#');
    
    navLinks.appendChild(homeLink);
    navLinks.appendChild(discoverLink);
    
    return navLinks;
};


const createLink = (text, href) => {
    const link = document.createElement('a');
    link.classList.add('nav-link');
    link.href = href;
    link.textContent = text;
    return link;
};

const createSearchForm = () => {
    const searchForm = document.createElement('form');
    searchForm.classList.add('d-flex'); 
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
    
    return searchForm;
};

export {
    createNavbar
};