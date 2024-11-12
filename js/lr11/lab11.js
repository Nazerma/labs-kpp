// Получаем ссылки на все кнопки
const buttons = document.querySelectorAll('.btn');

// Создаем переменную для хранения последней активной кнопки
let activeButton = null;

// Добавляем обработчик события на нажатие клавиш
document.addEventListener('keydown', (event) => {
  // Преобразуем нажатую клавишу в верхний регистр для совпадения с текстом на кнопках
  const key = event.key.toUpperCase();

  // Ищем кнопку, текст которой совпадает с нажатой клавишей
  buttons.forEach((button) => {
    if (button.textContent.toUpperCase() === key) {
      // Убираем подсветку с предыдущей кнопки, если она есть
      if (activeButton) {
        activeButton.style.backgroundColor = '#33333a';
      }

      // Подсвечиваем текущую кнопку
      button.style.backgroundColor = 'blue';
      activeButton = button;
    }
  });
});
