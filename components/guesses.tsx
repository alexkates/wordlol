export interface GuessesProps {
  guesses: string[];
  answer: string;
}

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

const Guesses: React.FC<GuessesProps> = ({ guesses, answer }) => {
  return (
    <ol className="m-4">
      {guesses.map((guess, guessIndex) => (
        <li key={guessIndex} className="grid grid-cols-5">
          {guess.split("").map((letter, letterIndex) => (
            <span
              key={letterIndex}
              className={`${getLetterBackgroundColor(
                guess,
                letterIndex,
                answer
              )} h-12 w-12 text-2xl flex border-2 border-gray-300 p-1 m-1 box-border justify-center items-center`}
            >
              {letter}
            </span>
          ))}
        </li>
      ))}
    </ol>
  );
};

export default Guesses;
