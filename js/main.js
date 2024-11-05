import {fixedHeaderFunctional} from "./functions/fixedHeaderFunctional.js";
import {createMobileMenu} from "./functions/createMobileMenu.js";
import {createAnchorsFunctional} from "./functions/createAnchorsFunctional.js";
import {createFormValidation} from "./functions/createFormValidation.js";
import {getCurrentYear} from "./functions/getCurrentYear.js";

document.addEventListener("DOMContentLoaded", function () {
    fixedHeaderFunctional();
    createMobileMenu();
    createAnchorsFunctional();
    createFormValidation();
    getCurrentYear();
});