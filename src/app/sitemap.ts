import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { projects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = siteConfig.url;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/projects`, changeFrequency: "monthly", priority: 0.8 },
      ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
        url: `${base}/projects/${project.slug}`,
        changeFrequency: "monthly",
        priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}
