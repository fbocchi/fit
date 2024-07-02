import { TrainingCategoryEnum } from "./trainingCategory.js";
import { TrainingLevelEnum } from "./trainingLevel.js";

const trainings = [
    {
        id: 21,
        name: 'Sette camicie',
        category: TrainingCategoryEnum.CARDIO,
        level: TrainingLevelEnum.HARD,
        description: 'Lorem',
        isPublic: true 
    },
    { 
        id: 67,
        name: 'Forza 9',
        category: TrainingCategoryEnum.STRENGTH,
        level: TrainingLevelEnum.MEDIUM,
        description: 'Lorem',
        isPublic: false
    },
    {
        id: 22,
        name: 'Il Macho',
        category: TrainingCategoryEnum.STRENGTH,
        level: TrainingLevelEnum.EASY,
        description: 'Lorem',
        isPublic: true 
    },
    { 
        id: 53,
        name: 'Corritutto',
        category: TrainingCategoryEnum.CARDIO,
        level: TrainingLevelEnum.MEDIUM,
        description: 'Lorem',
        isPublic: false
    },

];

const getTrainings = () => {
    return trainings;
};

export {
    getTrainings
};