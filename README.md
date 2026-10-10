# Portfolio refactor — structure only

This refactor splits the original large `Portfolio.js` and `globals.css` without intentionally changing the UI or content.

## Drop-in structure

- `Portfolio.jsx` — state, effects and orchestration only
- `data/portfolioData.js` — translations, projects and tech list
- `components/` — reusable interactive pieces
- `sections/` — page sections
- `globals.css` — only imports section styles
- `styles/` — CSS split by feature / section

## Integration

1. Put the `portfolio-refactor` folder where your current portfolio component lives, or move its contents into your preferred `components/portfolio` folder.
2. Replace the old large Portfolio component import with `Portfolio.jsx`.
3. Replace the old global stylesheet content with the provided `globals.css`, and keep the `styles/` folder next to it. If your real `app/globals.css` must stay in `app/`, adjust the import paths accordingly.
4. Keep the same public assets and API route paths — this refactor does not rename them.

No visual redesign is included here on purpose. The next step can be animation / UI polish after the codebase is easier to work with.
