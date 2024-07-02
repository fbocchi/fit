import { getExercises } from '../model/exercisesManager.js';
import { createExercisesPageTemplate } from '../templates/exercisesPage.js';
import { createExercisesTableRow } from '../components/exercisesTableRow.js';

const createTrainingPage = (header, mainContainer, training) => {
    // Retrieve navbar
    const navbar = header.querySelector('nav');

    // Set current navbar nav link
    setCurrentNavbarNavLink(navbar);

    console.log('A')

    // Clear main container
    clearMainContainer(mainContainer);

    console.log('B')

    // Populate main container
    populateMainContainer(mainContainer, training);

    console.log('C')
};

const setCurrentNavbarNavLink = (navbar) => {
    // Retrieve Home link
    const homeLink = navbar.querySelector('.nav-link[href="#"]'); // # sarà da aggiornare!!!
    
    // Make Home link not active
    homeLink.classList.remove('active');
    homeLink.removeAttribute('aria-current');
};

const clearMainContainer = (mainContainer) => {
    mainContainer.innerHtml = '';
};

const populateMainContainer = (mainContainer, training) => {
    // Create template
    const exercisesPageTemplate = createExercisesPageTemplate();

    // Append template to main container
    mainContainer.appendChild(exercisesPageTemplate);

    // Populate template with training exercises
    populateTemplate(exercisesPageTemplate, training);

};

const populateTemplate = (template, training) => {
    // Retrieve main section
    const mainSection = template.querySelector('#mainSection');

    // Retrieve heading
    const heading = mainSection.querySelector('#headingMainSection');

    // Set heading to training name
    setHeadingToTrainingName(heading, training.name); 

    // Retrieve exericises table
    const exercisesTable = mainSection.querySelector('#exercisesTable');

    // Populate exercises table with training exercises 
    populateExercisesTableWithTrainingExercises(exercisesTable, training.id);
};

const setHeadingToTrainingName = (heading, trainingName) => {
    // Set heading to training name
    heading.textContent = trainingName;
};

const populateExercisesTableWithTrainingExercises = (exercisesTable, trainingId) => {

    // Retrieve table body
    const tbody = exercisesTable.querySelector('tbody');
    
    // Get all exercises
    const exercises = getExercises(trainingId);

    // Add exercises to table (in their "position" order!)
    exercises.forEach(exercise => {
        // Create table row with exercises
        const tr = createExercisesTableRow(exercise);

        // Append row to table
        tbody.appendChild(tr);
    });

};

export {
    createTrainingPage
}