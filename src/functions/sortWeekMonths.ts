export interface iWeekdays {
  english:
    | 'sunday'
    | 'monday'
    | 'tuesday'
    | 'wednesday'
    | 'thursday'
    | 'friday'
    | 'saturday'
    | string
  portuguese:
    | 'domingo'
    | 'segunda-feira'
    | 'terça-feira'
    | 'quarta-feira'
    | 'quinta-feira'
    | 'sexta-feira'
    | 'sábado'
    | string
  portuguesePronunciation: string
}

export interface iSortWeekMonthsProps {
  weekMonthChosen?: 'weekDays' | 'months' | 'all'
}

export interface iSortWeekMonths {
  english: string
  portuguese: string
  portuguesePronunciation: string
}

export default function sortWeekMonths({
  weekMonthChosen = 'all',
}: iSortWeekMonthsProps): iSortWeekMonths {
  const weekDays: iWeekdays[] = [
    {
      english: 'sunday',
      portuguese: 'domingo',
      portuguesePronunciation: 'san-dei',
    },
    {
      english: 'monday',
      portuguese: 'segunda-feira',
      portuguesePronunciation: 'man-dei',
    },
    {
      english: 'tuesday',
      portuguese: 'terça-feira',
      portuguesePronunciation: 'tuz-dei',
    },
    {
      english: 'wednesday',
      portuguese: 'quarta-feira',
      portuguesePronunciation: 'wenz-dei',
    },
    {
      english: 'thursday',
      portuguese: 'quinta-feira',
      portuguesePronunciation: 'thurz-dei',
    },
    {
      english: 'friday',
      portuguese: 'sexta-feira',
      portuguesePronunciation: 'frai-dei',
    },
    {
      english: 'saturday',
      portuguese: 'sábado',
      portuguesePronunciation: 'sa-tr-dei',
    },
  ]

  const months: iSortWeekMonths[] = [
    {
      english: 'january',
      portuguese: 'janeiro',
      portuguesePronunciation: 'jeniueri',
    },
    {
      english: 'february',
      portuguese: 'fevereiro',
      portuguesePronunciation: 'februeri',
    },
    {
      english: 'march',
      portuguese: 'março',
      portuguesePronunciation: 'mar chi',
    },
    {
      english: 'april',
      portuguese: 'abril',
      portuguesePronunciation: 'eipróu',
    },
    {
      english: 'may',
      portuguese: 'maio',
      portuguesePronunciation: 'mei',
    },
    {
      english: 'june',
      portuguese: 'junho',
      portuguesePronunciation: 'ju un',
    },
    {
      english: 'july',
      portuguese: 'julho',
      portuguesePronunciation: 'julai',
    },
    {
      english: 'agust',
      portuguese: 'agosto',
      portuguesePronunciation: 'aagust (a com som de R em inglês)',
    },
    {
      english: 'october',
      portuguese: 'outubro',
      portuguesePronunciation: 'aaktubêr',
    },
    {
      english: 'november',
      portuguese: 'novembro',
      portuguesePronunciation: 'nouvembêr',
    },
    {
      english: 'december',
      portuguese: 'dezembro',
      portuguesePronunciation: 'dûzembêr',
    },
  ]
  let chosenElements = weekDays

  if (weekMonthChosen === 'months') {
    chosenElements = weekDays
  } else if (weekMonthChosen === 'all') {
    chosenElements = weekDays.concat(months)
  }

  const sortElementIndex = Math.floor(Math.random() * chosenElements.length)
  const sortElement = chosenElements[sortElementIndex]
  return sortElement
}
