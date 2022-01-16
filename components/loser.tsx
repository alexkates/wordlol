export interface LoserProps {
  guesses: string[];
  playAgain: () => void;
  answer: string;
}

const Loser: React.FC<LoserProps> = ({ guesses, playAgain, answer }) => {
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
};

export default Loser;
