"use client";

import React, { useEffect, useState } from "react";
import "./styles.css";
import {
  sortOrdinalNumber,
  tSortOrdinalNumber,
} from "@/functions/sortOrdinalNumber";

export default function OrdinalNumberCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [cardValues, setCardValues] = useState<tSortOrdinalNumber>();

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    setCardValues(sortOrdinalNumber());
  }, []);

  const resetAll = () => {
    if (isFlipped) {
      setIsFlipped(false);
      setTimeout(() => setCardValues(sortOrdinalNumber()), 500);
    } else {
      setCardValues(sortOrdinalNumber());
    }
  };

  return (
    <div className="flex flex-col gap-6 items-center">
      <div
        className="perspective w-[60vh] h-[60vh] max-w-[90vw] relative "
        onClick={handleFlip}
      >
        <div className={`square-item ${isFlipped ? "flipped" : ""}`}>
          <div className="square-side bg-blue-600 front flex items-center justify-center">
            <p className="text1">{cardValues?.number}</p>
          </div>

          <div className="square-side bg-red-600 back flex items-center justify-center">
            <p className="text1">{cardValues?.ordinal}</p>
            <div />
          </div>
        </div>
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
