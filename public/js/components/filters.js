import { createCategoryOptions, createLevelOptions } from '../utils/selectOptions.js';

const createFiltersButton = () => {
    const filtersButton = document.createElement('button');
    filtersButton.className = 'btn btn-primary';
    filtersButton.type = 'button';
    filtersButton.dataset.bsToggle = 'collapse';
    filtersButton.dataset.bsTarget = '#filtersCollapse';
    filtersButton.ariaExpanded = 'false';
    filtersButton.ariaControls = 'filtersCollapse';
    filtersButton.id = 'filtersBtn';
    filtersButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel-fill" viewBox="0 0 16 16">
                <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5z"/>
            </svg>
            Filtri
        `;
    return filtersButton;
};

const createNoneOption = () => {
    const option = document.createElement('option');
    option.value = 'n';
    option.textContent = 'Nessuno';
    option.selected = true;
    return option;
};

const createVisibiityFilterOptions = () => {
    const options = [];
    
    // Create None option
    const noneOption = createNoneOption();
    options.push(noneOption);

    // Create Public option
    const publicOption = document.createElement('option');
    publicOption.value = 'pb';
    publicOption.textContent = 'Pubblico';
    options.push(publicOption);
    
    // Create Private option
    const privateOption = document.createElement('option');
    privateOption.value = 'pr';
    privateOption.textContent = 'Privato';
    options.push(privateOption);

    return options;
};

const createLevelFilterOptions = () => {
    // Create None options
    const noneOption = createNoneOption();
    
    // Create level options
    const levelOptions = createLevelOptions();
    
    // Add None option to level options
    levelOptions.unshift(noneOption);
    
    return levelOptions;
};

const createCategoryFilterOptions = () => {
    // Create None options
    const noneOption = createNoneOption();
    
    // Create category options
    const categoryOptions = createCategoryOptions();
    
    // Add None option to category options
    categoryOptions.unshift(noneOption);
    
    return categoryOptions;
};

const createFiltersForm = () => {
    // Create form
    const filtersForm = document.createElement('form');
    filtersForm.className = 'p-3';
    
    // Category
    const categoryFilterDiv = document.createElement('div');
    categoryFilterDiv.className = 'form-floating mb-3';
    const categoryFilter = document.createElement('select');
    categoryFilter.className = 'form-select';
    categoryFilter.id = 'categoryFilter';
    
    // ...
    const categoryFilterOptions = createCategoryFilterOptions();
    categoryFilterOptions.forEach(option => {
        categoryFilter.appendChild(option);
    })
    
    const categoryFilterLabel = document.createElement('label');
    categoryFilterLabel.htmlFor = 'categoryFilter';
    categoryFilterLabel.textContent = 'Categoria';
    categoryFilterDiv.appendChild(categoryFilter);
    categoryFilterDiv.appendChild(categoryFilterLabel);
    filtersForm.appendChild(categoryFilterDiv);
    
    // Level
    const levelFilterDiv = document.createElement('div');
    levelFilterDiv.className = 'form-floating my-3';
    const levelFilter = document.createElement('select');
    levelFilter.className = 'form-select';
    levelFilter.id = 'levelFilter';
    
    const levelFilterOptions = createLevelFilterOptions();
    levelFilterOptions.forEach(option => {
        levelFilter.appendChild(option);
    });
    
    const levelFilterLabel = document.createElement('label');
    levelFilterLabel.htmlFor = 'levelFilter';
    levelFilterLabel.textContent = 'Livello';
    levelFilterDiv.appendChild(levelFilter);
    levelFilterDiv.appendChild(levelFilterLabel);
    filtersForm.appendChild(levelFilterDiv);
    
    // Visibility
    const visibilityFilterDiv = document.createElement('div');
    visibilityFilterDiv.className = 'form-floating my-3';
    const visibilityFilter = document.createElement('select');
    visibilityFilter.className = 'form-select';
    visibilityFilter.id = 'visibilityFilter';
    
    const visibilityFilterOptions = createVisibiityFilterOptions();
    visibilityFilterOptions.forEach(option => {
        visibilityFilter.appendChild(option);
    });

    const visibilityFilterLabel = document.createElement('label');
    visibilityFilterLabel.htmlFor = 'visibilityFilter';
    visibilityFilterLabel.textContent = 'Visibilità';
    visibilityFilterDiv.appendChild(visibilityFilter);
    visibilityFilterDiv.appendChild(visibilityFilterLabel);
    filtersForm.appendChild(visibilityFilterDiv);
    
    // Filter button
    const filterBtn = document.createElement('button');
    filterBtn.type = 'submit';
    filterBtn.className = 'btn btn-outline-light mt-3';
    filterBtn.id = 'filterBtn';
    filterBtn.textContent = 'Filtra';
    filtersForm.appendChild(filterBtn);
    
    return filtersForm;
};

const createFiltersCollapse = () => {
    // Create filters collapse
    const filtersCollapse = document.createElement('div');
    filtersCollapse.className = 'collapse';
    filtersCollapse.id = 'filtersCollapse';
    
    // Create filters form container
    const filtersFormContainer = document.createElement('div');
    filtersFormContainer.className = 'bg-dark rounded mt-1 p-1';
    
    // Create filters form
    const filtersForm = createFiltersForm();
    
    // Append filters forms to filters form container
    filtersFormContainer.appendChild(filtersForm);
    
    // Append filters form container to filters collapse
    filtersCollapse.appendChild(filtersFormContainer);
    
    return filtersCollapse;
};


const createFiltersDiv = () => {
    // Create filters div
    const filtersDiv = document.createElement('div');
    filtersDiv.className = 'p-1'; // Il margire superiore e inferiore lo setta chi usa il div
    
    // Create filters button
    const filtersButton = createFiltersButton();
    filtersButton.classList.add('mb-1');
    
    // Append filters button tp filters div
    filtersDiv.appendChild(filtersButton);
    
    // Create filters collapse
    const filtersCollapse = createFiltersCollapse();
    
    // Append filters collapse to filters div
    filtersDiv.appendChild(filtersCollapse);
    
    return filtersDiv;
};

export {
    createFiltersDiv
};