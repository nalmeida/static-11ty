var site = require('./src/_data/site');

module.exports = function(eleventyConfig) {

	eleventyConfig.addPassthroughCopy('src/assets/fonts');
	eleventyConfig.addPassthroughCopy('src/assets/img');
	eleventyConfig.addPassthroughCopy('src/favicon.ico');
	eleventyConfig.addPassthroughCopy('src/robots.txt');

	// Filters
	eleventyConfig.addFilter('dateToISO', (dateObj) => {
		let _date = new Date(dateObj);
    return _date.toISOString().split('T')[0];
  });

	// Shortcodes
	const UUID = Math.random().toString(36).slice(-8);
	eleventyConfig.addShortcode('VERSION', function (value) {
		return `${UUID}`;
	});

	function removeTrailingSlash(str) {
		return str.replace(/\/+$/, '');
	}
	const BASE_URL = removeTrailingSlash(process.env.BASE_URL || site.BASE_URL);
	eleventyConfig.addShortcode('BASE_URL', function (value) {
		return BASE_URL;
	});

	return {
		templateFormats: ['html', 'njk', 'liquid'],
		dir: {
			data: '_data',
			input: 'src',
			output: '_site'
		}
	}
}