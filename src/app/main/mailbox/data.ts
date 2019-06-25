export const MAX_VISIBLE_MAILS = 30;
export const MIN_AUTO_MAIL_INTERVAL = 10;
export const MIN_AUTO_MAIL_CONSEQUENT_SPAN_INTERVAL = 300000;
export const MAX_AUTO_MAIL_INTERVAL = 600000;

let mailCnt = 0;

export class Mail {
  id: number;

  img: string;
  author: string;
  title: string;
  date: string;
  text: string;
  state: string;

  old: boolean;
  checked: boolean;
  deleted: boolean;

  constructor({img, author, title, date, text, old, state = 'hidden'}: {img: string, author: string, title: string, date: string, text: string, old: boolean, state?: string}) {
    this.img = img;
    this.author = author;
    this.title = title;
    this.date = date;
    this.text = text;
    this.old = old;
    this.state = state;
    this.id = mailCnt++;
    this.checked = false;
    this.deleted = false;
  }

  setCheck(value: boolean) {
    this.checked = value;
  }

  markDeleted() {
    this.deleted = true;
  }
}

export const PRELOADED_MAILS = [
  new Mail({
    img: 'images/owl-face.jpg',
    author: 'Сова',
    title: 'От совы',
    date: 'Mar 9',
    text: `<h1>Как падают кошки</h1>
      <article>
          <section>
              Большинство представителей семейства кошачьих имеет склонность к обзору местности с высоты. Крупные лесные кошки-рыси вообше значительную часть времени проводят на деревьях, находясь в засаде или погоне за добычей. А львы и леопарды в саваннах Африки приспособились в жаркое время отдыхать на деревьях, распластавшись на ветках и опустив вниз лапы. Случается, однако, что кошки не удерживаются на высоте и падают. Но и в падении у них есть свои особенности. Многим приходилось наблюдать, как падает обыкновенная кошка, сорвавшись с карниза дома, с дерева или с забора. Сначала она падает к земле головой, спиной или боком, но затем, сделав резкий поворот в воздухе, вывертывается и становится на лапки. И так всегда. Как бы ни падала кошка, приземляется она всегда на лапки и тотчас же может бежать дальше. Такое мгновенное выравнивание положения тела у кошек обеспечивается действием ее вестибулярного аппарата.
              </section>
              <img class="article__sova" src="images/sova.png" height="300" class="sova" style="float: left; shape-outside: circle(160px);"></img>
          <section>
          При падении кошки вестибулярный аппарат помогает ей осуществить ряд последовательно возникающих рефлексов и приземлиться на лапы. Ненормальное положение тела в пространстве приводит в раздражение отолитовый прибор каналов внутреннего уха кошки. В ответ на это раздражение происходит рефлекторное сокращение мускулов шеи, приводящих голову животного в нормальное положение по отношению к горизонту. Это - первый рефлекс. Сокращение же шейных мышц и постановка шеи при повороте головы являются возбудителем для осуществления другого рефлекса - сокращения определенных мышц туловища и конечностей. В итоге животное принимает правильное положение.
          </section>
          <section>
              Этот сложный врожденный цепной рефлекс выработался у некоторых животных как приспособление к образу жизни. Ведь животным, особенно из семейства кошачьих, часто приходится во время охоты прыгать и падать с деревьев, скал или со спины своей жертвы. И не будь у них этого приспособительного рефлекса, от них не только ушла бы добыча, но иной раз и самому охотнику пришлось бы пострадать от зубов, рогов или копыт своей жертвы.
              </section>
          <p>Текст статьи взят с сайта <a href="https://petsi.net/articles/cats/how-cat-comes-down">petsi.net</a></p>
      </article>`,
    old: false,
    state: 'showed'
  }),
  new Mail({
    img: 'images/cat-face.png',
    author: 'Кот',
    title: 'Старое сообщение',
    date: 'Feb 23',
    text: 'Какое-то старое сообщение',
    old: true,
    state: 'showed'
  }),
  new Mail({
    img: 'images/spam.png',
    author: 'Неспамнеспамнеспамнеспам',
    title: 'Легкий способ зарабатывать 10000000000 в секунду, нужно всего-лишь...',
    date: 'Jan 1',
    text: '[Читать продолжение в источнике]',
    old: false,
    state: 'showed'
  }),
];

export const CAT_NAMES = [
  'Барсик',
  'Боня',
  'Бакс',
  'Алекс',
  'Бади',
  'Амур',
  'Абуссель',
  'Баксик',
  'Кузя',
  'Персик',
  'Абрек',
  'Абрикос',
  'Тимоша',
  'Авалон',
  'Саймон',
  'Бурбузяка Жабс',
  'Марсик',
  'Абу',
  'Маркиз',
  'Аадон',
  'Дымок',
  'Лаки',
  'Сёма',
  'Симба',
  'Абрамович',
  'Пушок',
  'Айс',
  'Бося',
  'Кекс',
  'Басик',
  'Алмаз',
  'Макс',
  'Гарфилд',
  'Феликс',
  'Том',
  'Тиша',
  'Тишка',
  'Цезарь',
  'Мася',
  'Абакан',
  'Лакки',
  'Васька',
  'Марсель',
  'Адольф',
  'Вася',
  'Бабасик',
  'Зевс',
  'Вольт',
  'Лео',
  'Адидас',
  'Зефир',
  'Максик',
  'Вайс',
  'Барс',
  'Кокос',
  'Рыжик',
  'Мартин',
  'Айс-Крим',
  'Томас',
  'Филя',
  'Нафаня',
  'Дарсик',
  'Марс',
  'Валера',
  'Абориген',
  'Тошка',
  'Базиль',
  'Сосисыч',
  'Абрико',
  'Масик',
  'Абус',
  'Абсент',
  'Умка',
  'Жужа',
  'Веня',
  'Каспер',
  'Грей',
  'Живчик',
  'Убийца мышей',
  'Глюк',
  'Патрик',
  'Оптимус Прайм',
  'Виски',
  'Акакий',
  'Симка',
  'Тёма',
  'Баффи',
  'Аватар',
  'Гаврик',
  'Жан батист Гренуй',
  'Ганс',
  'Вегас',
  'Гаврюша',
  'Авдон',
  'Вин Дизель',
  'Вафлик',
  'Бонни',
  'Снежок',
  'Люцифер',
  'Базилио',
  'Тима',
  'Байрон'
];

export const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];
