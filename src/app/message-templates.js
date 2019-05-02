const senders = ['Championat.com', 'Sportbox', 'Матч ТВ', 'Eurosport'];

export function getRandomIndex(arraySize) {
  return Math.floor(Math.random() * arraySize);
}

export function getRandomSender() {
  return senders[getRandomIndex(senders.length)];
}

export async function getRandomThemeAndText() {
  const responseText = await fetch('https://baconipsum.com/api/?type=meat-and-filler');
  const responseTheme = await fetch('https://baconipsum.com/api/?type=meat-and-filler&sentences=1');
  const dataText = await responseText.json();
  const dataTheme = await responseTheme.json();
  return [dataTheme[0], dataText[0]];
}
