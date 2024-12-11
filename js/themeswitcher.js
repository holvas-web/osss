// Функція для перемикання теми
function toggleTheme(theme) {
    const body = document.body;

    // Видаляємо обидві теми перед застосуванням нової
    body.classList.remove('light-theme', 'dark-theme');

    if (theme === 'light') {
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light'); // Зберігаємо вибір користувача
    } else {
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark'); // Зберігаємо вибір користувача
    }

    // Оновлюємо активний стан кнопки
    updateActiveThemeButton(theme);
}

localStorage.removeItem('theme');

// Функція для оновлення активного стану кнопок
function updateActiveThemeButton(selectedTheme) {
    const themeButtons = document.querySelectorAll('.theme-switcher button');
    themeButtons.forEach(button => {
        if (button.dataset.value === selectedTheme) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    const defaultTheme = 'light'; // Завжди використовуємо 'light', якщо нічого не збережено
    if (!savedTheme) {
        // Якщо тема ще не збережена, використовуємо за замовченням
        toggleTheme(defaultTheme);
    } else {
        // Якщо збережена тема є, застосовуємо її
        toggleTheme(savedTheme);
    }
    console.log(`Застосовується тема: ${savedTheme || defaultTheme}`);
}

// Викликаємо ініціалізацію теми при завантаженні
window.addEventListener('DOMContentLoaded', initializeTheme);
