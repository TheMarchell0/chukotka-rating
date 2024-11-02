import {createFormValidation} from "./functions/createFormValidation.js";
import {getCurrentYear} from "./functions/getCurrentYear.js";
import createAnchorsFunctional from "./functions/createAnchorsFunctional.js";
import {fixedHeaderFunctional} from "./functions/fixedHeaderFunctional.js";

document.addEventListener("DOMContentLoaded", function () {
    fixedHeaderFunctional();
    createFormValidation();
    getCurrentYear();
    createAnchorsFunctional();
});