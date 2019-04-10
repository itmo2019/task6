export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const authors = ['Яндекс', 'Google'];

export function rndAuthor() {
  return authors[getRandomInt(0, authors.length)];
}

const themes = {
  Яндекс: ['Яндекс.Технологии', 'Яндекс.Музыка', 'Яндекс.Дзен'],
  Google: ['Google Play', 'GDrive']
};

export const contents = {
  'Яндекс.Технологии': 'Мы расскажем вам про Яндекс.Технологии',
  'Яндекс.Музыка': 'Подписывайтесь на Яндекс.Музыку',
  'Яндекс.Дзен': 'Умная лента от Яндекс позволит Вам оставаться в курсе новостей',
  'Google Play': 'Would you like to know more about Google Play?',
  GDrive: 'Here is a simple tutorial to get started with GDrive',
  'Доступ к аккаунту восстановлен': 'Поздравляем! Доступ к аккаунту наконец-то восстановлен',
  'Как читать почту с мобильного':
    'Для начала нужно установить мобильное приложение Яндекс.Почты, затем...',
  'Соберите всю почту в этот ящик': 'Чем больше человечество использует интернет'
};

export function rndTheme(author) {
  const concreteThemes = themes[author];
  return concreteThemes[getRandomInt(0, concreteThemes.length)];
}
