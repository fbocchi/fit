import { TrainingCategoryEnum } from '../model/trainingCategory.js'
import { TrainingLevelEnum } from '../model/trainingLevel.js'

// ...
const levelOptionsDict = {
    EASY: { value: 'e', textContent: 'Facile', selected: true },
    MEDIUM: { value: 'm', textContent: 'Medio' },
    HARD: { value: 'h', textContent: 'Difficile ' },
};

// ...
const categoryOptionsDict = {
    CARDIO: { value: 'c', textContent: 'Cardio', selected: true },
    STRENGTH: { value: 's', textContent: 'Forza' },
};

// ...
const createCategoryOptions = () => {
    const categories = TrainingCategoryEnum.values();
    const options = [];
    categories.forEach(category => {
        const option = document.createElement('option');
        if (category == TrainingCategoryEnum.CARDIO) {
            option.value = 'c';
            option.textContent = 'Cardio';
            option.selected = true;
        } else if (category == TrainingCategoryEnum.STRENGTH) {
            option.value = 's';
            option.textContent = 'Forza';
        }
        options.push(option);
    });
    return options;
}

// ...
const createLevelOptions = () => {
    const levels = TrainingLevelEnum.values();
    const options = [];
    levels.forEach(levels => {
        const option = document.createElement('option');
        if (levels == TrainingLevelEnum.EASY) {
            option.value = 'e';
            option.textContent = 'Facile';
            option.selected = true;
        } else if (levels == TrainingLevelEnum.MEDIUM) {
            option.value = 'm';
            option.textContent = 'Medio';
        } else {
            option.value = 'h';
            option.textContent = 'Difficile';
        }
        options.push(option);
    });
    return options;
}

// ...
const createForm = () => {
    const form = document.createElement('form');
    
    // Name
    const nameDiv = document.createElement('div');
    nameDiv.className = 'form-floating';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.className = 'form-control';
    nameInput.id = '';
    nameInput.placeholder = '';
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', nameInput.id);
    nameLabel.textContent = 'Nome';
    nameDiv.appendChild(nameInput);
    nameDiv.appendChild(nameLabel);
    
    // Category
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'form-floating';
    const categorySelect = document.createElement('select');
    categorySelect.className = 'form-select';

    /*const categoryOptionCardio = document.createElement('option');
    categoryOptionCardio.value = 'c';
    categoryOptionCardio.selected = true;
    categoryOptionCardio.textContent = 'Cardio';
    const categoryOptionStrength = document.createElement('option');
    categoryOptionStrength.value = 's';
    categoryOptionStrength.textContent = 'Forza';
    categorySelect.appendChild(categoryOptionCardio);
    categorySelect.appendChild(categoryOptionStrength);*/

    const categoryOptions = createCategoryOptions();
    categoryOptions.forEach(option => {
        categorySelect.appendChild(option);
    });

    const categoryLabel = document.createElement('label');
    categoryLabel.textContent = 'Categoria';
    categoryDiv.appendChild(categorySelect);
    categoryDiv.appendChild(categoryLabel);
    
    // Level
    const levelDiv = document.createElement('div');
    levelDiv.className = 'form-floating';
    const levelSelect = document.createElement('select');
    levelSelect.className = 'form-select';

    /*const levelOptionEasy = document.createElement('option');
    levelOptionEasy.value = 'e';
    levelOptionEasy.selected = true;
    levelOptionEasy.textContent = 'Facile';
    const levelOptionMedium = document.createElement('option');
    levelOptionMedium.value = 'm';
    levelOptionMedium.textContent = 'Medio';
    const levelOptionHard = document.createElement('option');
    levelOptionHard.value = 'h';
    levelOptionHard.textContent = 'Difficile';
    levelSelect.appendChild(levelOptionEasy);
    levelSelect.appendChild(levelOptionMedium);
    levelSelect.appendChild(levelOptionHard);*/

    const levelOptions = createLevelOptions();
    levelOptions.forEach(option => {
        levelSelect.appendChild(option);
    });

    const levelLabel = document.createElement('label');
    levelLabel.textContent = 'Livello';
    levelDiv.appendChild(levelSelect);
    levelDiv.appendChild(levelLabel);
    
    // Description
    const descriptionDiv = document.createElement('div');
    descriptionDiv.className = 'form-floating';
    const descriptionTextarea = document.createElement('textarea');
    descriptionTextarea.className = 'form-control';
    const descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = 'Descrizione';
    descriptionDiv.appendChild(descriptionTextarea);
    descriptionDiv.appendChild(descriptionLabel);
    
    // Visibility
    const visibilityDiv = document.createElement('div');
    visibilityDiv.className = 'form-check form-switch';
    const visibilityInput = document.createElement('input');
    visibilityInput.className = 'form-check-input';
    visibilityInput.type = 'checkbox';
    visibilityInput.role = 'switch';
    const visibilityLabel = document.createElement('label');
    visibilityLabel.className = 'form-check-label';
    visibilityLabel.textContent = 'Pubblico';
    visibilityDiv.appendChild(visibilityInput);
    visibilityDiv.appendChild(visibilityLabel);
    
    // Append all elements to the form
    form.appendChild(nameDiv);
    form.appendChild(categoryDiv);
    form.appendChild(levelDiv);
    form.appendChild(descriptionDiv);
    form.appendChild(visibilityDiv);
    
    return form;
};

