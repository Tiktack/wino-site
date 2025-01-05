/** @type {import('lint-staged').Config} */
const lintStagedConfig = {
	// `bun lint` fails if it's called from `lint-staged` and there are files starting with a `(`, e.g. `(home.tsx)`
  '*.{js,jsx,ts,tsx}': ["npm run lint"],
};

module.exports = lintStagedConfig;