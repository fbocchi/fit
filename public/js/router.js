import { createHome } from "./pages/home.js";
import { createTrainingPage } from "./pages/training.js";

const initRouter = () => {
    page('/:userId/home', createHome);
    page('/:userId/:trainingId', createTrainingPage)
    page();
};

export {
    initRouter
};