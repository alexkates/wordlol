import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import answers from "./answers.json";

const Home: NextPage = () => {
  const [guess, setGuess] = useState<string>("");
  const [guesses, setGuesses] = useState<string[]>([]);
  const [answer, setAnswer] = useState<string>("");

  useEffect(() => {
    setRandomAnswer();
  }, []);

  const setRandomAnswer = () => {
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    setAnswer(randomAnswer);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (guess.length !== 5) {
      return;
    }

    setGuesses([...guesses, guess]);
    setGuess("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGuess(event.target.value.replace(/[^a-zA-Z]/g, ""));
  };

  const getLetterBackgroundColor = (
    guess: string,
    index: number,
    answer: string
  ): string => {
    if (answer[index] === guess[index]) {
      return "bg-green-300";
    }

    const countOfLetterOccuringInAnswer = answer
      .split("")
      .filter((letter: string) => letter === guess[index]).length;

    const countOfLetterOccuringInGuessBeforeCurrentIndex = guess
      .slice(0, index)
      .split("")
      .filter((letter: string) => letter === guess[index]).length;

    if (
      answer.includes(guess[index]) &&
      countOfLetterOccuringInAnswer >
        countOfLetterOccuringInGuessBeforeCurrentIndex
    ) {
      return "bg-yellow-300";
    }

    return "bg-gray-300";
  };

  const playAgain = () => {
    setGuesses([]);
    setGuess("");
    setRandomAnswer();
  };

  const isWinner = guesses.length > 0 && guesses[guesses.length - 1] === answer;
  if (isWinner)
    return (
      <div className="grid place-items-center h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold">You Win!</h1>
          <p className="text-xl">Your guesses: {guesses.join(", ")}</p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={() => playAgain()}
          >
            Play Again
          </button>
        </div>
      </div>
    );

  const isLoser = guesses.length >= 5 && guess !== answer;
  if (isLoser)
    return (
      <div className="grid place-items-center h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold">You Lose!</h1>
          <p className="text-xl">The answer was: {answer}</p>
          <p className="text-xl">Your guesses: {guesses.join(", ")}</p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={() => playAgain()}
          >
            Play Again
          </button>
        </div>
      </div>
    );

  return (
    <div className="grid place-items-center">
      <div className="text-center my-8">
        <h1 className="text-4xl font-bold">Wordle</h1>
        <ul className="text-left list-disc mt-4">
          <li>Guess the word by typing it in the input below.</li>
          <li>You have 5 guesses.</li>
          <li>
            If a letter is in the correct location, it will be{" "}
            <span className="text-green-300 font-bold">green</span>
          </li>
          <li>
            If a letter is in the word but in the wrong location, it will be{" "}
            <span className="text-yellow-300 font-bold">yellow</span>
          </li>
          <li>
            If a letter is not in the word, it will be{" "}
            <span className="text-gray-300 font-bold">gray</span>
          </li>
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className="border-2 border-gray-400 p-2 m-2 text-3xl"
          type="text"
          onChange={handleChange}
          maxLength={5}
          value={guess}
          placeholder="Enter your guess"
          required
        />
      </form>
      <ol>
        {guesses.map((guess, guessIndex) => (
          <li key={guessIndex} className="grid grid-cols-5">
            {guess.split("").map((letter, letterIndex) => (
              <span
                key={letterIndex}
                className={`${getLetterBackgroundColor(
                  guess,
                  letterIndex,
                  answer
                )} flex border-2 font-bold text-3xl border-gray-400 p-2 m-2 box-border h-32 w-32 justify-center items-center`}
              >
                {letter}
              </span>
            ))}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Home;
