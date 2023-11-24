const questionsList = document.querySelectorAll('.question');
const answersList = document.querySelectorAll('.answer');

questionsList.forEach((question) => {
    question.addEventListener('click', () => {
        const isQuestionActive = question.classList.contains('!border-yellow-light');

        answersList.forEach((el) => {
            el.classList.remove('!block');
        });

        let arrow = document.querySelector('.scale-x-100')

        if (arrow) {
            arrow.classList.remove('scale-x-100')
            arrow.classList.remove('scale-y-[-1]')
            arrow.querySelector('path').classList.remove('fill-yellow-light')
        }

        questionsList.forEach((item) => {
            item.classList.remove('!border-yellow-light');
            question.querySelector('svg').classList.remove('scale-x-100')
            question.querySelector('svg').classList.remove('scale-y-[-1]')
            question.querySelector('path').classList.remove('fill-yellow-light')
        });

        if (!isQuestionActive) {
            question.classList.add('!border-yellow-light');
            question.querySelector('svg').classList.toggle('scale-x-100')
            question.querySelector('svg').classList.toggle('scale-y-[-1]')
            question.querySelector('path').classList.add('fill-yellow-light')
            question.nextElementSibling.classList.add('!block');
        }
    });
});
