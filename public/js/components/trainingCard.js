import { TrainingCategoryEnum } from '../model/trainingCategory.js'
import { TrainingLevelEnum } from '../model/trainingLevel.js'

// ...
const createCardHeader = (training) => {
    const { name } = training;

    const cardHeader = document.createElement('h5');
    cardHeader.classList.add('card-header');
    cardHeader.textContent = name;

    return cardHeader;
}; 

// ...
const createCardBody = (training) => {
    const { id, category, level, description } = training;

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');

    const categoryBadge = document.createElement('span');
    categoryBadge.classList.add('badge', 'text-bg-secondary');
    categoryBadge.textContent = category;

    const levelBadge = document.createElement('span');
    levelBadge.classList.add('badge', 'text-bg-secondary');
    levelBadge.textContent = level;

    cardTitle.appendChild(categoryBadge);
    cardTitle.appendChild(levelBadge);
    cardBody.appendChild(cardTitle);

    const cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = description;
    cardBody.appendChild(cardText);

    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('d-flex', 'justify-content-between');

    const exercisesBtn = document.createElement('a');
    exercisesBtn.classList.add('btn', 'btn-success');
    exercisesBtn.href = '#';
    exercisesBtn.role = 'button';
    exercisesBtn.id = `tr_${id}_exercisesBtn`;
    exercisesBtn.textContent = 'Vai a esercizi';

    const editBtn = document.createElement('button');
    editBtn.classList.add('btn', 'btn-warning');
    editBtn.type = 'button';
    editBtn.dataset.bsToggle = 'collapse';
    editBtn.dataset.bsTarget = `#tr_${id}_editingFormCollapse`;
    editBtn.setAttribute('aria-expanded', 'false');
    editBtn.setAttribute('aria-controls', `tr_${id}_editingFormCollapse`);
    editBtn.id = `tr_${id}_editBtn`;
    editBtn.textContent = 'Modifica';

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn', 'btn-danger');
    deleteBtn.type = 'button';
    deleteBtn.id = `tr_${id}_deleteBtn`;
    deleteBtn.textContent = 'Elimina';

    buttonsContainer.appendChild(exercisesBtn);
    buttonsContainer.appendChild(editBtn);
    buttonsContainer.appendChild(deleteBtn);
    cardBody.appendChild(buttonsContainer);

    return cardBody;
};

// ...
const createCardFooter = (training) => {

    const { id } = training;

    const cardFooter = document.createElement('div');
    cardFooter.classList.add('card-footer', 'text-body-secondary');

    const collapseDiv = document.createElement('div');
    collapseDiv.classList.add('collapse');
    collapseDiv.id = `tr_${id}_editingFormCollapse`;

    const form = document.createElement('form');
    form.classList.add('p-1');

    // category options
    const categories = TrainingCategoryEnum.values();
    const categoryOptions = [];
    for (const c of categories) {
        const option = {};
        if (c == TrainingCategoryEnum.CARDIO) {
            option.value = 'c';
            option.text = 'Cardio'
            option.selected = 'true';
        } else {
            option.value = 's'
            option.text = 'Forza'
        }
        categoryOptions.push(option);
    }

    // level options
    const levels = TrainingLevelEnum.values();
    const levelOptions = [];
    for (const l of levels) {
        const option = {};
        if (l == TrainingLevelEnum.EASY) {
            option.value = 'e';
            optiontext = 'Facile'
            option.selected = 'true';
        } else if (l == TrainingLevelEnum.MEDIUM) {
            option.value = 'm'
            option.text = 'Medio'
        } else {
            option.value = 'h'
            option.text = 'Difficile'
        }
        levelOptions.push(option);
    }

    // - - - form - - -
    const formGroups = [
        {
            elementType: 'input',
            type: 'text',
            id: `tr_${id}_name_editForm`,
            label: 'Nome'
        },
        {
            elementType: 'select',
            id: `tr_${id}_cat_editForm`,
            label: 'Categoria',
            options: [ // categoryOptions
                { value: 'c', text: 'Cardio', selected: true },
                { value: 's', text: 'Forza' }
            ]
        },
        {
            elementType: 'select',
            id: `tr_${id}_lev_editForm`,
            label: 'Livello',
            options: [ // levelOptions
                { value: 'e', text: 'Facile', selected: true },
                { value: 'm', text: 'Medio' },
                { value: 'h', text: 'Difficile' }
            ]
        },
        {
            elementType: 'textarea',
            id: `tr_${id}_desc_editForm`,
            label: 'Descrizione'
        }
    ];

    formGroups.forEach(group => {
        const formGroup = document.createElement('div');
        formGroup.classList.add('form-floating', 'my-2');

        let element;
        if (group.elementType === 'input' || group.elementType === 'textarea') {
            element = document.createElement(group.elementType);
            element.classList.add('form-control');
            element.id = group.id;
            element.placeholder = '';
        } else if (group.elementType === 'select') {
            element = document.createElement('select');
            element.classList.add('form-select');
            element.id = group.id;
            group.options.forEach(option => {
                const opt = document.createElement('option');
                opt.value = option.value;
                opt.textContent = option.text;
                if (option.selected) opt.selected = true;
                element.appendChild(opt);
            });
        }

        const label = document.createElement('label');
        label.setAttribute('for', group.id);
        label.textContent = group.label;

        formGroup.appendChild(element);
        formGroup.appendChild(label);
        form.appendChild(formGroup);
    });

    const switchDiv = document.createElement('div');
    switchDiv.classList.add('form-check', 'form-switch', 'my-2');

    const switchInput = document.createElement('input');
    switchInput.classList.add('form-check-input');
    switchInput.type = 'checkbox';
    switchInput.role = 'switch';
    switchInput.id = `tr_${id}_vis_editForm`;

    const switchLabel = document.createElement('label');
    switchLabel.classList.add('form-check-label');
    switchLabel.setAttribute('for', `tr_${id}_vis_editForm`);
    switchLabel.textContent = 'Pubblico';

    switchDiv.appendChild(switchInput);
    switchDiv.appendChild(switchLabel);
    form.appendChild(switchDiv);

    const saveBtn = document.createElement('button');
    saveBtn.type = 'submit';
    saveBtn.classList.add('btn', 'btn-primary', 'mt-2');
    saveBtn.id = `tr_${id}_saveBtn_editForm`;
    saveBtn.textContent = 'Salva modifiche';

    form.appendChild(saveBtn);
    // - - - form - - -

    collapseDiv.appendChild(form);
    cardFooter.appendChild(collapseDiv);

    return cardFooter;
};

// ...
const createTrainingCard = (training) => {

    const { id } = training;

    const card = document.createElement('div');
    card.classList.add('card', 'mb-2');
    card.id = `tr_${id}`;

    const cardHeader = createCardHeader(training);
    card.appendChild(cardHeader);

    const cardBody = createCardBody(training);
    card.appendChild(cardBody);

    const cardFooter = createCardFooter(training);
    card.appendChild(cardFooter);

    return card;
};

export {
    createTrainingCard
};