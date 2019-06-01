const names = [
  'Фотин',
  'Евтихий',
  'Азарий',
  'Фетис',
  'Полиевкт',
  'Борислав',
  'Кассиан',
  'Юст',
  'Мартьян',
  'Капитон',
  'Никандр',
  'Эрнест',
  'Петроний',
  'Иезекииль',
  'Харитон',
  'Севастиан',
  'Орест',
  'Вит',
  'Василий',
  'Гордей',
  'Максим',
  'Павлин',
  'Захар',
  'Владилен',
  'Наум',
  'Алипий',
  'Меркурий',
  'Феоктист',
  'Овдоким',
  'Феофил'
];

const surnames = [
  'Чашников',
  'Березников',
  'Руликовский',
  'Ляпишев',
  'Оффенберг',
  'Шипов',
  'Арнаутов',
  'Машковцев',
  'Столыпин',
  'Шереметьев',
  'Яворский',
  'Рындин',
  'Лонгинов',
  'Ададуров',
  'Нечаев',
  'Габаев',
  'Маткевич',
  'Маковский',
  'Юрасовский',
  'Ващенко',
  'Кобылин',
  'Карандеев',
  'Золотарёв',
  'Голицын',
  'Игнатьев',
  'Байчуров',
  'Бурдуков',
  'Болтенков',
  'Михеев',
  'Храпов'
];

const months = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];

export const generateRandomInt = (from, to) => {
  return Math.floor(Math.random() * (to - from) + from);
};

const getRandomElement = (array) => {
  return array[generateRandomInt(0, array.length)];
};

export const generateDate = () => {
  const date = new Date();
  return `${date.getDate()} ${months[date.getMonth()]}`;
};

export const generateAuthor = () => {
  const name = getRandomElement(names);
  const surname = getRandomElement(surnames);
  return `${name} ${surname}`;
};

export const generateText = async () => {
  const paragraphsCount = generateRandomInt(3, 5);

  const text = await fetch(
    `https://baconipsum.com/api/?type=meat&formaat=json&paras=${paragraphsCount}`
  );
  return text.json();
};
