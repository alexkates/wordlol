const Description: React.FC = () => {
  return (
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
  );
};

export default Description;
