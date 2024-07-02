import { createTrainingsPageTemplate } from '../templates/trainingsPage.js';
import { getTrainings } from '../model/trainingManager.js';
import { createTrainingCard } from '../components/trainingCard.js';

const populateTrainingsDiv = (trainingsDiv) => {
    // Get all trainings
    const trainings = getTrainings();
    
    // Populate trainings div with trainings
    trainings.forEach(training => {
        
        // Create training card
        const card = createTrainingCard(training);
        
        // Append card to trainings div
        trainingsDiv.appendChild(card);
    });
};

const populateMainSection = (mainSection) => {
    // Retrieve heading
    const heading = mainSection.querySelector('#headingMainSection');
    
    // Set heading
    heading.textContent = 'I tuoi Allenamenti';
    
    // Retrieve trainings div
    const trainingsDiv = mainSection.querySelector('#trainingsDiv'); 
    
    // Populate trainings div
    populateTrainingsDiv(trainingsDiv);
};

const populateTemplate = (template) => {
    // Retrieve main section
    const mainSection = template.querySelector('#mainSection');
    
    // Populate main section
    populateMainSection(mainSection);
};

const populateMainContainer = (mainContainer) => {
    // Create template
    const trainingsPageTemplate = createTrainingsPageTemplate();
    
    // Populate template
    populateTemplate(trainingsPageTemplate);
    
    // Append template to main container
    mainContainer.appendChild(trainingsPageTemplate);
}

// ...
const updateNavbarCurrentLink = (navbar) => { 
    // Retrieve Home link
    const homeLink = navbar.querySelector('.nav-link[href="#"]'); // # sarà da aggiornare!!!
    
    // Make Home link active 
    homeLink.classList.add('active');
    homeLink.setAttribute('aria-current', 'page');
};

// ...
const createHome = (header, mainContainer) => {
    // Retrieve navbar
    const navbar = header.querySelector('nav');
    
    // Update navbar current link
    updateNavbarCurrentLink(navbar);
    
    // Populate main container
    populateMainContainer(mainContainer);
    
    // fab e modale?
};

export {
    createHome
};