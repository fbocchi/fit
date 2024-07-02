
const createExercisesTableRow = (exercise) => {
    
    const { id, position, name, sets, duration, reps, weight } = exercise;
    
    const tr = document.createElement('tr');
    
    // Create and append the <th> element
    const th = document.createElement('th');
    th.scope = 'row';
    th.textContent = position;
    th.id = `ex_${id}_pos`
    tr.appendChild(th);
    
    // Create and append the hidden ID cell
    const tdId = document.createElement('td');
    tdId.classList.add('d-none');
    tdId.textContent = id;
    tdId.id = `ex_${id}_id`
    tr.appendChild(tdId);
    
    // Helper function to create input cells
    function createInputCell(type, step, value, id) {
        const td = document.createElement('td');
        const input = document.createElement('input');
        input.type = type;
        if (step) input.step = step;
        input.classList.add('form-control-plaintext');
        input.readOnly = true;
        input.value = value;
        input.id = id;
        td.appendChild(input);
        return td;
    }
    
    // Create and append input cells
    tr.appendChild(createInputCell('text', null, name, `ex_${id}_name`));
    tr.appendChild(createInputCell('number', '1', sets, `ex_${id}_sets`));
    tr.appendChild(createInputCell('number', '5', duration, `ex_${id}_dur`));
    tr.appendChild(createInputCell('number', '5', reps, `ex_${id}_reps`));
    tr.appendChild(createInputCell('number', '5', weight, `ex_${id}_weight`));
    
    // Create and append the action buttons cell
    const tdActions = document.createElement('td');
    const actionContainer = document.createElement('div');
    actionContainer.classList.add('d-flex', 'flex-nowrap');
    
    const editButton = createIconButton(
        'submit',
        `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
        </svg>`
    );
    
    const deleteButton = createIconButton(
        'button',
        `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
        </svg>`
    );
            
    actionContainer.appendChild(editButton);
    actionContainer.appendChild(deleteButton);
    tdActions.appendChild(actionContainer);
    tr.appendChild(tdActions);
    
    return tr;
            
};
        
function createIconButton(buttonType, svg) {
    const button = document.createElement('button');
    button.type = buttonType;
    button.classList.add('btn');
    button.innerHTML = svg;
    return button;
}

export {
    createExercisesTableRow
}