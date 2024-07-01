
// ...
const TrainingCategory = {
    CARDIO: 'CARDIO',
    STRENGTH: 'STRENGTH'
};

// ...
class TrainingCategoryEnum {
    constructor(name) {
        this.name = name
    }

    static CARDIO = new TrainingCategoryEnum('CARDIO');
    static STRENGTH = new TrainingCategoryEnum('STRENGTH');

    static values() {
        return [TrainingCategoryEnum.CARDIO, TrainingCategoryEnum.CARDIO];
    }

    static stringValues() {
        const stringValues = [];
        for (const value of TrainingCategoryEnum.values()) {
            const stringValue = value.toString();
            stringValues.push(stringValue);
        }
        return stringValues;
    }

    toString() {
        return this.name;
    }
};

export {
    TrainingCategory,
    TrainingCategoryEnum
};