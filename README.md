# Задание №5 «Catharsis»

Современный Web шагнул далеко вперед. Для решения актуальных задач классический подход к созданию сайтов подвергается значительной трансформации как в идеологическом, так и в техническом планах.

Мы предлагаем вам перенести всю функциональность реализованную ранее на новый технологический стек, в основе которого лежит React и подготовили для вас шаблон проекта, в котором уже решены трудности, с которыми сталкиваются программисты в начале разработки.

## Требования

– Приложение должно быть разработано на основе шаблона без модификаций сборки.

– Логика не должна пострадать: должно работать добавление/удаление/выделение/открытие писем.

– Анимации тоже должны остаться и они так же должны быть сделаны с использованием CSS.

Стилизовать можно любым способом описанным в документации [Create React App](https://facebook.github.io/create-react-app/docs/adding-a-stylesheet), но не забывайте о БЭМ.

## Начало работы

Форкните репозиторий `itmo2019/task5`.
Склонируйте форк и установите зависимости:

```bash
git clone https://github.com/<username>/task5/
cd task5
npm install
```

## Настройка IDE

WebStorm включает в себя всё необходимое для работы.

Для VSCode рекомендуется установить следующие плагины:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

## Доступные команды

Вызываются следующим образом: `npm run <command>`

| Команда  | Действие                                                   |
| -------- | ---------------------------------------------------------- |
| dev      | Запуск приложения в режиме разработки                      |
| test     | Запуск тестов                                              |
| build    | Сборка скриптов, стилей и других ресурсов для production   |
| lint     | Проверка кода на потенциальные ошибки и соответствие стилю |
| lint-fix | Исправление ошибок выявленных в процессе проверки          |
| format   | Форматирование кода                                        |

Особенности команд:

- `dev` — Вызывает скрипт [start из react-scripts](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/scripts/start.js), который, в свою очередь, запускает `webpack` и `webpack-dev-server`.
  Сам `webpack` выполняет сборку скриптов, стилей и других ресурсов (картинки, шрифты, etc...), а `webpack-dev-server` раздаёт полученные артефакты сборки, обновляет их в режиме реального времени при изменении исходного кода.
- `test` — Запускает `jest` в режиме `watch`. Он, в свою очередь, запускает тесты, которые затрагивают
  изменившийся код. Подробнее можно прочитать [здесь](https://facebook.github.io/create-react-app/docs/running-tests).
- `build` — Вызывает скрипт [build из react-scripts](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/scripts/build.js). Он выполняет сборку скриптов, стилей и ресурсов также как и `start`, но применяет различные оптимизации.
- `lint` — Запускает [eslint](https://eslint.org), используется [конфиг](https://github.com/hellroot/eslint-config) основанный на популярном наборе правил от [airbnb](https://github.com/airbnb/javascript).
- `lint-fix` — Запускает [eslint](https://eslint.org) с флагом `--fix`. Исправляет все ошибки, для которых есть возможность автоматического фикса, остальные же требуют ручной обработки.
- `format` — Запускает утилиту [prettier](https://prettier.io), которая приводит весь код к единому стилю.

Перед отправкой решения рекомендуется применять команды `lint-fix` и `format`.

## Документация

- [React](https://reactjs.org) 🇺🇸
- [React](https://ru.reactjs.org) 🇷🇺
- [Create React App](https://facebook.github.io/create-react-app/docs/getting-started) 🇺🇸

![We need to go deeper](https://raw.githubusercontent.com/evgenymarkov/public-images/master/go-deeper.png)
