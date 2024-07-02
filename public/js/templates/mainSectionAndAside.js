
// Creates flex container with main section and form aside
const createMainSectionAndFormAsideTemplate = () => {
    // Create flex container
    const flexContainer = document.createElement('div');
    flexContainer.classList.add('d-flex', 'p-1');
    
    // Create main section
    const mainSection = createMainSection();
    mainSection.classList.add('flex-grow-1', 'me-1');

    // Create form aside
    const formAside = createFormAside();
    formAside.classList.add('d-none', 'd-lg-block', 'ms-1');

    // Append main section and form aside to flex container
    flexContainer.appendChild(mainSection);
    flexContainer.appendChild(formAside);
    
    return flexContainer;
};

const createMainSection = () => {
    // Create main section
    const mainSection = document.createElement('section');
    mainSection.classList.add('p-1');
    mainSection.id = 'mainSection';
    
    // Create div to hold heading
    const headingDivMainSection = document.createElement('div');
    headingDivMainSection.classList.add('mb-1', 'p-1');

    // Create heading
    const headingMainSection = document.createElement('h1');
    headingMainSection.classList.add('m-0');
    headingMainSection.id = 'headingMainSection';

    // Append heading to its div
    headingDivMainSection.appendChild(headingMainSection);

    // Append heading div to main section
    mainSection.appendChild(headingDivMainSection);

    return mainSection;
};

const createFormAside = () => {
    const formAside = document.createElement('aside');
    formAside.classList.add('p-1');
    formAside.id = 'formAside';

    // Create div to stick content to the top
    const stickyDiv = document.createElement('div');
    stickyDiv.classList.add('sticky-top', 'sticky-top-custom');
    
    // Create div to hold the heading
    const headingDivFormAside = document.createElement('div');
    headingDivFormAside.classList.add('mb-1', 'p-1');
    
    // Create the heading
    const headingFormAside = document.createElement('h1');
    headingFormAside.classList.add('m-0');
    headingFormAside.id = 'headingFormAside'

    // Append heading to the its div
    headingDivFormAside.appendChild(headingFormAside);
    
    // Append heading div to sticky div
    stickyDiv.appendChild(headingDivFormAside);
    
    // Create div to hold the form
    const formDiv = document.createElement('div');
    formDiv.classList.add('mt-1', 'p-1');
    formDiv.id = 'formDiv';

    // Append form div to sticky div
    stickyDiv.appendChild(formDiv);

    // Append sticky div to form aside
    formAside.appendChild(stickyDiv);

    return formAside;
};

export {
    createMainSectionAndFormAsideTemplate
};