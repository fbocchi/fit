import { getElementFrom } from '../utils/getElementFrom.js';
import { makeNavLinkInactive } from '../utils/navLinks.js';
import { createExercisesPageTemplate } from '../templates/exercisesPage.js';
import { getExercises } from '../model/exercisesManager.js';
import { createExercisesTableRow } from '../components/exercisesTableRow.js';

// ...
const createTrainingPage = (navbar, mainContainer, training) => {
    updateNavbarNavLinks(navbar);
    clearMainContainer(mainContainer);
    populateMainContainer(mainContainer, training);
};

// ...
const updateNavbarNavLinks = navbar => {
    const homeLink = getElementFrom('.nav-link[href="#"]', navbar);
    makeNavLinkInactive(homeLink);
};

// ...
const clearMainContainer = mainContainer => {
    mainContainer.innerHtml = '';
};

// ...
const populateMainContainer = (mainContainer, training) => {
    const template = createExercisesPageTemplate();
    populateTemplate(template, training);
    mainContainer.appendChild(template);
};

// ...
const populateTemplate = (template, training) => {
    const mainSection = getElementFrom('#mainSection', template);
    populateMainSection(mainSection);
};

// ...
const populateMainSection = mainSection => {
    const heading = getElementFrom('#headingMainSection', mainSection);
    heading.textContent = training.name; 
    const exercisesTable = getElementFrom('#exercisesTable', mainSection);
    populateExercisesTableWithTrainingExercises(exercisesTable, training.id);
};

// ...
const populateExercisesTableWithTrainingExercises = (exercisesTable, trainingId) => {
    const tbody = getElementFrom('tbody', exercisesTable);
    const exercises = getExercises(trainingId);
    exercises.forEach(exercise => { // exercises must be in the correct order
        const tr = createExercisesTableRow(exercise);
        tbody.appendChild(tr);
    });
};

export {
    createTrainingPage
}