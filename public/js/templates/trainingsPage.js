import { createMainSectionAndFormAsideTemplate } from "../templates/mainSectionAndAside.js";
import { createFiltersDiv } from "../components/filters.js";
import { createTrainingFormInAside } from "../components/trainingForm.js";

const createTrainingsPageTemplate = () => {
    // Create main section and form aside template
    const mainSectionAndFormAsideTemplate = createMainSectionAndFormAsideTemplate();

    // Populate template
    populateTemplate(mainSectionAndFormAsideTemplate);

    return mainSectionAndFormAsideTemplate;
};

const populateTemplate = (template) => {
    // Retrieve main section
    const mainSection = template.querySelector('#mainSection');
    
    // Populate main section
    populateMainSection(mainSection);

    // Retrieve form aside
    const formAside = template.querySelector('#formAside');
    
    // Populate form aside
    populateFormAside(formAside);
};

const populateMainSection = (mainSection) => {
    // Create filters div
    const filtersDiv = createFiltersDiv();
    filtersDiv.classList.add('my-1');

    // Append filters div to main section
    mainSection.appendChild(filtersDiv);

    // Create trainings div
    const trainingsDiv = document.createElement('div');
    trainingsDiv.classList.add('mt-1', 'p-1');
    trainingsDiv.id = 'trainingsDiv';

    // Append trainings div to main serction
    mainSection.appendChild(trainingsDiv);
};

const createTrainingsDiv = () => {
    // Gli allenamenti (card) potrebbero essere già creati qui,
    // se si avesse l'ID dell'utente...
};

const populateFormAside = (formAside) => {
    // Retrieve heading
    const heading = formAside.querySelector('#headingFormAside');
    
    // Set heading
    heading.textContent = 'Crea allenamento';

    // Retrieve form div
    const formDiv = formAside.querySelector('#formDiv');

    // Create training form
    const form = createTrainingFormInAside();

    // Append form to its div
    formDiv.appendChild(form);
};

export {
    createTrainingsPageTemplate
};