import {phoneRegex, cityPhoneRegex, emailRegex, quotesRegex} from "../helpers/regex.js";

const localityBanWords = new Set([
    "г.", "г", "город",
    "с.", "с", "село", "станица",
    "д.", "д", "деревня",
    "а.", "а", "аул",
    "п.г.т.", "п.г.т", "пг.т.", "пгт", "пгт.",
    "поселок городского типа", "посёлок городского типа",
]);

const organizationNameWords = new Set(['ип', 'ооо', 'ао', 'оао', 'зао', 'пао', 'нао', 'нко', 'оп']);

export function firstLetterUppercase(text) {
    return text.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

export function validateEmail(emails) {
    return emails.split(';').every(email => emailRegex.test(email.trim()));
}

export function validatePhone(phones, isCityPhoneNumber) {
    const regex = isCityPhoneNumber ? cityPhoneRegex : phoneRegex;
    return phones.split(';').every(phone => regex.test(phone.trim()));
}

export function validateLocalityName(locality) {
    return !containsBanWords(locality, localityBanWords);
}

export function validateOrganizationName(text) {
    return !containsBanWords(text, organizationNameWords) && !quotesRegex.test(text);
}

function containsBanWords(input, wordSet) {
    const lowerCaseInput = input.toLowerCase();
    const words = lowerCaseInput.split(/\s+/);
    return words.some(word => wordSet.has(word.trim()));
}
