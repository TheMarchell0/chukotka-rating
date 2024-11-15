const phoneRegex = /^7\d{10}$/,
    emailRegex = /\S+@\S+\.\S+/,
    localityBanWords = [
        "г.", "г", "город",
        "с.", "с", "село", "станица",
        "д.", "д", "деревня",
        "а.", "а", "аул",
        "п.г.т.",
        "п.г.т",
        "п.гт.",
        "п.гт",
        "пг.т.",
        "пг.т",
        "п.гт",
        "пгт.",
        "пгт",
        "п.г.т",
        "п.гт.",
        "пг.т.",
        "пг.т",
        "п.г.т",
        "п.гт",
        "пг.т.",
        "поселок городского типа", "посёлок городского типа",
    ];

export function firstLetterUppercase(text) {
    return text
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

export function validateEmail(email) {
    return emailRegex.test(email);
}

export function validatePhone(phoneInput) {
    return phoneRegex.test(phoneInput)
}

export function validateLocalityName(locality) {
    const lowerCaseInput = locality.toLowerCase();
    const words = lowerCaseInput.split(/\s+/);

    for (let localityBanWord of localityBanWords) {
        const trimmedBanWord = localityBanWord.trim().toLowerCase();
        if (words.includes(trimmedBanWord)) {
            return false;
        }
    }

    return true;
}