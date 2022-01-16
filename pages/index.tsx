import type {
  NextPage,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from "next";
import { useEffect, useState } from "react";
import Description from "../components/description";
import Form from "../components/form";
import Guesses from "../components/guesses";
import Loser from "../components/loser";
import Winner from "../components/winner";
import answers from "./answers.json";

export const getServerSideProps: GetServerSideProps = async () => {
  const answer = answers[Math.floor(Math.random() * answers.length)];

  return { props: { answer } };
};

const Home: NextPage = ({
  answer,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [guesses, setGuesses] = useState<string[]>([]);

  useEffect(() => {
    setGuesses([]);
  }, [answer]);

  const isWinner = guesses.length > 0 && guesses[guesses.length - 1] === answer;
  if (isWinner) {
    return <Winner guesses={guesses} answer={answer} />;
  }

  const isLoser = guesses.length >= 5 && guesses[guesses.length - 1] !== answer;
  if (isLoser) {
    return <Loser guesses={guesses} answer={answer} />;
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
