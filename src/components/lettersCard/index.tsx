"use client";

import React, { useEffect, useState } from "react";
import "./styles.css";
import { tAlphabet, alphabet } from "@/localProjectData/alphabet";

export default function LettersCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [reset, setReset] = useState(false);
  const [cardValues, setCardValues] = useState<tAlphabet[]>([]);
  const [alphabetSort, setAlphabetSort] = useState<tAlphabet[]>([...alphabet]);
  const [rounds, setRouds] = useState(0);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const sortLetters = () => {
    const alphabetRest = alphabetSort.length;

    if (alphabetRest > 2) {
      const lettersToAdd: tAlphabet[] = [];

      const addLetterToAdd = () => {
        const indexToAdd = Math.floor(Math.random() * alphabetSort.length);
        lettersToAdd.push(...alphabetSort.splice(indexToAdd, 1));
      };

      addLetterToAdd();
      addLetterToAdd();
      addLetterToAdd();

      setCardValues(lettersToAdd);
    } else if (alphabetRest === 0) {
      setAlphabetSort([...alphabet]);
    } else {
      setRouds(rounds + 1);
      setCardValues(alphabetSort);
      setAlphabetSort([...alphabet]);
    }
  };

  useEffect(() => {
    sortLetters();
  }, [reset]);

  const resetAll = () => {
    if (isFlipped) {
      setIsFlipped(false);
      setTimeout(() => setReset(!reset), 500);
    } else {
      setReset(!reset);
    }
  };

  return (
    <div className="flex flex-col gap-6 items-center">
      <div
        className="perspective w-[60vh] h-[60vh] max-w-[90vw] relative "
        onClick={handleFlip}
      >
        <div className={`square-item ${isFlipped ? "flipped" : ""}`}>
          <div className="square-side bg-blue-600 front flex flex-col items-center justify-center">
            <div className="flex gap-8 text5">
              {cardValues.map((value, index) => (
                <p key={index}>{value.letter}</p>
              ))}
            </div>
          </div>

          <div className="square-side bg-red-600 back flex items-center justify-center text-start flex-col ">
            <div className="flex gap-8">
              {cardValues.map((value, index) => (
                <p key={index} className="flex flex-col items-center text5">
                  {value.letter}
                  <span className="text4">{value.pronunciation}</span>
                </p>
              ))}
            </div>
            <div />
          </div>
        </div>
      </div>

      <div>
        <span className="text3 self-start">rodadas: {rounds}</span>
        <span> </span>
      </div>

      <button
        className="text5 w-[60vh] max-w-[90vw] bg-purple-600 rounded-lg h-16"
        onClick={resetAll}
      >
        Sortear
      </button>
    </div>
  );
}
