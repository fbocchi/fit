import { createMainSectionAndFormAsideTemplate } from "../templates/mainSectionAndAside.js";
import { createExerciseFormInAside } from "../components/exerciseForm.js";
import { getExercises } from '../model/exercisesManager.js';

const createExercisesPageTemplate = () => {
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
    // Create exercises div
    const exercisesDiv = createExercisesDiv();

    // Append exercises div to main serction
    mainSection.appendChild(exercisesDiv);
};

const createExercisesDiv = () => {
    // Create exercises div
    const exercisesDiv = document.createElement('div');
    exercisesDiv.classList.add('mt-1', 'p-1');

    // Create table responsive div
    const tableResponsiveDiv = document.createElement('div');
    tableResponsiveDiv.classList.add('table-responsive', 'p-1');

    // Create exercises table template
    const exerciseTableTemplate = createExerciseTableTemplate();

    // Append exercises table to table responsive div
    tableResponsiveDiv.appendChild(exerciseTableTemplate);
    
    // Append exercises table to exercises div
    exercisesDiv.appendChild(tableResponsiveDiv);

    return exercisesDiv;
};

const createExerciseTableTemplate = () => {
    // Create exercises table
    const table = document.createElement('table');
    table.classList.add('table', 'table-sm', 'table-hover', 'table-striped', 'm-0', 'align-middle');
    table.id = 'exercisesTable';

    // Crate thead
    const thead = document.createElement('thead');
    thead.classList.add('table-dark');

    // Create tr for thead
    const theadRow = document.createElement('tr');

    // Define headers names
    const headersNames = [ '#', 'ID', 'Nome', 'Serie', 'Durata', 'Ripetizioni', 'Peso', ''];

    // Create table headers (ths)
    const ths = [];
    headersNames.forEach(name => {
        // Create th
        const th = document.createElement('th');
        th.scope = 'col';
        th.textContent = name;

        // Add th to table headers
        ths.push(th);
    });

    // Append ths to thead row
    ths.forEach(th => {
        theadRow.appendChild(th);
    });

    // Append thead row to thead
    thead.appendChild(theadRow);

    // Append thead to table
    table.appendChild(thead);

    // Create tbody
    const tbody = document.createElement('tbody');

    // Una tr va creata a partire da un esercizio!!! (template o components, molto simile a card)

    // Append tbody to table
    table.appendChild(tbody);
    
    return table;
};

const populateFormAside = (formAside) => {
    // Set aside heading
    setAsideHeading(formAside);

    // Create form
    createForm(formAside);
};

const setAsideHeading = (formAside) => {
    // Retrieve heading
    const heading = formAside.querySelector('#headingFormAside');
    
    // Set heading
    heading.textContent = 'Crea esercizio';
};

const createForm = (formAside) => {
    // Retrieve form div
    const formDiv = formAside.querySelector('#formDiv');

    // Create training form
    const form = createExerciseFormInAside();

    // Append form to its div
    formDiv.appendChild(form);
};

export {
    createExercisesPageTemplate
};