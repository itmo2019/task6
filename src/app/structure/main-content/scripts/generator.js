const companies = ['ebay', 'facebook', 'live', 'yandex', 'live', 'reddit', 'twitter', 'youtube'];
const topics = [
  'Внимание!',
  'Добро пожаловать!',
  'Обновление',
  'Получите приз!',
  'Восстановление аккаунта',
  'Ищем сотрудников',
  'Спасибо за отзыв'
];
const hello = ['Здравствуйте!', 'Добрый день!', 'Привет!', 'Приветствую!', 'Салют!'];
const word1 = ['Я', 'Меня зовут', 'Это'];
const firstName = ['Виталий', 'Андрей', 'Владимир', 'Алексей', 'Артём', 'Антон'];
const secondName = [
  'Соболев',
  'Чиркин',
  'Борисов',
  'Орехов',
  'Гаврилов',
  'Иванов',
  'Сергеев',
  'Онегин'
];
const phrase1 = [
  'Так вышло, что',
  'Нам стало известно, что',
  'Сообщаем вам, что',
  'Как вы могли заметить,',
  'С сегоднящнего дня'
];
const nouns1 = ['эксперт', 'редактор', 'программист', 'рабочий'];
const verbs = [
  'взломал',
  'проверил',
  'удалил',
  'исправил',
  'закрыл',
  'заметил',
  'пометил',
  'пересмотрел',
  'передал'
];
const nouns2 = ['счет', 'аккаунт', 'пароль', 'кабинет'];
const adjectives = [
  'идеальный',
  'прямой',
  'обратный',
  'наш',
  'постоянный',
  'великолепный',
  'исключительный',
  'личный',
  'ваш'
];

let counter = 0;

export function randomInt(min, max) {
  return Math.floor((max - min) * Math.random() + min);
}

function randFromList(list) {
  return list[randomInt(0, list.length)];
}

const randomDate = () => {
  const m = randomInt(1, 12);
  let day = randomInt(1, 30);
  if (m === 2) day = Math.min(28, day);
  const month = [
    'янв',
    'фев',
    'мар',
    'апр',
    'май',
    'июн',
    'июл',
    'авг',
    'сен',
    'окт',
    'ноя',
    'дек'
  ];
  return `${String(day)} ${String(month[m - 1])}`;
};

const generateText = sender => {
  const textContent = [
    `${randFromList(hello)} ${randFromList(word1)} ${randFromList(firstName)} ${randFromList(
      secondName
    )}, глава компании ${sender.toUpperCase()}.`
  ];
  textContent.push(
    `${randFromList(phrase1)} ${randFromList(adjectives)} ${randFromList(nouns1)} ${randFromList(
      verbs
    )} ${randFromList(adjectives)} ${randFromList(nouns2)}.`
  );
  return textContent;
};

export const generateNewLetter = () => {
  counter++;
  const id = counter;
  const author = randFromList(companies);
  const text = generateText(author);
  const topic = randFromList(topics);
  const date = randomDate();

  return {
    key: `id${id}`,
    id: `id${id}`,
    text,
    author,
    topic,
    date,
    isChecked: false,
    isVisible: true
  };
};
