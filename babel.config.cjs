const styleXPlugin = require('@stylexjs/babel-plugin');

/** @type {import('@babel/core').TransformOptions} */
module.exports = {
	plugins: [
		[
			styleXPlugin,
			{
				dev: true,
				unstable_moduleResolution: {
					type: 'commonJS',
					rootDir: __dirname,
				},
			},
		],
	],
};
