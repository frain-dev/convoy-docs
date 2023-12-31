/** @type {import('next').NextConfig} */
const path = require('path');
const withMarkdoc = require('@markdoc/next.js');

const nextConfig = {
	experimental: {
		appDir: true
	},
	output: 'standalone',
	pageExtensions: ['md', 'mdoc', 'js', 'jsx', 'ts', 'tsx'],
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')]
	}
};

module.exports = withMarkdoc()(nextConfig);
