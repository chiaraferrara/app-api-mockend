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
      "https://mockend.up.railway.app/api/products"
    ).then((response) => response.json());
    res.status(200).json({ data, error: null });
    console.log(data);
  } catch (error) {
    res.status(500).json({ data : null, error: "Errore" });
  }
}
