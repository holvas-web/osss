let currentSlide = 0;
let slideTimer;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active'); // Додаємо клас "active" до поточного слайду
        }
    });

    currentSlide = index;
}

function prevSlide() {
    const totalSlides = document.querySelectorAll('.carousel-item').length;
    const nextSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(nextSlide);
}

function nextSlide() {
    const totalSlides = document.querySelectorAll('.carousel-item').length;
    const nextSlide = (currentSlide + 1) % totalSlides;
    showSlide(nextSlide);
}

function startAutoSlide() {
    slideTimer = setInterval(() => {
        prevSlide(); // Перехід з права на ліво
    }, 5000); // 5 секунд
}

function stopAutoSlide() {
    clearInterval(slideTimer);
}

// Ініціалізація каруселі
window.addEventListener('DOMContentLoaded', () => {
    showSlide(0); // Показує перший слайд
    startAutoSlide(); // Запускає автоматичне переключення

    const carousel = document.querySelector('.carousel');
    carousel.addEventListener('mouseenter', stopAutoSlide);
    carousel.addEventListener('mouseleave', startAutoSlide);
});
