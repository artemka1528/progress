# progress

- **Круговой прогресс-бар**: Круговой индикатор прогресса, который обновляется динамически.
- **Управление значением**: Изменение значения прогресса с помощью числового поля ввода.
- **Переключатель анимации**: Включение или отключение анимации для прогресс-бара.
- **Переключатель видимости**: Отображение или скрытие прогресс-бара.
- **Переиспользуемость**: Компонент можно использовать несколько раз на одной странице, и каждый прогресс-бар будет работать независимо.

## Установка

1. Склонируйте репозиторий или скачайте исходный код.
2. Откройте файл `index.html`.

## Использование

1. **Изменение значения прогресса**: Используйте поле ввода с меткой "Value", чтобы установить процент прогресса (от 0 до 100).
2. **Переключение анимации**: Используйте переключатель "Animate", чтобы включить или отключить анимацию прогресс-бара.
3. **Переключение видимости**: Используйте переключатель "Hide", чтобы показать или скрыть прогресс-бар.
4. **Добавление нескольких прогресс-баров**: Скопируйте блок с классом `.progress`, измените его `id` и атрибут `data-progress-id` у соответствующего блока `.progress-controls`, чтобы добавить новый независимый прогресс-бар.

## Классы и методы

### Класс `ProgressBar`

- **Конструктор**: Инициализирует прогресс-бар и настраивает обработчики событий.
- **setProgress(progressValue)**: Обновляет прогресс-бар до указанного значения.
- **onInputChange(event)**: Обрабатывает изменения в поле ввода.
- **toggleAnimation(isAnimated)**: Включает или отключает анимацию.
- **toggleVisibility(isHidden)**: Скрывает или показывает прогресс-бар.
- **onControlChange(event)**: Обрабатывает изменения в переключателях анимации и видимости.
