import {createFormValidation} from "./functions/createFormValidation.js";
import {getCurrentYear} from "./functions/getCurrentYear.js";
import createAnchorsFunctional from "./functions/createAnchorsFunctional.js";

document.addEventListener("DOMContentLoaded", function () {
    createFormValidation();
    getCurrentYear();
    createAnchorsFunctional();
});