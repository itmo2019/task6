import { Mail, CAT_NAMES, MONTHS } from './data';

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getAuthor() {
  // Cat names
  const names = CAT_NAMES;
  return names[getRandomInt(0, names.length)];
}

function getCurrentTime() {
  return new Date().getTime();
}

function getDate() {
  const date = new Date();
  const months = MONTHS;
  const day = date.getDate();
  const monthIndex = date.getMonth();
  return `${months[monthIndex]} ${day}`;
}

function getImg() {
  const size = 100 + (getCurrentTime() % 200);
  return `http://placekitten.com/${size}/${size}`;
}

function sendRequest(link: string) {
  const xhttp = new XMLHttpRequest();
  let res = '';
  xhttp.onreadystatechange = () => {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
      res = xhttp.responseText;
    }
  };
  xhttp.open('GET', link, false);
  xhttp.send();
  return res;
}

function getTitle() {
  return sendRequest(
    'https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=0&format=text'
  );
}

function getText() {
  return sendRequest(
    'https://baconipsum.com/api/?type=all-meat&paragraphs=5&start-with-lorem=1&format=text'
  );
}

function generateMail() {
  return new Mail({
    img: getImg(),
    author: getAuthor(),
    title: getTitle(),
    date: getDate(),
    text: getText(),
    old: false,
  });
}

export { generateMail, getCurrentTime, getRandomInt };
