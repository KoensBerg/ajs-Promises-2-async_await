# Задача #2 («async/await») к лекции «Promises, async/await»

[![Build status](https://ci.appveyor.com/api/projects/status/01cw21ys4871506x?svg=true)](https://ci.appveyor.com/project/KoensBerg/ajs-promises-2-async-await)

ДЗ выполнено на основе шаблона, включающего в себя WebPack, Babel, ESLint, JEST, AppVeyor, Husky.

Исходное ДЗ — [здесь](https://github.com/KoensBerg/ajs-homeworks-descriptions/tree/ajs8/async)

Команды для терминала:
- `npm start`: "webpack serve --mode development"
- `npm run build`: "webpack --mode production"
- `npm run build-dev`: "webpack --mode development"
- `npm run lint`: "eslint ./src"
- `npm test`: "jest --coverage"

---

## Условия исходного ДЗ

### Легенда

Вы устали от бесконечной цепочки `.then().then().catch()` и решили перейти на `async/await`.

### Описание

Перепишите предыдущую задачу с использованием `async/await`. Не забудьте про `try-catch` для отлова ошибок. Для этого используйте async IIFE (модуль `app.js`):
```javascript
(async () => {
  // Your code here with await
})();
```

---

### Замечание

`Jest` указывает, что файл `app.js` содержит непокрытые строки (конструкция `catch`). Поэтому конструкцию `try…catch` я убрал.