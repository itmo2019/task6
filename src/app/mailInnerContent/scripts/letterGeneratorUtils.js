const months = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];

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

export const generateRandomCount = (from, to) => {
  return Math.floor(Math.random() * (to - from) + from);
};

const getRandomObj = (array) => {
  return array[generateRandomCount(0, array.length)];
};

export const generateName = () => {
  const name = getRandomObj(names);
  const surname = getRandomObj(surnames);
  return `${name} ${surname}`;
};

export const generateContent = async () => {
  const paragraphsCount = generateRandomCount(1, 2);

  const text = await fetch(
    `https://baconipsum.com/api/?type=meat&formaat=json&paras=${paragraphsCount}`
  );
  return text.json();
};

export const generateDate = () => {
  const date = new Date();
  return `${date.getDate()} ${months[date.getMonth()]}`;
};
