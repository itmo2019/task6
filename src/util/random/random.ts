const img1 = require('./resources/img1.jpg')
const img2 = require('./resources/img2.jpg')
const img3 = require('./resources/img3.jpg')
const img4 = require('./resources/img4.jpg')
const img5 = require('./resources/img5.jpg')

const nouns = ["bird", "clock", "boy", "plastic", "duck", "teacher", "old lady", "professor", "hamster", "dog"]
const verbs = ["kicked", "ran", "flew", "dodged", "sliced", "rolled", "died", "breathed", "slept", "killed"]
const adjectives = ["beautiful", "lazy", "professional", "lovely", "dumb", "rough", "soft", "hot", "vibrating", "slimy"]
const adverbs = ["slowly", "elegantly", "precisely", "quickly", "sadly", "humbly", "proudly", "shockingly", "calmly", "passionately"]
const preposition = ["down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards"]
const months = ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"]
const images = [img1, img2, img3, img4, img5]
const MINUTE = 60000

export class LetterData {
	sender: string;
	text: string;
	day: number;
	month: string;
	image: string;
	checked: boolean;
	visible: boolean;
	shown: boolean;
  id: number;
  key: number;
	static nextId = 0
	constructor(sender: string, text: string, day: number, month: string, image: string) {
		this.sender = sender
		this.text = text
		this.day = day
		this.month = month
		this.checked = false
		this.visible = true
		this.shown = false
		this.image = image
    this.id = LetterData.nextId++
    this.key = this.id
    console.log(this.id)
	}
}

function randomSender(): string {
	return nouns[Math.floor(Math.random() * 10)]
}

function randomSentence(): string {
	let rand1 = Math.floor(Math.random() * 10)
	let rand2 = Math.floor(Math.random() * 10)
	let rand3 = Math.floor(Math.random() * 10)
	let rand4 = Math.floor(Math.random() * 10)
	let rand5 = Math.floor(Math.random() * 10)
	let rand6 = Math.floor(Math.random() * 10)
	let s = "The " + adjectives[rand1] + " " + nouns[rand2] + " " + adverbs[rand3] + " " + verbs[rand4] + " because some " + nouns[rand1] + " " + adverbs[rand1] + " " + verbs[rand1] + " " + preposition[rand1] + " a " + adjectives[rand2] + " " + nouns[rand5] + " which, became a " + adjectives[rand3] + ", " + adjectives[rand4] + " " + nouns[rand6] + "."
	return s
}

function randomDate(): [number, string] {
	return [Math.floor(Math.random() * 28) + 1, months[Math.floor(Math.random() * 12)]];
}

function randomImage(): string {
	return images[Math.floor(Math.random() * 10)]
}

export function randomLetterData(): LetterData {
	const [day, month] = randomDate()
	return new LetterData(randomSender(), randomSentence(), day, month, randomImage())
}
