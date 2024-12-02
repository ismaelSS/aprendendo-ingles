'use client'

import sortWeekMonths, { iSortWeekMonths } from '@/functions/sortWeekMonths'
import { useEffect, useState } from 'react'
import { Slider } from '@/components/ui/slider'

import './styles.css'

type tWeekDaysSelection = 'weekDays' | 'months' | 'all'

export default function WeekMonthsCard() {
  const [cardValues, setCardValues] = useState<iSortWeekMonths>({
    english: 'sunday',
    portuguese: 'domingo',
    portuguesePronunciation: 'san-dei',
  })
  const [isFlipped, setIsFlipped] = useState(false)
  const [reset, setReset] = useState(false)
  const [weekDaysSelection, setWeekDaysSelection] = useState<tWeekDaysSelection>('all')

  useEffect(() => {
    setCardValues(sortWeekMonths({weekMonthChosen: weekDaysSelection}))
  }, [reset])

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  const resetAll = () => {
    if (isFlipped) {
      setIsFlipped(false)
      setTimeout(() => setReset(!reset), 500)
    } else {
      setReset(!reset)
    }
  }

  const handleChange = (newValue: number[]) => {
    if(newValue[0] === 0 ){
      setWeekDaysSelection('weekDays'); 
    }else if(newValue[0] === 1){
      setWeekDaysSelection('all');
    }else{
      setWeekDaysSelection('months');
    }
    console.log("Valor escolhido:", newValue[0]);
  };

  return (
    <div className="flex flex-col gap-6 items-center">
      
      <div className="w-[60vh] flex justify-center items-center gap-2 text-xl font-bold">
        <span>dias</span>
        <Slider defaultValue={[1]} max={2} step={1} className="rounded-md h-2 w-1/2" onValueChange={handleChange}/>
        <span>messes</span>
      </div>

      <div
        className="perspective w-[60vh] h-[80vh] max-w-[90vw] relative "
        onClick={handleFlip}
      >
        <div className={`square-item ${isFlipped ? 'flipped' : ''}`}>
          <div className="square-side bg-blue-600 front flex items-center justify-center">
            <p className="text1 text-center">{cardValues?.english}</p>
          </div>
          <div className="square-side bg-red-600 back flex items-center justify-between text-start flex-col gap-5 p-3 pt-12">
            <p className="text1 text-center">{cardValues?.english}</p>
            <div className="relative bottom-16 flex flex-col gap-10">
              <p className="text5 text-center">{cardValues?.portuguese}</p>
              <p className="text5 text-center">
                {cardValues?.portuguesePronunciation}
              </p>
            </div>
            <div />
          </div>
        </div>
      </div>

      <button
        className="text5 w-[60vh] max-w-[90vw] bg-purple-600 rounded-lg h-16"
        onClick={resetAll}
      >
        resetar
      </button>


    </div>
  )
}
