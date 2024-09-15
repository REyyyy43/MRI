document.addEventListener('DOMContentLoaded', function () {
    const toggleTextButtons = document.querySelectorAll('.toggle-text');

    toggleTextButtons.forEach(button => {
        button.addEventListener('click', function () {
            const textElement = this.parentElement.nextElementSibling;
            const questionElement = this.parentElement;
            textElement.classList.toggle('active');
            questionElement.classList.toggle('bg-darker');
        });
    });
});

AOS.init();