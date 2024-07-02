import { TrainingCategoryEnum } from '../model/trainingCategory.js'
import { TrainingLevelEnum } from '../model/trainingLevel.js'

// ...
const categoryOptionsAttributes = {
    CARDIO: { value: 'c', textContent: 'Cardio' },
    STRENGTH: { value: 's', textContent: 'Forza' },
};

// ...
const levelOptionsAttributes = {
    EASY: { value: 'e', textContent: 'Facile' },
    MEDIUM: { value: 'm', textContent: 'Medio' },
    HARD: { value: 'h', textContent: 'Difficile ' },
};

// ...
const createCategoryOptions = () => {
    const categories = TrainingCategoryEnum.values();
    const options = [];
    categories.forEach(category => {
        const option = document.createElement('option');
        if (category == TrainingCategoryEnum.CARDIO) {
            option.value = categoryOptionsAttributes.CARDIO.value;
            option.textContent = categoryOptionsAttributes.CARDIO.textContent;
        } else if (category == TrainingCategoryEnum.STRENGTH) {
            option.value = categoryOptionsAttributes.STRENGTH.value;
            option.textContent = categoryOptionsAttributes.STRENGTH.textContent
        }
        options.push(option);
    });
    return options;
}

// ...
const createLevelOptions = () => {
    const levels = TrainingLevelEnum.values();
    const options = [];
    levels.forEach(level => {
        const option = document.createElement('option');
        if (level == TrainingLevelEnum.EASY) {
            option.value = levelOptionsAttributes.EASY.value;
            option.textContent = levelOptionsAttributes.EASY.textContent;
        } else if (level == TrainingLevelEnum.MEDIUM) {
            option.value = levelOptionsAttributes.MEDIUM.value;
            option.textContent = levelOptionsAttributes.MEDIUM.textContent;
        } else {
            option.value = levelOptionsAttributes.HARD.value;
            option.textContent = levelOptionsAttributes.HARD.textContent;
        }
        options.push(option);
    });
    return options;
};

export {
    createCategoryOptions,
    createLevelOptions
};