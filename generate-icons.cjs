
const fs = require("node:fs");
const path = require("node:path");
const icons = require("simple-icons");

const items = [
  ["react", "siReact", "61DAFB"],
  ["nextjs", "siNextdotjs", "FFFFFF"],
  ["typescript", "siTypescript", "3178C6"],
  ["nodejs", "siNodedotjs", "5FA04E"],
  ["postgresql", "siPostgresql", "4169E1"],
  ["mongodb", "siMongodb", "47A248"],
  ["prisma", "siPrisma", "FFFFFF"],
  ["vitest", "siVitest", "6E9F18"],
  ["playwright", "siPlaywright", "2EAD33"],
  ["docker", "siDocker", "2496ED"],
  ["githubactions", "siGithubactions", "2088FF"],
];

const output = path.join(process.cwd(), "public", "icons");

fs.mkdirSync(output, { recursive: true });

for (const [filename, key, color] of items) {
  const icon = icons[key];

  if (!icon) {
    console.warn(`Brak ikony: ${key}`);
    continue;
  }

  const svg = icon.svg.replace(
    "<svg ",
    `<svg fill="#${color}" `
  );

  fs.writeFileSync(
    path.join(output, `${filename}.svg`),
    svg,
    "utf8"
  );

  console.log(`OK: ${filename}.svg`);
}
