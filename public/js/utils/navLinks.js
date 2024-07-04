
// ...
const makeNavLinkActive = navLink => {
    navLink.classList.add('active');
    navLink.setAttribute('aria-current', 'page');
};

// ...
const makeNavLinkInactive = navLink => {
    navLink.classList.remove('active');
    navLink.removeAttribute('aria-current');
};

export {
    makeNavLinkActive,
    makeNavLinkInactive
}