export interface WinnerProps {
  guesses: string[];
  playAgain: () => void;
}

const Winner: React.FC<WinnerProps> = ({ guesses, playAgain }) => {
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
};

export default Winner;
