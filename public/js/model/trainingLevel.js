
// ...
const TrainingLevel = {
    EASY: 'EASY',
    MEDIUM: 'MEDIUM',
    HARD: 'HARD',
};

// ...
class TrainingLevelEnum {
    constructor(name) {
        this.name = name
    }

    static EASY = new TrainingLevelEnum('EASY');
    static MEDIUM = new TrainingLevelEnum('MEDIUM');
    static HARD = new TrainingLevelEnum('HARD');

    static values() {
        return [TrainingLevelEnum.EASY, TrainingLevelEnum.MEDIUM, TrainingLevelEnum.HARD];
    }

    static stringValues() {
        const stringValues = [];
        for (const value of TrainingLevelEnum.values()) {
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
    TrainingLevel,
    TrainingLevelEnum
};