import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

console.log(process.env);

export const client = sanityClient({
  projectId: "tw5ozu5e",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "sk3W93B7lT9q5GkmcsWFpKAWer1yIQWDsXE0zOIgx8j4HIVJHz7RHRCS8JEceSpXZKJbMELknZ3QWhDX1GfVD2yjQEKire6IWILiBYdHn19lmb8ASFnxoGsiiz0cdXKdntGTGz7NN3b35qGu7FjnOFfC8dS7FAOaGSVNzUYfbe2ZJcNvqcgZ",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
