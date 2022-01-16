import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Description from "../components/description";
import Form from "../components/form";
import Guesses from "../components/guesses";
import Loser from "../components/loser";
import Winner from "../components/winner";
import answers from "./answers.json";

const Home: NextPage = () => {
  const [guesses, setGuesses] = useState<string[]>([]);
  const [answer, setAnswer] = useState<string>("");

  useEffect(() => {
    setRandomAnswer();
  }, []);

  const setRandomAnswer = () => {
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    setAnswer(randomAnswer);
  };

  const playAgain = () => {
    setGuesses([]);
    setRandomAnswer();
  };

  const isWinner = guesses.length > 0 && guesses[guesses.length - 1] === answer;
  if (isWinner) {
    return <Winner guesses={guesses} playAgain={playAgain} />;
  }

  const isLoser = guesses.length >= 5 && guesses[guesses.length - 1] !== answer;
  if (isLoser) {
    return <Loser guesses={guesses} playAgain={playAgain} answer={answer} />;
  }

  return (
    <div className="grid place-items-center">
      <Description />
      <Form guesses={guesses} setGuesses={setGuesses} />
      <Guesses guesses={guesses} answer={answer} />
    </div>
  );
};

export default Home;
