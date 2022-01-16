import type { NextApiRequest, NextApiResponse } from "next";
import answers from "./answers.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const answer = answers[Math.floor(Math.random() * answers.length)];
    res.status(200).json({ answer });
  } else {
    res.status(500).send({ error: "failed to fetch data" });
  }
}
