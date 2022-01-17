const Description: React.FC = () => {
  return (
    <div className="text-center my-8">
      <h1 className="text-4xl font-bold">Wordlol</h1>
      <p className="italic">Practice your Wordle game, for the lols.</p>
      <ul className="text-left text-xl list-disc mt-4">
        <li>Guess the word by typing it in the input below.</li>
        <li>You have 5 guesses.</li>
        <li>
          If a letter is in the correct location, it will be{" "}
          <span className="text-green-500 font-bold">green</span>
        </li>
        <li>
          If a letter is in the word but in the wrong location, it will be{" "}
          <span className="text-yellow-500 font-bold">yellow</span>
        </li>
        <li>
          If a letter is not in the word, it will be{" "}
          <span className="text-gray-500 font-bold">gray</span>
        </li>
      </ul>
    </div>
  );
};

export default Description;
