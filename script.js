// Добавьте этот код в существующий или создайте новый файл script.js
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Здесь можно добавить код для отправки данных на сервер
            // Например, используя Fetch API или XMLHttpRequest
            
            alert('Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.');
            contactForm.reset();
        });
    }
});