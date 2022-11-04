module.exports = function(eleventyConfig) {

	eleventyConfig.addPassthroughCopy('src/assets/fonts');
	eleventyConfig.addPassthroughCopy('src/assets/img');
	eleventyConfig.addPassthroughCopy('src/favicon.ico');
	eleventyConfig.addPassthroughCopy('src/robots.txt');

	const UUID = Math.random().toString(36).slice(-8);

	eleventyConfig.addShortcode('VERSION', function (value) {
    return `${UUID}`;
  });

	eleventyConfig.addShortcode('BASE_URL', function (value) {
    return `http://localhost:8080`;
  });

	return {
		templateFormats: ['html', 'liquid'],
		dir: {
			input: 'src',
			output: '_site'
		}
	}

}