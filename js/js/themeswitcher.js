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

// Ініціалізація теми при завантаженні сторінки
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light'; // За замовченням light
    toggleTheme(savedTheme);
}

// Викликаємо ініціалізацію теми при завантаженні
window.addEventListener('DOMContentLoaded', initializeTheme);
