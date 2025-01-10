// biome-ignore lint/style/useNodejsImportProtocol: <explanation>
const { platform } = require('os');

/** @type {import('lint-staged').Config} */
const lintStagedConfig = {
	// TODO: `bun lint` fails if it's called from `lint-staged` and there are files starting with a `(`, e.g. `(home.tsx)`
	...(platform() === 'win32'
		? {
				// Windows-specific config
				'*.{js,jsx,ts,tsx}': ['bun run lint'],
			}
		: {
				// macOS/Linux config
				'*.{js,jsx,ts,tsx}': ['npm run lint'],
			}),
};

module.exports = lintStagedConfig;
