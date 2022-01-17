import { useState } from "react";

export interface FormProps {
  guesses: string[];
  setGuesses: (guesses: string[]) => void;
}

const Form: React.FC<FormProps> = ({ guesses, setGuesses }: FormProps) => {
  const [guess, setGuess] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (guess.length !== 5) {
      return;
    }

    setGuesses([...guesses, guess]);
    setGuess("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGuess(event.target.value.replace(/[^a-zA-Z]/g, "").toLowerCase());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="text-center border-2 border-gray-400 p-2 m-2 text-3xl"
        type="text"
        onChange={handleChange}
        maxLength={5}
        value={guess}
        placeholder="Enter your guess"
        required
      />
    </form>
  );
};

export default Form;
