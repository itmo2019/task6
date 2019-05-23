const names = [
  'Андре',
  'Борислав',
  'Герасим',
  'Вадим',
  'Кирилл',
  'Ролан',
  'Михаил',
  'Генрих',
  'Василий',
  'Всеволод',
  'Владимир',
  'Тимур',
  'Аристарх',
  'Рудольф',
  'Клим',
  'Эмин',
  'Дамир',
  'Махмуд',
  'Евдоким',
  'Трофим',
  'Ерофей',
  'Джамал',
  'Юхим',
  'Вольдемар',
  'Максуд',
  'Павел',
  'Евдоким',
  'Соломон',
  'Рушан',
  'Нильс',
  'Витольд',
  'Евдоким',
  'Назар',
  'Арий',
  'Демид',
  'Никон',
  'Теодор',
  'Валерий',
  'Иннокентий',
  'Гарри',
  'Донат',
  'Терентий',
  'Владлен',
  'Адриан',
  'Филимон',
  'Петр',
  'Рафик',
  'Велизар',
  'Клавдий',
  'Назар'
];

const surnames = [
  'Аслаханов',
  'Есиков',
  'Якушин',
  'Дубровский',
  'Ильин',
  'Бойдало',
  'Чижиков',
  'Сусляков',
  'Тянников',
  'Андреев',
  'Кулаков',
  'Куимов',
  'Горемыкин',
  'Будников',
  'Шукшин',
  'Жарков',
  'Сукачев',
  'Рюриков',
  'Меликов',
  'Жеглов',
  'Буклин',
  'Праздников',
  'Кожуров',
  'Семёнов',
  'Грибов',
  'Абдулов',
  'Грибов',
  'Панкин',
  'Головаха',
  'Игнаткович',
  'Костомаров',
  'Осинцев',
  'Ржевский',
  'Косяк',
  'Шишкин',
  'Терёшин',
  'Гречко',
  'Калашник',
  'Беломестов',
  'Водолеев',
  'Князев',
  'Бок',
  'Сурков',
  'Бондарчюк',
  'Юдачёв',
  'Делов',
  'Волков',
  'Крутин',
  'Меншиков',
  'Ерёмин'
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

export const generateAuthorNameWithAbbr = () => {
  const name = getRandomElement(names);
  const surname = getRandomElement(surnames);
  const authorAbbr = name[0] + surname[0];
  const author = `${name} ${surname}`;
  return { author, authorAbbr };
};

export const generateText = async () => {
  const paragraphsCount = generateRandomInt(3, 5);

  const text = await fetch(
    `https://baconipsum.com/api/?type=meat&formaat=json&paras=${paragraphsCount}`
  );
  // return ['asd'];
  return text.json();
};