const createTrainingFormInAside = () => {
    const form = createForm();
    
    form.className = 'p-3 bg-dark rounded';
    form.id = 'trCreatForm_aside';

    // Update IDs and class names for individual fields
    // Name
    const nameInput = form.querySelector('.form-floating:nth-child(1) input');
    nameInput.id = 'trCreatForm_aside_name';
    const nameLabel = form.querySelector('.form-floating:nth-child(1) label');
    nameLabel.setAttribute('for', nameInput.id);

    // Category
    const categorySelect = form.querySelector('.form-floating:nth-child(2) select');
    categorySelect.id = 'trCreatForm_aside_cat';
    const categoryLabel = form.querySelector('.form-floating:nth-child(2) label');
    categoryLabel.setAttribute('for', categorySelect.id);

    // Level
    const levelSelect = form.querySelector('.form-floating:nth-child(3) select');
    levelSelect.id = 'trCreatForm_aside_lev';
    const levelLabel = form.querySelector('.form-floating:nth-child(3) label');
    levelLabel.setAttribute('for', levelSelect.id);

    // Description
    const descriptionTextarea = form.querySelector('.form-floating:nth-child(4) textarea');
    descriptionTextarea.id = 'trCreatForm_aside_desc';
    const descriptionLabel = form.querySelector('.form-floating:nth-child(4) label');
    descriptionLabel.setAttribute('for', descriptionTextarea.id);

    // Visibility
    const visibilityInput = form.querySelector('.form-check-input');
    visibilityInput.id = 'trCreatForm_aside_vis';
    const visibilityLabel = form.querySelector('.form-check-label');
    visibilityLabel.setAttribute('for', visibilityInput.id);
    visibilityLabel.className = 'form-check-label text-light';

    // Create button
    const createButton = document.createElement('button');
    createButton.type = 'submit';
    createButton.className = 'btn btn-outline-light mt-3';
    createButton.id = 'trCreatForm_aside_createBtn';
    createButton.textContent = 'Crea';

    form.appendChild(createButton);

    return form;
};

const createTrainingFormInModal = () => {
    const form = createForm();
    form.className = 'p-3';
    form.id = 'trCreatForm_modal';

    // Update IDs and class names for individual fields
    // Name
    const nameInput = form.querySelector('.form-floating:nth-child(1) input');
    nameInput.id = 'trCreatForm_modal_name';
    const nameLabel = form.querySelector('.form-floating:nth-child(1) label');
    nameLabel.setAttribute('for', nameInput.id);

    // Category
    const categorySelect = form.querySelector('.form-floating:nth-child(2) select');
    categorySelect.id = 'trCreatForm_modal_cat';
    const categoryLabel = form.querySelector('.form-floating:nth-child(2) label');
    categoryLabel.setAttribute('for', categorySelect.id);

    // Level
    const levelSelect = form.querySelector('.form-floating:nth-child(3) select');
    levelSelect.id = 'trCreatForm_modal_lev';
    const levelLabel = form.querySelector('.form-floating:nth-child(3) label');
    levelLabel.setAttribute('for', levelSelect.id);

    // Description
    const descriptionTextarea = form.querySelector('.form-floating:nth-child(4) textarea');
    descriptionTextarea.id = 'trCreatForm_modal_desc';
    const descriptionLabel = form.querySelector('.form-floating:nth-child(4) label');
    descriptionLabel.setAttribute('for', descriptionTextarea.id);

    // Visibility
    const visibilityInput = form.querySelector('.form-check-input');
    visibilityInput.id = 'trCreatForm_modal_vis';
    const visibilityLabel = form.querySelector('.form-check-label');
    visibilityLabel.setAttribute('for', visibilityInput.id);

    return form;
};

const createTrainingFormInCard = (training) => {
    const form = createForm();
    const { id, name, category, level, desc, isPublic } = training;
    // ...
};

export {
    createTrainingFormInAside,
    createTrainingFormInModal,
    createTrainingFormInCard
};