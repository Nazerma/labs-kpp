// Получаем ссылки на все необходимые элементы
const passwordInputs = document.querySelectorAll('.input-wrapper input[type="password"]');
const toggleIcons = document.querySelectorAll('.icon-password');
const submitButton = document.querySelector('.btn');

// Функция для переключения видимости пароля
toggleIcons.forEach((icon, index) => {
  icon.addEventListener('click', () => {
    const input = passwordInputs[index];
    if (input.type === 'password') {
      input.type = 'text';
      icon.classList.remove('fa-eye');
      icon.classList.add('fa-eye-slash');
    } else {
      input.type = 'password';
      icon.classList.remove('fa-eye-slash');
      icon.classList.add('fa-eye');
    }
  });
});

// Обработка события при нажатии на кнопку "Подтвердить"
submitButton.addEventListener('click', (event) => {
  event.preventDefault(); // Предотвращаем перезагрузку страницы

  const password1 = passwordInputs[0].value;
  const password2 = passwordInputs[1].value;

  // Проверка на совпадение паролей
  if (password1 === password2) {
    // Если сообщение об ошибке существует, удаляем его
    const errorMessage = document.querySelector('.error-message');
    if (errorMessage) {
      errorMessage.remove();
    }
    alert('You are welcome');
  } else {
    // Если пароли не совпадают, показываем сообщение об ошибке
    let errorMessage = document.querySelector('.error-message');
    if (!errorMessage) {
      errorMessage = document.createElement('div');
      errorMessage.className = 'error-message';
      errorMessage.style.color = 'red';
      passwordInputs[1].parentNode.appendChild(errorMessage);
    }
    errorMessage.textContent = 'Пароль має співпадати';
  }
});
