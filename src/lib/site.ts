import { siteConfig } from "../config";

// Prefixes a public/ asset path with the deploy base (e.g. "/umar-safdar-portfolio" on GitHub Pages).
export const withBase = (path: string) =>
  `${import.meta.env.BASE_URL.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;

// Sections shown in the header and footer nav, in page order. Empty sections are hidden.
export const navSections = [
  { id: "about", label: "About", show: true },
  { id: "experience", label: "Experience", show: siteConfig.experience?.length > 0 },
  { id: "projects", label: "Projects", show: siteConfig.projects?.length > 0 },
  { id: "apps", label: "Apps", show: siteConfig.apps?.items?.length > 0 },
  {
    id: "certifications",
    label: "Certifications",
    show: siteConfig.certifications?.length > 0,
  },
  { id: "education", label: "Education", show: siteConfig.education?.length > 0 },
].filter((section) => section.show);
