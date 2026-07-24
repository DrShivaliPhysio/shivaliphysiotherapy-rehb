import type { MetadataRoute } from "next";
import { Constants } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${Constants.siteUrl}/sitemap.xml`,
    host: Constants.siteUrl,
  };
}