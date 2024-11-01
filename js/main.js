import {createFormValidation} from "./functions/createFormValidation.js";
import {getCurrentYear} from "./functions/getCurrentYear.js";

document.addEventListener("DOMContentLoaded", function () {
    createFormValidation();
    getCurrentYear();
});