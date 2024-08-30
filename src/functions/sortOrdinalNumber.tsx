export type tSortOrdinalNumber = {
  number: number,
  ordinal: string
}

export function sortOrdinalNumber():tSortOrdinalNumber {
  const numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 
    30, 40, 50, 60, 70, 80, 90, 100, 1000, 1000000
  ];

  const numberWords = {
    1: "first", 2: "second", 3: "third", 4: "fourth", 5: "fifth",
    6: "sixth", 7: "seventh", 8: "eighth", 9: "ninth", 10: "tenth",
    11: "eleventh", 12: "twelfth", 13: "thirteenth", 14: "fourteenth", 
    15: "fifteenth", 16: "sixteenth", 17: "seventeenth", 18: "eighteenth", 
    19: "nineteenth", 20: "twentieth", 30: "thirtieth", 40: "fortieth", 
    50: "fiftieth", 60: "sixtieth", 70: "seventieth", 80: "eightieth", 
    90: "ninetieth", 100: "hundredth", 1000: "thousandth", 1000000: "millionth"
  };

  const randomIndex = Math.floor(Math.random() * numbers.length);
  const randomNumber = numbers[randomIndex];

  return {
    number: randomNumber,
    //@ts-ignore
    ordinal: numberWords[randomNumber]
  };
}