import { NextApiRequest, NextApiResponse } from "next";
import { getPageBySlug } from "lib/contentful";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Check the secret and next parameters
  if (req.query.secret !== process.env.PREVIEW_TOKEN || !req.query.slug) {
    return res.status(401).json({ message: "Invalid token" });
  }

  // Check if the provided `slug` exists
  const page = await getPageBySlug(req.query.slug as string, true);

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!page) {
    return res.status(401).json({ message: "Invalid slug" });
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData(
    {},
    { maxAge: 60 * 60 } // preview mode cookies expire in 1 hour
  );

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  res.writeHead(307, { Location: page.slug });
  res.end();
};
