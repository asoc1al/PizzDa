document.addEventListener('DOMContentLoaded', function () {
    // Получаем форму
    const form = document.querySelector('.forms-wrapper');
  
    // Добавляем обработчик события на отправку формы
    form.addEventListener('submit', function (event) {
      // Предотвращаем стандартное поведение формы (перезагрузку страницы)
      event.preventDefault();
  
      // Получаем данные формы
      const formData = new FormData(form);
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });
  
      // Проверка данных (например, проверка на пустые поля)
      if (!data.fname || !data.lname || !data.comments) {
        // Если данные некорректны, показываем сообщение об ошибке
        Swal.fire({
          icon: 'error',
          title: 'Ошибка',
          text: 'Пожалуйста, заполните все поля.'
        });
      } else {
        // Если данные корректны, показываем сообщение об успехе
        Swal.fire({
          icon: 'success',
          title: 'Успех',
          text: 'Ваше сообщение отправлено!'
        });
  
        // Отображаем данные в консоли (для примера)
        console.log('Форма отправлена:', data);
  
        // Здесь можно добавить отправку данных на сервер через AJAX
      }
    });
  });
  