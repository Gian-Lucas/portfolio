import * as prismic from "@prismicio/client";

export const clientPrismic = prismic.createClient("projects-portfolio", {
  accessToken: import.meta.env.VITE_ACCESS_TOKEN_PRISMIC?.toString(),
});
