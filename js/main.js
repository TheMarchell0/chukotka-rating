import {fixedHeaderFunctional} from "./functions/fixedHeaderFunctional.js";
import {createMobileMenu} from "./functions/createMobileMenu.js";
import {createAnchorsFunctional} from "./functions/createAnchorsFunctional.js";
import {createFormValidation} from "./functions/createFormValidation.js";
import {getCurrentYear} from "./functions/getCurrentYear.js";
import {phoneMaskInitialization} from "./functions/phoneMaskInitialization.js";
import {modalFunctional} from "./functions/modalFunctional.js";
import {chooseMarkRadio} from "./functions/markRadio.js";
import {createSelect} from "./functions/createSelect.js";
import {createInputPlaceholderActivity} from "./functions/createInputPlaceholderActivity.js";

document.addEventListener("DOMContentLoaded", function () {
    fixedHeaderFunctional();
    createMobileMenu();
    createAnchorsFunctional();
    createSelect();
    createInputPlaceholderActivity();
    createFormValidation();
    phoneMaskInitialization();
    modalFunctional();
    chooseMarkRadio();
    getCurrentYear();
});