import { getElementFrom } from '../utils/getElementFrom.js';
import { makeNavLinkActive } from '../utils/navLinks.js';
import { createTrainingsPageTemplate } from '../templates/trainingsPage.js';
import { getTrainings } from '../model/trainingManager.js';
import { createTrainingCard } from '../components/trainingCard.js';

// ...
const createHome = (navbar, mainContainer) => {
    updateNavbarNavLinks(navbar);
    populateMainContainer(mainContainer);
};

// ...
const updateNavbarNavLinks = navbar => { 
    const homeLink = getElementFrom('.nav-link[href="#"]', navbar);
    makeNavLinkActive(homeLink); 
};

// ...
const populateMainContainer = mainContainer => {
    const template = createTrainingsPageTemplate();
    populateTemplate(template);
    mainContainer.appendChild(template);
}

// ...
const populateTemplate = template => {
    const mainSection = getElementFrom('#mainSection', template);
    populateMainSection(mainSection);
};

// ...
const populateMainSection = mainSection => {
    const heading = getElementFrom('#headingMainSection', mainSection);
    heading.textContent = 'I tuoi Allenamenti';
    const trainingsDiv = getElementFrom('#trainingsDiv', mainSection)
    populateTrainingsDiv(trainingsDiv);
};

// ...
const populateTrainingsDiv = trainingsDiv => {
    const trainings = getTrainings();
    trainings.forEach(training => {
        const card = createTrainingCard(training);
        trainingsDiv.appendChild(card);
    });
};

export {
    createHome
};