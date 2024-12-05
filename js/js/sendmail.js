// в майбутньому додати сервер,а також додати серверну валідацію

document.querySelector('#contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Збираємо дані з форми
    const form = event.target;
    const name = form.name.value.trim();
    // const phoneRaw = form.tel.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Масив для збору помилок
    let errors = [];

    // Валідація імені
    if (!/^[a-zA-ZąćęłńóśźżĄĘŁŃÓŚŹŻ\s]{3,20}$/.test(name)) {
        errors.push("Imię i nazwisko musi zawierać od 3 do 20 liter (bez znaków specjalnych).");
    }

    // Валідація телефону
    // const phone = phoneRaw.replace(/^\+/, 'PLUS').replace(/[^\d]/g, '').replace(/^PLUS/, '+');
    // console.log("Очищений номер:", phone);

    // if (!/^(\+48\d{9}|\+38\d{10})$/.test(phone)) {
    //     errors.push("Numer telefonu musi być w formacie +48000000000 lub +380000000000.");
    // }

    // Валідація електронної пошти
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.push("Wprowadź poprawny adres e-mail.");
    }

    // Валідація повідомлення
    if (message.length > 100) {
        errors.push("Wiadomość nie może zawierać więcej niż 100 znaków.");
    }

    // Якщо є помилки, показуємо повідомлення і зупиняємо відправку
    if (errors.length > 0) {
        alert(errors.join("\n"));
        return;
    }

    // Формуємо дані для відправки
    const formData = new FormData(form);

    // Відправка даних через Web3Forms API
    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
    })
    .then((response) => {
        if (response.ok) {
            alert('Wiadomość została wysłana pomyślnie!');
            form.reset(); // Очищаємо форму після успішної відправки
        } else {
            alert('Wystąpił błąd podczas wysyłania wiadomości.');
        }
    })
    .catch((error) => {
        console.error('Błąd:', error);
        alert('Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.');
    });
});
