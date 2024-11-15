export function phoneMaskInitialization() {
    const phoneInputs = document.querySelectorAll('.js-phone-mask');

    for (let phoneInput of phoneInputs) {
        let isCityPhoneNumber = phoneInput.classList.contains('js-city-phone-number');

        phoneInput.addEventListener('input', function() {
            // Удаляем все символы, кроме цифр, точек с запятой и скобок (если есть класс js-city-phone-number)
            let value = this.value.replace(isCityPhoneNumber ? /[^\d\(\);]/g : /[^\d;]/g, '');

            // Разделяем номера по точкам с запятой
            const phoneNumbers = value.split(';').map(num => num.trim());

            // Ограничиваем количество вводимых цифр до 11 для обычных номеров
            for (let i = 0; i < phoneNumbers.length; i++) {
                if (!isCityPhoneNumber && phoneNumbers[i].length > 11) {
                    phoneNumbers[i] = phoneNumbers[i].slice(0, 11);
                }
            }

            // Если последний номер содержит 11 цифр
            const lastNumber = phoneNumbers[phoneNumbers.length - 1];
            if (lastNumber.length === 11) {
                if (!isCityPhoneNumber && !value.endsWith(';')) {
                    // Для обычного номера: добавляем пустую строку для следующего номера
                    phoneNumbers.push('');
                }
            }

            // Объединяем номера обратно в строку, добавляя точку с запятой между ними
            this.value = phoneNumbers.join(';').replace(/;{2,}/g, ';').trim(); // Убираем лишние точки с запятой
        });

        // Обработчик для удаления символов (включая точку с запятой и скобки)
        phoneInput.addEventListener('keydown', function(event) {
            if (event.key === 'Backspace') {
                const value = this.value;
                const lastChar = value[value.length - 1];

                // Убираем точку с запятой или скобку
                if (lastChar === ';' || lastChar === ')' || lastChar === '(') {
                    this.value = value.slice(0, -1);
                }
            }
        });
    }
}
