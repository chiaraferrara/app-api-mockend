import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: any;
  error: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const data = await fetch(
      "https://nodejs-api-production-0c7a.up.railway.app/"
    ).then((response) => response.json());
    res.status(200).json({ data, error: null });
    console.log("Retrieved data from the API.");
  } catch (error) {
    res.status(500).json({ data : null, error: "Errore" });
  }
}
