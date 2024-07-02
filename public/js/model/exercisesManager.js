
const exercises = {
    22: [
        { id: 34, position: 1, name: "Squat", sets: 2, duration: null, reps: 20, weight: null },
        { id: 30, position: 2, name: "Benchpress", sets: 2, duration: null, reps: 10, weight: 100 }
    ],
    56: [
        { id: 44, position: 1, name: "Squat", sets: 3, duration: null, reps: 25, weight: null },
        { id: 56, position: 2, name: "Benchpress", sets: 1, duration: null, reps: 20, weight: 70 },
        { id: 4, position: 3, name: "Burpees", sets: 3, duration: null, reps: 15, weight: null }
    ]
};

const getExercises = (trainingId) => {
    return [
        { id: 34, position: 1, name: "Squat", sets: 2, duration: null, reps: 20, weight: null },
        { id: 30, position: 2, name: "Benchpress", sets: 2, duration: null, reps: 10, weight: 100 }
    ]
}

export {
    getExercises
}