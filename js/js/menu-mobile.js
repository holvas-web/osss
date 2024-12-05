function toggleMenu() {
    const menu = document.getElementById('dropdownMenu'); // Знаходимо меню за ID
    if (!menu) {
        console.error('Елемент з ID "dropdownMenu" не знайдено.');
        return;
    }
    menu.classList.toggle('show'); // Додаємо або забираємо клас "show"
}


//Скрипт для відкриття/закриття модального вікна

    // function openModal() {
    //     document.getElementById('modal').style.display = 'block';
    // }

    // function closeModal() {
    //     document.getElementById('modal').style.display = 'none';
    // }

    // function toggleMenu() {
    //     const menu = document.getElementById('menu-container');
    //     menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
    // }