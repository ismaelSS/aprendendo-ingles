'use client'

import React, { useEffect, useState } from 'react';
import './styles.css';
import { getRandomNumberAndWords, iGetRandomNumberAndWords } from '@/functions/sortNumber';

export default function CardFlip() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [reset, setReset] = useState(false)
  const [cardValues, setCardValues] = useState<iGetRandomNumberAndWords>()

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    const cardNumber = getRandomNumberAndWords()
    setCardValues(cardNumber)
  }, [reset])

  const resetAll = () => {

    if(isFlipped){
      setIsFlipped(false)
      setTimeout(() => setReset(!reset), 500)
    }else{
      setReset(!reset)
    }
    
  }

  return (
    <div className='flex flex-col gap-6 items-center'>
    <div className="perspective w-[90vw] h-[120vw] max-w-[500px] max-h-[660px] relative " onClick={handleFlip}>
      <div className={`square-item ${isFlipped ? 'flipped' : ''}`}>
        <div className="square-side bg-blue-600 front flex items-center justify-center">
          <p className='text1'>{cardValues?.number}</p>
        </div>
        <div className="square-side bg-red-600 back flex items-center justify-between text-start flex-col gap-5 p-3 pt-12">
          <p className='text1'>{cardValues?.number}</p>
          <div className='relative bottom-16 flex flex-col gap-10'>
            <p className='text5'>{cardValues?.words}</p>
            <p className='text5'>{cardValues?.wordsSpeak}</p>
          </div>
          <div/>
        </div>
      </div>
    </div>

    <button className='text5 w-[90vw] max-w-[500px] bg-purple-600 rounded-lg h-16' onClick={resetAll}>resetar</button>
    </div>
  );
};

