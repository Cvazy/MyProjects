// Получаем ссылки на поле ввода и кнопку
var inputField = document.getElementById('code');
var button = document.getElementById('next1');

// Функция для изменения цвета кнопки
function changeButtonColor() {
    if (inputField.value !== '') {
        button.style.backgroundColor = 'rgba(0, 164, 239, 0.1)'; // Замените 'новый_цвет' на желаемый цвет кнопки
    } else {
        button.style.backgroundColor = '#F6F6F6'; // Замените 'исходный_цвет' на исходный цвет кнопки
    }
}

// Обработчик события ввода в поле ввода
inputField.addEventListener('input', changeButtonColor);