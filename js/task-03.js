// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також реалізуй при події інпут додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.

const form = document.querySelector('.js-contact-form');
const input = document.querySelector('.js-username-input');
const checkbox = document.querySelector('.js-policy-checkbox');
const usernameOutput = document.querySelector('.js-username-output');

// 1 - input event: success/error class
input.addEventListener('input', () => {
    const value = input.value.trim();

    // Додаємо/знімаємо класи success/error
    if (value.length >= 6) {
        input.classList.add('success');
        input.classList.remove('error');
    } else {
        input.classList.add('error');
        input.classList.remove('success');
    }

    // Динамічне оновлення span
    usernameOutput.textContent = value ? value : 'Anonymous';
});

// 2 - focus event: outline by content
input.addEventListener('focus', () => {
    input.style.outline = input.value.trim()
        ? '3px solid green'
        : '3px solid red';
});

// 3 - blur event: outline by content
input.addEventListener('blur', () => {
    input.style.outline = input.value.trim()
        ? '3px solid lime'
        : '3px solid red';
});

// 4 - submit event: validation + reset
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = input.value.trim();
    const accepted = checkbox.checked;

    if (name && accepted) {
        const userData = {
            userName: name
        };
        console.log('✅ Дані користувача:', userData);
    } else {
        console.log('❌ Будь ласка, заповніть ім\'я та прийміть політику.');
    }

    // Скидання форми
    form.reset();
    usernameOutput.textContent = 'Anonymous';
    input.classList.remove('success', 'error');
    input.style.outline = 'none';
});
