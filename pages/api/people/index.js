import { people } from "../../../data/people";

const handler = (req, res) => {
  return res.status(200).json(people);
};

export default handler;
