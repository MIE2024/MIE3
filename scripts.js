document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('تم إرسال طلبك بنجاح!');
    });

    // تغيير اللغة
    window.changeLanguage = function() {
        const elements = document.querySelectorAll('[lang="ar"], [lang="en"]');
        elements.forEach(element => {
            element.style.display = element.style.display === 'none' ? 'block' : 'none';
        });
    };

    // قراءة الشاشة بصوت
    const speak = (text) => {
        const speech = new SpeechSynthesisUtterance(text);
        speech.lang = 'ar';
        window.speechSynthesis.speak(speech);
    };

    // إضافة أصوات للتبويبات
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            const sound = link.getAttribute('data-sound');
            speak(sound);
        });
    });
});
