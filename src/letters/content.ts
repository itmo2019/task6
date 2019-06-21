export function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const authors = ['Яндекс', 'Google'];

export function rndAuthor() {
  return authors[getRandomInt(0, authors.length)];
}

export const themes = new Map<string, string[]>();
themes.set('Яндекс', ['Яндекс.Технологии', 'Яндекс.Музыка', 'Яндекс.Дзен']);
themes.set('Google', ['Google Play', 'GDrive']);

export const contents = new Map<string, string>();

contents.set('Яндекс.Технологии', 'Мы расскажем вам про Яндекс.Технологии');
contents.set('Яндекс.Музыка', 'Подписывайтесь на Яндекс.Музыку');
contents.set('Яндекс.Дзен', 'Умная лента от Яндекс позволит Вам оставаться в курсе новостей');
contents.set('Google Play', 'Would you like to know more about Google Play?');
contents.set('GDrive', 'Here is a simple tutorial to get started with GDrive');
contents.set(
  'Доступ к аккаунту восстановлен',
  'Поздравляем! Доступ к аккаунту наконец-то восстановлен'
);
contents.set(
  'Как читать почту с мобильного',
  'Для начала нужно установить мобильное приложение Яндекс.Почты, затем...'
);
contents.set('Соберите всю почту в этот ящик', 'Чем больше человечество использует интернет');

export function rndTheme(author: string) {
  const concreteThemes = themes.get(author);
  if (concreteThemes === undefined) {
    return 'none';
  }
  return concreteThemes[getRandomInt(0, concreteThemes.length)];
}
