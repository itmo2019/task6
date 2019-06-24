const senders = ['Mom', 'Dad', 'Cat', 'Dog', 'Apple', 'Teacher', 'Homie', 'Mole',
  'Hare', 'BB-8', 'Porg', 'Totoro'];

const actions = ['runs', 'waits', 'flies', 'sleeps', 'lays', 'jumps', 'sings',
  'writes', 'reads', 'executes', 'exists', 'builds', 'tests'];

const adverbs = ['rapidly', 'at home', 'at school', 'at the university', 'on bed',
  'highly', 'alone', 'sadly', 'today'];

const punctuationMarks = ['.', '...', '!', '?', '?!'];

export function getRandomFromRange(minTime, maxTime) {
  return Math.random() * (maxTime - minTime) + minTime;
}

function getRandomInt(minRange, maxRange) {
  return Math.trunc(getRandomFromRange(minRange, maxRange));
}

function genColor() {
  const n = getRandomInt(0, 255);
  let res = n.toString(16);
  while (res.length < 2) {
    res = `0${  res}`;
  }
  return res;
}

export function genLetterText() {
  const letterLen = getRandomInt(2, 2);
  let answer = '';
  for (let i = 0; i < letterLen; i++) {
    const send = senders[getRandomInt(0, senders.length)];
    const act = actions[getRandomInt(0, actions.length)];
    const adv = adverbs[getRandomInt(0, adverbs.length)];
    const punMark = punctuationMarks[getRandomInt(0, punctuationMarks.length)];
    answer += `${send  } ${act} ${  adv  }${punMark  } `;
  }
  const curDate = new Date();
  const letterDate = `${curDate.getDate()  } ${  curDate.toLocaleString('ru', { month: 'short' })}`;
  const senderOne = senders[getRandomInt(0, senders.length)];
  const colorLetter = `#${  genColor()  }${genColor()  }${genColor()}`;
  return {
    deleted: false,
    letterText: answer,
    sender: senderOne,
    date: letterDate,
    color: colorLetter,
    chose: false,
    isVisible: true
  };
}
