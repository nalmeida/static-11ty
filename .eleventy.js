module.exports = function(eleventyConfig) {

	function removeTrailingSlash(str) {
		return str.replace(/\/+$/, '');
	}

	eleventyConfig.addPassthroughCopy('src/assets/fonts');
	eleventyConfig.addPassthroughCopy('src/assets/img');
	eleventyConfig.addPassthroughCopy('src/favicon.ico');
	eleventyConfig.addPassthroughCopy('src/robots.txt');

	const UUID = Math.random().toString(36).slice(-8);

	eleventyConfig.addShortcode('VERSION', function (value) {
		return `${UUID}`;
	});

	const BASE_URL = removeTrailingSlash(process.env.BASE_URL || 'http://localhost:8080');
	
	eleventyConfig.addShortcode('BASE_URL', function (value) {
		return BASE_URL;
	});

	return {
		templateFormats: ['html', 'liquid'],
		dir: {
			input: 'src',
			output: '_site'
		}
	}
}