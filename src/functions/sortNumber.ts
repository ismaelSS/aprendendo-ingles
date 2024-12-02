export interface iGetRandomNumberAndWords {
  number: string
  words: string
  wordsSpeak: string
}

function getNumberInWords(num: number): { words: string; wordsSpeak: string } {
  const ones = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ]

  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ]

  const hundreds = [
    '',
    'one hundred',
    'two hundred',
    'three hundred',
    'four hundred',
    'five hundred',
    'six hundred',
    'seven hundred',
    'eight hundred',
    'nine hundred',
  ]

  const onesSpeak = [
    '',
    'uãn',
    'tiú',
    'thríí',
    'fór',
    'faiv',
    'saecs',
    'séven',
    'eit',
    'nain',
    'tén',
    'ãleven',
    'tuélv',
    'thãrtíín',
    'fórtíín',
    'fiftíín',
    'sicstíín',
    'séventíín',
    'eitíín',
    'naintíín',
  ]

  const tensSpeak = [
    '',
    '',
    'twêni',
    'thãrri',
    'fórtí',
    'fiftí',
    'sicstí',
    'sevení',
    'eirrí',
    'naintí',
  ]

  const hundredsSpeak = [
    '',
    'uãn rãndrid',
    'tiú rãndrid',
    'thríí rãndrid',
    'fór rãndrid',
    'faiv rãndrid',
    'saecs rãndrid',
    'séven rãndrid',
    'eit rãndrid',
    'nain rãndrid',
  ]

  if (num === 0) return { words: 'zero', wordsSpeak: 'ziróu' }
  if (num === 1000000) return { words: 'one million', wordsSpeak: 'uãn miliãn' }

  let words = ''
  let wordsSpeak = ''

  const millions = Math.floor(num / 1000000)
  num %= 1000000

  const thousands = Math.floor(num / 1000)
  num %= 1000

  const hundred = Math.floor(num / 100)
  num %= 100

  const ten = Math.floor(num / 10)
  const one = num % 10

  if (millions > 0) {
    words += 'one million '
    wordsSpeak += 'uãn miliãn '
  }

  if (thousands > 0) {
    const thousandWords = getNumberInWords(thousands)
    words += `${thousandWords.words} thousand, `
    wordsSpeak += `${thousandWords.wordsSpeak} thauzãn, `
  }

  if (hundred > 0) {
    words += hundreds[hundred] + ' '
    wordsSpeak += hundredsSpeak[hundred] + ' '
  }

  if (num > 0) {
    if (num < 20) {
      words += ones[num]
      wordsSpeak += onesSpeak[num]
    } else {
      words += tens[ten] + (one > 0 ? ' ' + ones[one] : '')
      wordsSpeak += tensSpeak[ten] + (one > 0 ? ' ' + onesSpeak[one] : '')
    }
  }

  return { words: words.trim(), wordsSpeak: wordsSpeak.trim() }
}

function probabilityManipulator() {
  const baseNumber = Math.floor(Math.random() * 11)

  if (baseNumber <= 3) {
    return 13
  } else if (baseNumber <= 6) {
    return 901
  } else if (baseNumber <= 8) {
    return 90001
  } else {
    return 1000001
  }
}

export function getRandomNumberAndWords(): iGetRandomNumberAndWords {
  const randomNumber = Math.floor(Math.random() * probabilityManipulator())
  const formattedNumber = randomNumber.toLocaleString('en-US')
  const numberInWords = getNumberInWords(randomNumber)
  return { number: formattedNumber, ...numberInWords }
}
