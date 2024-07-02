import { createTrainingFormInCard } from '../components/trainingForm.js';

// ...
const createCardHeader = (training) => {
    const { name } = training;

    const cardHeader = document.createElement('h5');
    cardHeader.classList.add('card-header');
    cardHeader.textContent = name;

    return cardHeader;
}; 

// ...
const createBadgeWithText = (text) => {
    const badge = document.createElement('span');
    badge.classList.add('badge', 'text-bg-secondary', 'me-1');
    badge.textContent = text;
    return badge;
};

// ...
const createCardBody = (training) => {
    const { id, category, level, description } = training;

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');

    const categoryBadge = createBadgeWithText(category.toString());
    const levelBadge = createBadgeWithText(level.toString());

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

    const form = createTrainingFormInCard(training);

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