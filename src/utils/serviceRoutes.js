export const staticServices = [
  {
    name: "Infrastructure & Network",
    slug: "infrastructure-network",
    visible: true,
  },
  { name: "Cloud", slug: "cloud", visible: true },
  { name: "Security", slug: "security", visible: true },
  { name: "Web Development", slug: "web-development", visible: true },
  { name: "Training", slug: "training", visible: true },
  { name: "Consulting", slug: "consulting", visible: true },
];

/**
 * Combines active static services with admin-created services.
 * Duplicates are automatically skipped.
 */
export const mergeServices = (adminServices = []) => {
  const activeStatic = staticServices.filter((s) => s.visible);
  const staticSlugs = activeStatic.map((s) => s.slug);

  const fromStatic = activeStatic.map((s) => ({
    id: `static-${s.slug}`,
    name: s.name,
    slug: s.slug,
  }));

  const fromAdmin = adminServices
    .filter((s) => s.slug && !staticSlugs.includes(s.slug))
    .map((s) => ({
      id: s.id,
      name: s.service_name || s.slug,
      slug: s.slug,
    }));

  return [...fromStatic, ...fromAdmin];
};
